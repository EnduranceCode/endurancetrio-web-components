/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

/**
 * Base URL of the Live Results API is use
 */
const LIVE_RESULTS_BASE_URL = process.env.LIVE_RESULTS_BASE_URL;

/**
 * Returns the URL of the endpoint to perform the live results query.
 *
 * @param {String} rangeName the given range name of the required results
 *
 * @returns the endpoint to query the results of the given range name
 */
export function getLiveResultsEndpoint(rangeName) {
  const url = LIVE_RESULTS_BASE_URL.concat(rangeName);

  return url;
}
