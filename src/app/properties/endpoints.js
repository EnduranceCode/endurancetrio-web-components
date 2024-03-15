/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

/**
 * Base URL of the API is use
 */
const BASE_URL = process.env.BASE_URL;

/**
 * Base URL of the Live Results API is use
 */
const LIVE_RESULTS_BASE_URL = process.env.LIVE_RESULTS_BASE_URL;

/**
 * The flag that defines if a mocked API is in use, i.e., JSON files are used to simulate a REST API response. When set
 * to 'true', the suffix '.json' will be added to all endpoints.
 */
const IS_MOCKED_API = process.env.IS_MOCKED_API === 'true';

/**
 * Object that stores the API endpoints
 */
const endpoints = {
  events: 'events/',
  event: 'events/',
  results: 'results/',
};

/**
 * Returns the URL of the endpoint to perform the desired query
 *
 * @param {String} key The key of the desired endpoin
 * @param {String} filename The neme of the file that contains the requeired data
 * @returns the endpoint to be queried
 */
export function getEndpoint(key, filename) {
  const url = BASE_URL.concat(endpoints[key], filename);

  if (IS_MOCKED_API) {
    return url.concat('.json');
  }

  return url;
}

/**
 * Returns the URL of the endpoint to perform the live results query
 *
 * @param {String} rangeName the given range name of the required results
 * @returns the endpoint to query the results of the given range name
 */
export function getLiveResultsEndpoint(rangeName) {
  const url = LIVE_RESULTS_BASE_URL.concat(rangeName);

  return url;
}
