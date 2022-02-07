/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

class Utils {
  /**
   * Checks if 'object' is an empty object. Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * @param {object} object The object to check
   */
  static isObjectEmpty(object) {
    return object && Object.keys(object).length === 0 && object.constructor === Object;
  }
}

export { Utils };
