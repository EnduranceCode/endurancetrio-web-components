/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { ResultsTable } from '../utils/ResultsTable';
import { ResultsTabs } from '../utils/ResultsTabs';
import { AgeGroups } from '../utils/AgeGroups';
import { BulmaTabs } from '../bulma/BulmaTabs';

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
    this.buildOverallResultsView(overallResultsReference);

    this.setAgeGroups(overallResultsReference);
    this.setAgeGroupsResults(overallResultsReference);

    this.buildAgeGroupsResultsView(overallResultsReference);
  }

  setAgeGroups(overallResultsReference) {
    const overallResultsData = this.resultsMap.get(overallResultsReference);
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

    this.ageGroupsMap.set(overallResultsReference, ageGroups);
  }

  setAgeGroupsResults(overallResultsReference) {
    const ageGroups = this.ageGroupsMap.get(overallResultsReference);

    ageGroups.forEach((ageGroup) => {
      const ageGroupResultsData = this.resultsMap.get(overallResultsReference).filter((element) => {
        return element.ageGroup == ageGroup.name;
      });

      this.sortResultsDataByRank(ageGroupResultsData);

      this.setAgeGroupRank(ageGroupResultsData);

      this.resultsMap.set(overallResultsReference + '-' + ageGroup.name, ageGroupResultsData);
    });
  }

  sortResultsDataByRank(resultsData) {
    resultsData.sort((a, b) => {
      return a.rank - b.rank;
    });
  }

  setAgeGroupRank(resultsData) {
    let rank = 1;
    resultsData.forEach((result) => {
      if (typeof result.rank == 'number') {
        result.rank = rank;
        rank = rank + 1;
      }
    });
  }

  buildOverallResultsView(overallResultsReference) {
    const overallResultsTable = document.querySelector(`[data-result-reference='${overallResultsReference}']`);
    const overallResultsData = this.resultsMap.get(overallResultsReference);

    this.resultsTableLabels.set(overallResultsReference, ResultsTable.getResultsTableLabels(overallResultsData));
    ResultsTable.populateResultsTableBody(overallResultsTable, overallResultsData);
    ResultsTable.populateResultsTableHead(overallResultsTable, this.resultsTableLabels.get(overallResultsReference));
  }

  buildAgeGroupsResultsView(overallResultsReference) {
    const ageGroupsResultsTabList = document.getElementById(overallResultsReference + '-LST');
    const ageGroupsResultsTabContent = document.getElementById(overallResultsReference + '-DIV');
    const ageGroupsList = this.ageGroupsMap.get(overallResultsReference);

    ResultsTabs.populateTabsList(ageGroupsResultsTabList, overallResultsReference, ageGroupsList);
    ResultsTabs.populateTabsContent(
      ageGroupsResultsTabContent,
      overallResultsReference,
      ageGroupsList,
      this.resultsMap
    );

    new BulmaTabs(ageGroupsResultsTabList.children, ageGroupsResultsTabContent.children).init();
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
