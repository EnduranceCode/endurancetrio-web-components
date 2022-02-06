/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
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
  events: 'events/events.json',
};

/**
 * Returns the URL of the endpoint to perform the desired query
 *
 * @param {String} key
 * @returns the endpoint to be queried
 */
export function getEndpoint(key) {
  return BASE_URL.concat(endpoints[key]);
}
