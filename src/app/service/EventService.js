/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { getErrorMessage, errorMessagesKeys } from '../i18n/error-messages';

class EventService {
  static ENDPOINT_EVENTS =
    'https://raw.githubusercontent.com/EnduranceCode/endurancetrio-race-results/master/api-mockup/events/events.json';

  static async getEventByReference(eventReference) {
    const results = await this.getEvents();

    if (results.error) {
      return results;
    } else {
      let requestedEvent = {};
      results.map((result) => {
        if (result.eventReference == eventReference) {
          requestedEvent = result.event;
        }
      });
      console.log(requestedEvent);
      return requestedEvent;
    }
  }

  static async getEvents() {
    return fetch(this.ENDPOINT_EVENTS)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return { error: getErrorMessage(errorMessagesKeys.serverError) };
        }
      })
      .catch(() => {
        return { error: getErrorMessage(errorMessagesKeys.networkError) };
      });
  }
}

export { EventService };
