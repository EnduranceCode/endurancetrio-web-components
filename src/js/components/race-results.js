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

  console.log(resultsMap.get(resultsReference));
  console.log(results);
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
