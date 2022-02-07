/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html } from 'lit';
import { appStyles } from './css/app-style';

import './components/event-header/EventHeader';

import { EventService } from './service/EventService';

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

        <section class="section mb-5">Results Header</section>
        <section class="section mb-5">Results</section>
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
