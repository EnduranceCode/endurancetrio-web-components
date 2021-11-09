/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { ResultsTable } from '../utils/ResultsTable';
import { AgeGroups } from '../utils/AgeGroups';

class RaceResults {
  static SAMPLE_DATA_FOLDER_URL =
    'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/data/';

  resultsMap = new Map();
  resultsTableLabels = new Map();
  ageGroupsMap = new Map();

  getUrl(overallResultsReference) {
    return RaceResults.SAMPLE_DATA_FOLDER_URL + overallResultsReference + '.json';
  }

  getOverallResults(overallResultsReference, callbackFunction) {
    const url = this.getUrl(overallResultsReference);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((overallResultsData) => {
        this.resultsMap.set(overallResultsReference, overallResultsData);
        callbackFunction(overallResultsReference);
      });
  }

  buildResultsView(overallResultsReference) {
    const overallResultsTable = document.querySelector(`[data-result-reference='${overallResultsReference}']`);
    const overallResultsData = this.resultsMap.get(overallResultsReference);

    this.resultsTableLabels.set(overallResultsReference, ResultsTable.getResultsTableLabels(overallResultsData));
    ResultsTable.populateResultsTableBody(overallResultsTable, overallResultsData);
    ResultsTable.populateResultsTableHead(overallResultsTable, this.resultsTableLabels.get(overallResultsReference));

    this.ageGroupsMap.set(overallResultsReference, this.getAgeGroups(overallResultsData));
  }

  getAgeGroups(overallResultsData) {
    const officialAgeGroups = AgeGroups.officialAgeGroups;
    const ageGroups = [];

    overallResultsData.forEach((result) => {
      let ageGroupObject = officialAgeGroups.find((element) => {
        return element.name == result.ageGroup;
      });

      if (!ageGroups.includes(ageGroupObject)) {
        ageGroups.push(ageGroupObject);
      }
    });

    ageGroups.sort((a, b) => {
      return a.order - b.order;
    });

    return ageGroups;
  }

  displayResults() {
    const overallResultsTables = Array.prototype.slice.call(document.querySelectorAll('[data-result-reference]'), 0);

    if (overallResultsTables.length > 0) {
      overallResultsTables.forEach((table) => {
        const overallResultsReference = table.getAttribute('data-result-reference');
        this.getOverallResults(overallResultsReference, this.buildResultsView.bind(this));
      });
    }
  }
}

export { RaceResults };
