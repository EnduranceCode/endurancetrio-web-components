/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

const SAMPLE_DATA_FOLDER_URL =
  'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/data/';

const resultsMap = new Map();

function getUrl(resultsReference) {
  return SAMPLE_DATA_FOLDER_URL + resultsReference + '.json';
}

function getResults(resultsReference, callback) {
  const url = getUrl(resultsReference);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((results) => {
      callback(resultsReference, results);
    });
}

function populateTable(resultsReference, results) {
  resultsMap.set(resultsReference, results);

  const table = document.querySelector(`[data-result-reference='${resultsReference}']`);

  // Populate results table body
  results.forEach((element) => {
    let tableRow = table.insertRow();
    for (const key in element) {
      let cell = tableRow.insertCell();
      let value = document.createTextNode(element[key]);
      cell.appendChild(value);
    }
  });

  // Get columns labels
  const columnsLabels = Object.keys(results[0]);

  // Populate table head
  let thead = table.createTHead();
  let tr = thead.insertRow();
  columnsLabels.forEach((label) => {
    let th = document.createElement('th');
    let value = document.createTextNode(label);
    th.appendChild(value);
    tr.appendChild(th);
  });
}

export default function displayResults() {
  const resultTables = Array.prototype.slice.call(document.querySelectorAll('[data-result-reference]'), 0);

  if (resultTables.length > 0) {
    resultTables.forEach((table) => {
      const resultReference = table.getAttribute('data-result-reference');
      getResults(resultReference, populateTable);
    });
  }
}
