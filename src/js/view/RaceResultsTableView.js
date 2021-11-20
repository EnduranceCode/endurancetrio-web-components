/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

class RaceResultsTableView {
  static buildResultsTable(resultsData) {
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');

    const table = document.createElement('table');
    table.classList.add('table', 'is-fullwidth', 'is-striped', 'is-narrow', 'is-hoverable');

    RaceResultsTableView.appendResultsTableBody(table, resultsData);

    const resultsTableLabels = RaceResultsTableView.getResultsTableLabels(resultsData);
    RaceResultsTableView.appendResultsTableHead(table, resultsTableLabels);

    tableContainer.appendChild(table);

    return tableContainer;
  }

  static getResultsTableLabels(resultsData) {
    return Object.keys(resultsData[0]);
  }

  static appendResultsTableHead(table, columnsLabels) {
    const thead = table.createTHead();
    const tr = thead.insertRow();

    columnsLabels.forEach((label) => {
      const th = document.createElement('th');
      th.classList.add('results-table__th', 'results-table__th--sort');
      const textNode = document.createTextNode(label);
      th.appendChild(textNode);
      tr.appendChild(th);
    });

    const rankColumn = tr.firstChild;
    rankColumn.classList.remove('results-table__th--sort');
    rankColumn.classList.add('results-table__th--sort-ascending');
  }

  static appendResultsTableBody(table, resultsData) {
    resultsData.forEach((result) => {
      const tr = table.insertRow();

      for (const key in result) {
        const td = tr.insertCell();
        const textNode = document.createTextNode(result[key]);
        td.appendChild(textNode);
      }
    });
  }
}

export { RaceResultsTableView };
