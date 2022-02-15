/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { getEndpoint } from '../properties/endpoints';
import { getErrorMessage, errorMessagesKeys } from '../i18n/error-messages';

import { Constants } from '../utils/Constants';

class ResultsService {
  /**
   * Fetchs the overall results for the given results reference
   * and sets results for each Age Group present
   *
   * @param {String} resultsReference The results reference of the desired results
   * @returns the results of the given results reference
   */
  static async getResultsByReference(resultsReference) {
    const apiData = await ResultsService.getResultsByReferenceFromJsonFile(resultsReference);

    const results = new Map();

    if (apiData.error) {
      results.set('error', apiData.error);
      const errorResponse = { results: results };
      return errorResponse;
    }

    apiData.results = results.set('overall', apiData.results);
    const resultsAgeGroups = getAgeGroups(apiData.results.get('overall'));

    if (resultsAgeGroups.length <= 1) {
      return apiData;
    }

    /*
     * Get a clone of the API Results to be able to prepare a list of results for each Age Group present
     * The clone is made following the sugestion at https://stackoverflow.com/a/40283265
     */
    const overallResults = apiData.results.get('overall').map((result) => {
      return Object.assign({}, result);
    });

    resultsAgeGroups.forEach((ageGroup) => {
      const ageGroupResults = overallResults.filter((result) => {
        return result.ageGroup == ageGroup.shortName;
      });

      sortResultsByRank(ageGroupResults);
      setSequentialRank(ageGroupResults);

      results.set(ageGroup.shortName, ageGroupResults);
    });

    return apiData;
  }

  /**
   * Fetchs, from a JSON file, the overall results for the given results reference
   *
   * @param {String} resultsReference The results reference of the desired results
   * @returns
   */
  static async getResultsByReferenceFromJsonFile(resultsReference) {
    const url = getEndpoint('results', resultsReference);

    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return { error: getErrorMessage(errorMessagesKeys.resultsNotFound) };
        }
      })
      .catch(() => {
        return { error: getErrorMessage(errorMessagesKeys.networkError) };
      });
  }
}

/**
 * Gets the list ao all Age Groups on the overall results
 *
 * @param {Array} overallResultsData The overall results of the race
 * @returns The list of all Age Groups on the overall results
 */
function getAgeGroups(overallResultsData) {
  const ageGroupsList = [];

  overallResultsData.forEach((result) => {
    const ageGroupObject = Constants.AGE_GROUPS.find((officialAgeGroup) => {
      return result.ageGroup == officialAgeGroup.shortName;
    });

    if (!ageGroupsList.includes(ageGroupObject)) {
      ageGroupsList.push(ageGroupObject);
    }
  });

  ageGroupsList.sort((a, b) => {
    return a.order - b.order;
  });

  return ageGroupsList;
}

/**
 * Sorts the given results by rank
 *
 * @param {Array} resultsData Results array to be sorted by rank
 */
function sortResultsByRank(resultsData) {
  resultsData.sort((a, b) => {
    return a.rank - b.rank;
  });
}

/**
 * Sets the given results rank with sequential numbers
 *
 * @param {Array} resultsData Results array to be set with a sequential rank
 */
function setSequentialRank(resultsData) {
  let rank = 1;
  resultsData.forEach((result) => {
    if (typeof result.rank == 'number') {
      result.rank = rank;
      rank = rank + 1;
    }
  });
}

export { ResultsService };
