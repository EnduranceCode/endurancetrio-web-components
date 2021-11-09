/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */
class ResultsTable {
  static getResultsTableLabels(resultsData) {
    return Object.keys(resultsData[0]);
  }

  static populateResultsTableHead(table, columnsLabel) {
    let thead = table.createTHead();
    let tr = thead.insertRow();

    columnsLabel.forEach((label) => {
      let th = document.createElement('th');
      let value = document.createTextNode(label);
      th.appendChild(value);
      tr.appendChild(th);
    });
  }

  static populateResultsTableBody(table, resultsData) {
    resultsData.forEach((element) => {
      let tr = table.insertRow();

      for (const key in element) {
        let td = tr.insertCell();
        let value = document.createTextNode(element[key]);
        td.appendChild(value);
      }
    });
  }
}

export { ResultsTable };
