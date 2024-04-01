/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 *
 * @file Generates the endpoints for the resources on the FILES API
 */

/**
 * Base URL of the API is use.
 */
const FILES_API_BASE_URL = process.env.FILES_API_BASE_URL;

/**
 * Object that contais the resources paths available on the FILES API.
 */
const filesApiResourcesPaths = {
  events: 'events/',
  races: 'races/',
};

/**
 * Object that contais the files paths available on the FILES API.
 */
const filesApiPaths = {
  'event-files': 'event-files/',
  'results-files': 'results-files/',
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
  return FILES_API_BASE_URL.concat(
    getYearParameter(resourceReference),
    filesApiResourcesPaths[resource],
    resourceReference,
    '.json'
  );
}

/**
 * Gets the url for the given file in the FILES API.
 *
 * @param fileResource the given file resource
 * @param fileName the given filename
 *
 * @returns the url for the given file
 */
export function getFilesApiUrl(fileResource, fileName) {
  return FILES_API_BASE_URL.concat(
    getYearParameter(fileName),
    getResourceFromFile(fileResource),
    getResourceReferenceFromFile(fileResource, fileName),
    filesApiPaths[fileResource],
    fileName
  );
}

/**
 * Gets the year path parameter for the given asset.
 * @param asset the given asset
 * @returns the year path parameter for the given asset
 */
function getYearParameter(asset) {
  return asset.substring(0, 4).concat('/');
}

/**
 * Gets the resource path value for the given file.
 *
 * @param fileResource the given file resource
 * @param fileName the given file name
 *
 * @returns the resource path value for the given file
 */
function getResourceFromFile(fileResource) {
  switch (fileResource) {
    case 'event-file':
      return filesApiResourcesPaths.events;
    case 'results-files':
      return filesApiResourcesPaths.races;
    default:
      break;
  }
}

/**
 * Gets the resource reference value for the given file.
 *
 * @param fileResource the given file resource
 * @param fileName the given file name
 *
 * @returns the resource path reference for the given file
 */
function getResourceReferenceFromFile(fileResource, fileName) {
  switch (fileResource) {
    case 'event-file':
      return fileName.substring(0, 12).concat('/');
    case 'results-files':
      return fileName.substring(0, 18).concat('/');
    default:
      break;
  }
}
