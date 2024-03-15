/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { getErrorMessage, errorMessagesKeys } from '../i18n/error-messages';
import { getEndpoint, getLiveResultsEndpoint } from '../properties/endpoints';
import { Constants } from '../utils/Constants';

class ResultsService {
  /**
   * Fetchs the overall results for the given results reference
   * and sets results for each Age Group present.
   *
   * @param {String} resultsReference The results reference of the desired results.
   * @returns the results of the given results reference.
   */
  static async getResultsByReference(raceReference) {
    const apiData = await ResultsService.getResultsByReferenceFromJsonFile(raceReference);

    const results = new Map();

    if (apiData.error) {
      results.set('error', apiData.error);
      const errorResponse = { results: results };
      return errorResponse;
    }

    apiData.results = results.set('overall', apiData.results);
    const ageGroups = getAgeGroups(apiData.results.get('overall'));

    if (ageGroups.length <= 1) {
      return apiData;
    }

    const overallResults = cloneResults(apiData.results.get('overall'));

    ageGroups.forEach((ageGroup) => {
      const ageGroupResults = overallResults.filter((result) => {
        return result.ageGroup == ageGroup.shortName;
      });

      sortResultsByRank(ageGroupResults);
      setSequentialRank(ageGroupResults);
      calculateAgeGroupGaps(ageGroupResults);

      results.set(ageGroup.shortName, ageGroupResults);
    });

    return apiData;
  }

  /**
   * Fetchs the overall live results, from a Live Results API, for the given range name
   * and sets results for each Age Group present.
   *
   * @param {String} rangeName the given range name that contains the required results
   * @returns the results of the given range name
   */
  static async getLiveRaceResultsByRangeName(rangeName) {
    const apiData = await ResultsService.getLiveResultsByRangeName(rangeName);

    const results = new Map();

    if (apiData.error) {
      results.set('error', apiData.error);
      const errorResponse = { results: results };
      return errorResponse;
    }

    apiData.raceReference = rangeName.toUpperCase(rangeName);
    apiData.results = results.set('overall', apiData.data);
    const ageGroups = getAgeGroups(apiData.results.get('overall'));

    if (ageGroups.length <= 1) {
      return apiData;
    }

    const overallResults = cloneResults(apiData.results.get('overall'));

    ageGroups.forEach((ageGroup) => {
      const ageGroupResults = overallResults.filter((result) => {
        return result.ageGroup == ageGroup.shortName;
      });

      sortResultsByRank(ageGroupResults);
      setSequentialRank(ageGroupResults);
      calculateAgeGroupGaps(ageGroupResults);

      results.set(ageGroup.shortName, ageGroupResults);
    });

    return apiData;
  }

  /**
   * Fetchs, from a JSON file, the overall results for the given race reference.
   *
   * @param {String} raceReference The race reference of the desired results.
   * @returns The overall results of the given race reference.
   */
  static async getResultsByReferenceFromJsonFile(raceReference) {
    const url = getEndpoint('results', raceReference);

    return fetch(url, { cache: 'no-store' })
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

  /**
   * Fetchs the overall live results, from a Live Results API, for the given range name.
   *
   * @param {String} rangeName The race reference of the desired results.
   * @returns The overall results of the given race reference.
   */
  static async getLiveResultsByRangeName(rangeName) {
    const url = getLiveResultsEndpoint(rangeName);

    return fetch(url, { cache: 'no-store' })
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
 * Gets the list ao all Age Groups on the overall results.
 *
 * @param {Array} overallResultsData The overall results of the race.
 * @returns The list of all Age Groups on the overall results.
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
 * Creates a clone of the given API Results array to be used to prepare a list of results for each Age Group present
 * The clone is made following the sugestion at https://stackoverflow.com/a/40283265
 *
 * @param results the given API Results array
 * @returns the clone of the given API Results array
 */
function cloneResults(results) {
  return results.map((result) => {
    return Object.assign({}, result);
  });
}

/**
 * Sorts the given results by rank.
 *
 * @param {Array} resultsData Results array to be sorted by rank.
 */
function sortResultsByRank(resultsData) {
  resultsData.sort((a, b) => {
    return a.rank - b.rank;
  });
}

/**
 * Sets the given results rank with sequential numbers.
 *
 * @param {Array} resultsData Results array to be set with a sequential rank.
 */
function setSequentialRank(resultsData) {
  let rank = 1;
  resultsData.forEach((result) => {
    if (parseInt(result.rank)) {
      result.rank = rank;
      rank = rank + 1;
    }
  });
}

/**
 * Sets the correct time gap in the Age Groups results.
 *
 * @param {Array} resultsData Results array to be set with the correct time gap for the Age Groups results.
 */
function calculateAgeGroupGaps(resultsData) {
  const arrayWinnerTotal = resultsData[0].total.split(':');
  const winnerTotal = arrayWinnerTotal.length === 3 ? new Date() : null;

  if (winnerTotal) {
    winnerTotal.setHours(arrayWinnerTotal[0]);
    winnerTotal.setMinutes(arrayWinnerTotal[1]);
    winnerTotal.setSeconds(arrayWinnerTotal[2]);
  }

  const hourInMiliseconds = 60 * 60 * 1000;
  const minuteInMiliseconds = 60 * 1000;

  resultsData.map((result) => {
    const arrayResultTotal = result.total.split(':');
    const resultTotal = arrayResultTotal.length === 3 ? new Date() : null;

    if (resultTotal) {
      resultTotal.setHours(arrayResultTotal[0]);
      resultTotal.setMinutes(arrayResultTotal[1]);
      resultTotal.setSeconds(arrayResultTotal[2]);

      const gapMilisecons = resultTotal - winnerTotal;

      const numberFormart = new Intl.NumberFormat('pt-PT', { minimumIntegerDigits: 2 });
      const diffHours = numberFormart.format(Math.floor(gapMilisecons / hourInMiliseconds));
      const diffMinutes = numberFormart.format(Math.floor(gapMilisecons / minuteInMiliseconds) - diffHours * 60);
      const diffSeconds = numberFormart.format(Math.floor(gapMilisecons / 1000) - diffHours * 3600 - diffMinutes * 60);

      result.gap = diffHours.concat(':', diffMinutes, ':', diffSeconds);
    }
  });
}

export { ResultsService };
