/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { getErrorMessage, errorMessagesKeys } from '../i18n/error-messages';
import { getResourceEndpointOnFilesApi as getResourceEndpoint } from '../properties/files-api-endpoints';

class RaceService {
  static async getRaceByReference(raceReference) {
    const race = await fetch(getResourceEndpoint('races', raceReference), { cache: 'no-store' })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return { error: getErrorMessage(errorMessagesKeys.eventNotFound) };
        }
      })
      .catch(() => {
        return { error: getErrorMessage(errorMessagesKeys.networkError) };
      });

    return race;
  }
}

export { RaceService };
