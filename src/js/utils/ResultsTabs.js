/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { ResultsTable } from './ResultsTable';

class ResultsTabs {
  static populateTabsList(ageGroupsResultsTabList, overallResultsReference, ageGroupsList) {
    ageGroupsList.forEach((ageGroup) => {
      const a = document.createElement('a');
      a.appendChild(document.createTextNode(ageGroup.name));

      const li = document.createElement('li');
      li.appendChild(a);
      li.setAttribute('data-target', (overallResultsReference + ageGroup.name).toLowerCase());
      ageGroupsResultsTabList.appendChild(li);
    });

    ageGroupsResultsTabList.firstChild.classList.add('is-active');
  }

  static populateTabsContent(ageGroupsResultsTabContent, overallResultsReference, ageGroupsList, resultsMap) {
    ageGroupsList.forEach((ageGroup) => {
      const table = document.createElement('table');
      table.classList.add('table', 'is-fullwidth', 'is-striped', 'is-narrow', 'is-hoverable');
      ResultsTable.populateResultsTableBody(table, resultsMap.get(overallResultsReference + '-' + ageGroup.name));
      ResultsTable.populateResultsTableHead(
        table,
        ResultsTable.getResultsTableLabels(resultsMap.get(overallResultsReference))
      );

      const div = document.createElement('div');
      div.classList.add('table-container');
      div.appendChild(table);

      const section = document.createElement('section');
      section.id = (overallResultsReference + ageGroup.name).toLowerCase();
      section.classList.add('tab-content');

      section.appendChild(div);

      ageGroupsResultsTabContent.appendChild(section);
    });
  }
}

export { ResultsTabs };
