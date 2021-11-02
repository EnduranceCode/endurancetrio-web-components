/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

const SAMPLE_FILE_REFERENCE = '2021051601F';

function getUrl(fileReference) {
  return (
    'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/data/' + fileReference + '.json'
  );
}

function getResults(fileReference, callback) {
  const url = getUrl(fileReference);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((jsonResults) => {
      callback(jsonResults);
    });
}

function logResults(jsonResults) {
  const myResults = jsonResults;
  console.log(myResults);
}

export default function displayResults() {
  getResults(SAMPLE_FILE_REFERENCE, logResults);
}
