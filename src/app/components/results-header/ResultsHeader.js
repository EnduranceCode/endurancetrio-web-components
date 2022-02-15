/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';
import { appStyles } from '../../css/app-style';
import { Utils } from '../../utils/Utils';
import { getUiMessage, uiMessagesKeys } from '../../i18n/ui-messages';

class ResultsHeader extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }
    `,
    appStyles,
  ];

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

  connectedCallback() {
    super.connectedCallback();

    document.addEventListener('update-race', () => {
      this.update();
    });
  }

  disconnectedCallback() {
    document.removeEventListener('update-race', () => {
      this.update();
    });
  }

  buildRaceHeader() {
    const distanceNumberFormat = new Intl.NumberFormat('pt-PT', {
      locales: 'lookup',
      style: 'unit',
      unit: 'meter',
      useGrouping: 'always',
    });

    return html`
      <section class="box has-text-link">
        ${this.buildRaceTitle()} ${this.buildRaceSubtitle()}
        <div class="tile is-ancestor">${this.buildRaceLocation()} ${this.buildRaceDate()} ${this.buildRaceTime()}</div>

        <div class="tile is-ancestor">
          ${this.buildSwimDistance(distanceNumberFormat)} ${this.buildFirstRunDistance(distanceNumberFormat)}
          ${this.buildCyclingDistance(distanceNumberFormat)} ${this.buildRunDistance(distanceNumberFormat)}
          ${this.buildSecondRunDistance(distanceNumberFormat)}
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
      return html`<h5 class="subtitle is-5  has-text-centered has-text-link">${this.race.subtitle}</h5>`;
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
    if (this.race.scheduleDate || this.race.actualDate) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.location)}</dt>
            <dd class="title is-6">${this.race.actualDate ? this.race.actualDate : this.race.scheduleDate}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildRaceTime() {
    if (this.race.scheduleTime || this.race.actualTime) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.time)}</dt>
            <dd class="title is-6">${this.race.actualTime ? this.race.actualTime : this.race.scheduleTime}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildSwimDistance(distanceNumberFormat) {
    if (this.race.swimDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.swim)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.swimDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildFirstRunDistance(distanceNumberFormat) {
    if (this.race.firstRunDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.firstRun)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.firstRunDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildCyclingDistance(distanceNumberFormat) {
    if (this.race.cyclingDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.cycling)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.cyclingDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildRunDistance(distanceNumberFormat) {
    if (this.race.runDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.run)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.runDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  buildSecondRunDistance(distanceNumberFormat) {
    if (this.race.secondRunDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.secondRun)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.secondRunDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }
}

customElements.define('results-header', ResultsHeader);
