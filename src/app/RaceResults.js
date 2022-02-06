/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html } from 'lit';
import { appStyles } from './css/app-style';

import { EventService } from './service/EventService';

class RaceResults extends LitElement {
  static styles = [appStyles];

  static properties = {
    eventReference: { attribute: 'event-reference' },
    event: {},
  };

  constructor() {
    super();
    this.eventReference = '';
    this.event = {};
  }

  render() {
    return html`<p>Event Header Placeholder [${this.event.title}]</p>`;
  }

  connectedCallback() {
    super.connectedCallback();
    EventService.getEventByReference(this.eventReference).then((result) => {
      this.event = result;
    });
  }
}

customElements.define('race-results', RaceResults);
