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

  /**
   * Concatenates 'city', 'county' and 'city' with comas
   *
   * @param {String} city The city String to concat
   * @param {String} county The county String to concatenate
   * @param {String} district The district String to concatenate
   * @returns the given places concatenated with comas
   */
  static getComposedLocation(city, county, district) {
    function concatPlacesWithComa(firstPlace, secondPlace) {
      if (firstPlace) {
        return secondPlace ? firstPlace.concat(', ', secondPlace) : firstPlace;
      } else {
        return secondPlace;
      }
    }

    let composedEventLocation = city ? city : '';

    composedEventLocation =
      county === composedEventLocation ? composedEventLocation : concatPlacesWithComa(composedEventLocation, county);

    composedEventLocation =
      district === county ? composedEventLocation : concatPlacesWithComa(composedEventLocation, district);

    return composedEventLocation;
  }
}

export { Utils };
