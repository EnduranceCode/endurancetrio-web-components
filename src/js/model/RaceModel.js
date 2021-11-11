/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

class RaceModel {
  raceReference = '';
  raceData = {};
  ageGroupsList = [];
  results = {
    overall: [],
  };

  constructor(raceReference) {
    this.raceReference = raceReference;
  }
}

export { RaceModel };
