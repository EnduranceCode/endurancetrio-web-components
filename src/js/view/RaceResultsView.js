/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { BulmaTabs } from '../bulma/BulmaTabs';
import { RaceResultsTabView } from './RaceResultsTabView';

class RaceResultsView {
  raceModel;

  constructor(raceModel) {
    this.raceModel = raceModel;
  }

  render() {
    const tabsOptions = RaceResultsTabView.builTabsMenu(this.raceModel);
    const tabsContainers = RaceResultsTabView.buildTabsContainer(this.raceModel);

    const raceResultContainer = document.querySelector(`[data-race-reference="${this.raceModel.raceReference}"]`);

    const progressIndicator = raceResultContainer.querySelector('.progress');
    if (progressIndicator) {
      progressIndicator.remove();
    }

    raceResultContainer.appendChild(tabsOptions);
    raceResultContainer.appendChild(tabsContainers);

    const bulmaTabs = new BulmaTabs(tabsOptions.firstChild.children, tabsContainers.children);
    bulmaTabs.init();
  }
}

export { RaceResultsView };
