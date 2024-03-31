/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 *
 * @file Generates the endpoints for the resources for the FILES API
 */

/**
 * Base URL of the API is use
 */
const FILES_API_BASE_URL = process.env.FILES_API_BASE_URL;

/**
 * Object that contais the resources available on the FILES API
 */
const filesApiResources = {
  events: 'events/',
  races: 'races/',
};

/**
 * Gets the endpoint on the FILES API for the given resource type and resource reference.
 *
 * @param resource the given resource type
 * @param resourceReference the give resource reference
 *
 * @returns the requested endpoint
 */
export function getResourceFilesApiEndpoint(resource, resourceReference) {
  const yearParameter = resourceReference.substring(0, 4).concat('/');

  return FILES_API_BASE_URL.concat(yearParameter, filesApiResources[resource], resourceReference, '.json');
}
