/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { getResourceFilesApiEndpoint } from '../properties/files-api-endpoints';
import { getErrorMessage, errorMessagesKeys } from '../i18n/error-messages';

class EventService {
  /**
   * Returns the event with the given reference
   *
   * @param {String} eventReference reference of the event to fetch
   * @returns the desired event
   */
  static async getEventByReference(eventReference) {
    const result = await fetch(getResourceFilesApiEndpoint('events', eventReference), { cache: 'no-store' })
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

    return result;
  }
}

export { EventService };
