/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import naturalSort from '../vendor/naturalSort';

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

    columnsLabels.forEach((label, index) => {
      const th = document.createElement('th');

      if (index == 0) {
        th.classList.add('results-table__th', 'results-table__th--sort-ascending');
      } else {
        th.classList.add('results-table__th', 'results-table__th--sort');
      }

      const textNode = document.createTextNode(label);
      th.appendChild(textNode);
      tr.appendChild(th);
    });

    RaceResultsTableView.enableRowSorting(table, tr.children);
  }

  static enableRowSorting(table, theadCells) {
    for (let th of theadCells) {
      th.onclick = () => {
        const tableBody = table.tBodies[0];
        const tableRows = tableBody.rows;

        const sortDirection = th.classList.contains('results-table__th--sort-ascending') ? -1 : 1;
        RaceResultsTableView.resetTheadCellsIcon(theadCells);

        if (sortDirection == -1) {
          th.classList.add('results-table__th--sort-descending');
        } else {
          th.classList.add('results-table__th--sort-ascending');
        }

        for (let tr of tableRows) {
          Array.prototype.slice
            .call(tableRows)
            .sort((tr1, tr2) => {
              const cellIndex = th.cellIndex;
              naturalSort.insensitive = true;
              return sortDirection * naturalSort(tr1.cells[cellIndex].textContent, tr2.cells[cellIndex].textContent);
            })
            .forEach((tr) => {
              tableBody.appendChild(tableBody.removeChild(tr));
            });
        }
      };
    }
  }

  static resetTheadCellsIcon(theadCells) {
    Array.from(theadCells).forEach((th) => {
      if (
        th.classList.contains('results-table__th--sort-ascending') ||
        th.classList.contains('results-table__th--sort-descending')
      ) {
        th.classList.remove('results-table__th--sort-ascending', 'results-table__th--sort-descending');
        th.classList.add('results-table__th--sort');
      }
    });
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
