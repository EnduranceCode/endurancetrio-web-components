/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { AgeGroups } from '../model/AgeGroups';
import { RaceModel } from '../model/RaceModel';
import { RaceResultsView } from '../view/RaceResultsView';

class RaceService {
  static SAMPLE_DATA_FOLDER_URL =
    'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/data/';

  raceModel;

  getResults(raceReference) {
    this.getOverallResultsFromFile(raceReference, this.getRaceModel.bind(this));
  }

  getUrl(raceReference) {
    return RaceService.SAMPLE_DATA_FOLDER_URL + raceReference + '.json';
  }

  getOverallResultsFromFile(raceReference, callback) {
    const url = this.getUrl(raceReference);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((overallResults) => {
        callback(raceReference, overallResults);
      });
  }

  getRaceModel(raceReference, overallResults) {
    this.raceModel = new RaceModel(raceReference);
    this.raceModel.results.overall = overallResults;

    this.raceModel.ageGroupsList = this.getAgeGroups(overallResults);

    const clonedOverallResults = overallResults.map((result) => {
      return Object.assign({}, result);
    });
    this.raceModel.ageGroupsList.forEach((ageGroup) => {
      const ageGroupResults = clonedOverallResults.filter((result) => {
        return result.ageGroup == ageGroup.name;
      });

      this.sortResultsDataByRank(ageGroupResults);
      this.setAgeGroupRank(ageGroupResults);

      this.raceModel.results[ageGroup.name] = ageGroupResults;
    });

    const raceResultsView = new RaceResultsView(this.raceModel);
    raceResultsView.displayResults(this.raceModel);
  }

  getAgeGroups(overallResultsData) {
    const ageGroupsList = [];

    overallResultsData.forEach((result) => {
      const ageGroupObject = AgeGroups.officialTriathlonAgeGroups.find((officialAgeGroup) => {
        return result.ageGroup == officialAgeGroup.name;
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
}

export { RaceService };
