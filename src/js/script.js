/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import '../css/style.scss';

import { RaceService } from './service/RaceService';

const raceComponents = Array.prototype.slice.call(document.querySelectorAll('[data-result-reference]'), 0);

if (raceComponents.length > 0) {
  raceComponents.forEach((component) => {
    const raceReference = component.getAttribute('data-result-reference');
    new RaceService().getResults(raceReference);
  });
}
