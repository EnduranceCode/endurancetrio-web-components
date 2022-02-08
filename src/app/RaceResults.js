/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html } from 'lit';

import { appStyles } from './css/app-style';
import { Utils } from './utils/Utils';
import { EventService } from './service/EventService';

import './components/event-header/EventHeader';
import './components/results-header/ResultsHeader';

class RaceResults extends LitElement {
  static styles = [appStyles];

  static properties = {
    eventReference: { attribute: 'event-reference' },
    event: {},
    race: {},
  };

  constructor() {
    super();
    this.eventReference = '';
    this.event = {};
    this.race = {};
  }

  render() {
    return html`
      <article>
        <event-header .event="${this.event}"></event-header>

        <results-header
          location="${Utils.getComposedLocation(this.event.city, this.event.county, this.event.district)}"
          .race="${this.race}"
        ></results-header>
        <section class="section mb-6">Results</section>
      </article>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    EventService.getEventByReference(this.eventReference).then((result) => {
      this.event = result;
    });

    this.addEventListener('changed-race', (e) => {
      this.race = e.detail.race;
    });
  }
}

customElements.define('race-results', RaceResults);
