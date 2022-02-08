/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html } from 'lit';
import { appStyles } from '../../css/app-style';
import { Utils } from '../../utils/Utils';
import { getUiMessage, uiMessagesKeys } from '../../i18n/ui-messages';

class ResultsHeader extends LitElement {
  static styles = [appStyles];

  static properties = {
    location: {},
    race: {},
  };

  constructor() {
    super();
    this.location = '';
    this.race = {};
  }

  render() {
    return html`<section class="mb-4">${Utils.isObjectEmpty(this.race) ? null : this.buildRaceHeader()}</section>`;
  }

  buildRaceHeader() {
    return html`
      <section class="box has-text-link">
        ${this.buildRaceTitle()} ${this.buildRaceSubtitle()}
        <div class="tile is-ancestor">${this.buildRaceLocation()} ${this.buildRaceDate()} ${this.buildRaceTime()}</div>

        <div class="tile is-ancestor">
          ${this.buildSwimDistance()} ${this.buildFirstRunDistance()} ${this.buildCyclingDistance()}
          ${this.buildRunDistance()} ${this.buildSecondRunDistance()}
        </div>
      </section>
    `;
  }

  buildRaceTitle() {
    if (this.race.title) {
      return html` <h4 class="title is-4 has-text-centered has-text-link">${this.race.title}</h4> `;
    }
  }

  buildRaceSubtitle() {
    if (this.race.subtitle) {
      return html`<h5 class="subtitle is-6  has-text-centered has-text-link">Elite Femenino</h5>`;
    }
  }

  buildRaceLocation() {
    if (this.location) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">Local</dt>
            <dd class="title is-6">${this.location}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildRaceDate() {
    if (this.race.actualDate) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.location)}</dt>
            <dd class="title is-6">${this.race.actualDate}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildRaceTime() {
    if (this.race.actualTime) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.time)}</dt>
            <dd class="title is-6">${this.race.actualTime}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildSwimDistance() {
    if (this.race.swimDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.swim)}</dt>
            <dd class="title is-6">${this.race.swimDistance} m</dd>
          </dl>
        </div>
      `;
    }
  }

  buildFirstRunDistance() {
    if (this.race.firstRunDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.firstRun)}</dt>
            <dd class="title is-6">${this.race.firstRunDistance} m</dd>
          </dl>
        </div>
      `;
    }
  }

  buildCyclingDistance() {
    if (this.race.cyclingDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.cycling)}</dt>
            <dd class="title is-6">${this.race.cyclingDistance} m</dd>
          </dl>
        </div>
      `;
    }
  }

  buildRunDistance() {
    if (this.race.runDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.run)}</dt>
            <dd class="title is-6">${this.race.runDistance} m</dd>
          </dl>
        </div>
      `;
    }
  }

  buildSecondRunDistance() {
    if (this.race.secondRunDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.secondRun)}</dt>
            <dd class="title is-6">${this.race.secondRunDistance} m</dd>
          </dl>
        </div>
      `;
    }
  }
}

customElements.define('results-header', ResultsHeader);
