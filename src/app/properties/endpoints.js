/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

/**
 * Base URL of the API in use on the development phase
 */
const MOCKUP_API_URL_DEV =
  'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/api-mockup/';

/**
 * Base URL of the API is use
 */
const BASE_URL = MOCKUP_API_URL_DEV;

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
  return BASE_URL.concat(endpoints[key], filename, '.json');
}
