/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { getEndpoint } from '../properties/endpoints';
import { getErrorMessage, errorMessagesKeys } from '../i18n/error-messages';

class EventService {
  /**
   * Returns the event with the given reference
   *
   * @param {String} eventReference reference of the event to fetch
   * @returns the desired event
   */
  static async getEventByReference(eventReference) {
    const results = await this.getEvents();

    if (results.error) {
      return results;
    } else {
      let requestedEvent = { error: getErrorMessage(errorMessagesKeys.eventNotFound) };
      results.map((result) => {
        if (result.eventReference == eventReference) {
          requestedEvent = result.event;
        }
      });
      return requestedEvent;
    }
  }

  /**
   * Fetchs all events that are stored on the server
   *
   * @returns the all events stored on the server
   */
  static async getEvents() {
    return fetch(getEndpoint('events', 'events'))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return { error: getErrorMessage(errorMessagesKeys.eventsListNotFound) };
        }
      })
      .catch(() => {
        return { error: getErrorMessage(errorMessagesKeys.networkError) };
      });
  }
}

export { EventService };
