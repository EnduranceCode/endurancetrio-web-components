/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { RaceResultsTableView } from './RaceResultsTableView';

class RaceResultsTabView {
  static builTabsMenu(raceModel) {
    const raceReference = raceModel.raceReference;

    const tabsMenu = document.createElement('div');
    tabsMenu.classList.add('tabs', 'is-boxed');

    const ul = document.createElement('ul');

    const li = document.createElement('li');
    li.setAttribute('data-target', (raceReference + '-' + 'absolutos').toLowerCase());
    li.classList.add('is-active');

    const a = document.createElement('a');

    a.appendChild(document.createTextNode('Absolutos'));
    li.appendChild(a);
    ul.appendChild(li);

    raceModel.ageGroupsList.forEach((ageGroup) => {
      const li = document.createElement('li');
      li.setAttribute('data-target', (raceReference + '-' + ageGroup.name).toLowerCase());

      const a = document.createElement('a');

      a.appendChild(document.createTextNode(ageGroup.name));
      li.appendChild(a);
      ul.appendChild(li);
    });

    tabsMenu.appendChild(ul);
    return tabsMenu;
  }

  static buildTabsContainer(raceModel) {
    const raceReference = raceModel.raceReference;
    const ageGroupsList = raceModel.ageGroupsList;
    const overallResults = raceModel.results.overall;

    const tabsContainer = document.createElement('div');

    const section = document.createElement('section');
    section.id = (raceReference + '-' + 'absolutos').toLowerCase();

    const resultsTable = RaceResultsTableView.buildResultsTable(overallResults);

    section.appendChild(resultsTable);
    tabsContainer.appendChild(section);

    ageGroupsList.forEach((ageGroup) => {
      const section = document.createElement('section');
      section.id = (raceReference + '-' + ageGroup.name).toLowerCase();

      const resultsTable = RaceResultsTableView.buildResultsTable(raceModel.results[ageGroup.name]);

      section.appendChild(resultsTable);
      tabsContainer.appendChild(section);
    });

    return tabsContainer;
  }
}

export { RaceResultsTabView };
