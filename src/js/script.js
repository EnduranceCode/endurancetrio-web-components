/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import '../app/race-results';
import '../css/style.scss';

import { RaceService } from './service/RaceService';

const raceComponents = Array.prototype.slice.call(document.querySelectorAll('[data-race-reference]'), 0);

if (raceComponents.length > 0) {
  raceComponents.forEach((component) => {
    const raceReference = component.getAttribute('data-race-reference');
    new RaceService().getResults(raceReference);
  });
}
