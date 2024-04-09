/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { getErrorMessage, errorMessagesKeys } from '../i18n/error-messages';
import { getLiveResultsEndpoint } from '../properties/live-results-api-endpoints';

import { Constants } from '../utils/Constants';

class ResultsService {
  /**
   * Gets the overall live results, from a Live Results API, processes those results.
   * and then returns it included in a Race object.
   *
   * @param {String} rangeName the given range name that contains the required results
   *
   * @returns the results of the given range name
   */
  static async getRaceLiveResultsByRangeName(rangeName) {
    const response = await ResultsService.getLiveResultsByRangeName(rangeName);

    if (response.error) {
      const results = new Map();
      results.set('error', response.error);
      const errorResponse = { results: results };
      return errorResponse;
    }

    const race = {};
    race.raceReference = rangeName.toUpperCase(rangeName);
    race.results = response.data;

    return this.processRacesResults(race);
  }

  /**
   * Fetchs the overall live results, from a Live Results API, for the given range name.
   *
   * @param {String} rangeName the race reference of the desired results
   *
   * @returns The overall results of the given race reference
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

  /**
   * Processes the results of the given race and returns the race with the processed results.
   *
   * @param {Race} race the given race
   *
   * @returns the given race with the processed results
   */
  static processRacesResults(race) {
    const results = new Map();

    race.results = results.set('overall', race.results);

    const ageGroups = getAgeGroups(race.results.get('overall'));

    if (ageGroups.length <= 1) {
      return race;
    }

    const processedRace = race;
    const overallResults = cloneResults(processedRace.results.get('overall'));

    ageGroups.forEach((ageGroup) => {
      const ageGroupResults = overallResults.filter((result) => {
        return result.ageGroup == ageGroup.shortName;
      });

      sortResultsByRank(ageGroupResults);
      setSequentialRank(ageGroupResults);
      calculateAgeGroupGaps(ageGroupResults);

      results.set(ageGroup.shortName, ageGroupResults);
    });

    return processedRace;
  }
}

/**
 * Gets the list ao all Age Groups on the overall results.
 *
 * @param {Array} overallResultsData the overall results of the race
 *
 * @returns the list of all Age Groups on the overall results
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
 * Creates a clone of the given API Results array to be used to prepare a list of results for each Age Group present.
 * The clone is made following the sugestion at https://stackoverflow.com/a/40283265.
 *
 * @param results the given API Results array
 *
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
 * @param {Array} resultsData the given results array to be sorted by rank
 */
function sortResultsByRank(resultsData) {
  resultsData.sort((a, b) => {
    return a.rank - b.rank;
  });
}

/**
 * Sets the given results rank with sequential numbers.
 *
 * @param {Array} resultsData yhe given results array to be set with a sequential rank
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
 * @param {Array} resultsData the given results array to be set with the correct time gap for the Age Groups results
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

  resultsData.forEach((result) => {
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
