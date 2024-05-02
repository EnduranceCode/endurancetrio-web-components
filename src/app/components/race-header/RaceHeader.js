/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';

import { mdiFileExcel } from '@mdi/js';

import { appStyles } from '../../css/app-style';
import { getUiMessage, uiMessagesKeys } from '../../i18n/ui-messages';

import { Utils } from '../../utils/Utils';

class RaceHeader extends LitElement {
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
    return html`<section class="mb-4">${Utils.isObjectEmpty(this.race) ? null : this.renderRaceHeader()}</section>`;
  }

  connectedCallback() {
    super.connectedCallback();

    document.addEventListener('results-body-update-race', () => {
      this.update();
    });
  }

  disconnectedCallback() {
    document.removeEventListener('results-body-update-race', () => {
      this.update();
    });
    super.disconnectedCallback();
  }

  /**
   * Renders the Race Header template.
   *
   * @returns the Race Header template
   */
  renderRaceHeader() {
    return html`
      <section class="box has-text-link">
        <h4 class="title is-4 has-text-centered has-text-link">${this.race.title}</h4>
        <h5 class="subtitle is-5  has-text-centered has-text-link">${this.race.subtitle}</h5>

        <div class="tile is-ancestor">
          ${this.renderRaceLocation()} ${this.renderRaceDate()} ${this.renderRaceTime()}
        </div>

        ${this.renderProgramData()} ${this.renderCsvIcon()}
      </section>
    `;
  }

  /**
   * Renders the Race Location template.
   * The template is rendered only when the race data includes a location.
   *
   * @returns the Race Location template
   */
  renderRaceLocation() {
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

  /**
   * Renders the Race Date template.
   * The template is rendered only when the race data includes a date.
   *
   * @returns the Race Date template
   */
  renderRaceDate() {
    if (this.race.date) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.date)}</dt>
            <dd class="title is-6">${this.race.date}</dd>
          </dl>
        </div>
      `;
    }
  }

  /**
   * Renders the Race Time template.
   * The template is rendered only when the race data includes a time.
   *
   * @returns the Race Time template.
   */
  renderRaceTime() {
    if (this.race.time || this.race.gunTime) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.time)}</dt>
            <dd class="title is-6">${this.race.gunTime ? this.race.gunTime : this.race.time}</dd>
          </dl>
        </div>
      `;
    }
  }

  /**
   * Renders the Program data template.
   * The Program data is only displayed when the Race only has one program.
   *
   * @returns the Program data template
   */
  renderProgramData() {
    if (this.race.programs.length != 1) {
      return null;
    }

    const distanceNumberFormat = new Intl.NumberFormat('pt-PT', {
      locales: 'lookup',
      style: 'unit',
      unit: 'meter',
      useGrouping: 'always',
    });

    return html`
      <div class="tile is-ancestor">
        ${this.renderSwimDistance(distanceNumberFormat)} ${this.renderFirstRunDistance(distanceNumberFormat)}
        ${this.renderBikeDistance(distanceNumberFormat)} ${this.renderRunDistance(distanceNumberFormat)}
        ${this.renderSecondRunDistance(distanceNumberFormat)}
      </div>
    `;
  }

  /**
   * Renders the race's Swim Distance template.
   * The template is rendered only when the race data includes a swim distance.
   *
   * @param {NumberFormat} distanceNumberFormat the Number Format to be used for the race swim distance
   *
   * @returns the Swim Distance template.
   */
  renderSwimDistance(distanceNumberFormat) {
    if (this.race.programs[0].swimDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.swim)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.programs[0].swimDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  /**
   * Renders the race's First Run Distance template.
   * The template is rendered only when the race data includes a first run distance.
   *
   * @param {NumberFormat} distanceNumberFormat the Number Format to be used for the race first run distance
   *
   * @returns the First Run Distance template
   */
  renderFirstRunDistance(distanceNumberFormat) {
    if (this.race.programs[0].firstRunDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.firstRun)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.programs[0].firstRunDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  /**
   * Renders the race's Cycling Distance template.
   * The template is rendered only when the race data includes a cycling distance.
   *
   * @param {NumberFormat} distanceNumberFormat The Number Format to be used for the race cycling distance
   *
   * @returns the Bike Distance template.
   */
  renderBikeDistance(distanceNumberFormat) {
    if (this.race.programs[0].bikeDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.cycling)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.programs[0].bikeDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  /**
   * Renders the race's Run Distance template.
   * The template is rendered only when the race data includes a run distance.
   *
   * @param {NumberFormat} distanceNumberFormat The Number Format to be used for the race run distance
   *
   * @returns the race's run distance template.
   */
  renderRunDistance(distanceNumberFormat) {
    if (this.race.programs[0].runDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.run)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.programs[0].runDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  /**
   * Renders the race's Second Run Distance template.
   * The template is rendered only when the race data includes a second run distance.
   *
   * @param {NumberFormat} distanceNumberFormat The Number Format to be used for the race second run distance
   *
   * @returns the race's second run distance template.
   */
  renderSecondRunDistance(distanceNumberFormat) {
    if (this.race.programs[0].secondRunDistance) {
      return html`
        <div class="tile is-parent">
          <dl class="tile is-child has-text-centered">
            <dt class="heading">${getUiMessage(uiMessagesKeys.secondRun)}</dt>
            <dd class="title is-6">${distanceNumberFormat.format(this.race.programs[0].secondRunDistance)}</dd>
          </dl>
        </div>
      `;
    }
  }

  /**
   * Renders the CSV icon/button template
   *
   * @returns the CSV icon/button template
   */
  renderCsvIcon() {
    const hasResults =
      !Utils.isObjectEmpty(this.race) &&
      !Utils.isObjectEmpty(this.race.results) &&
      this.race.results instanceof Map &&
      !this.race.results.has('error') &&
      this.race.results.get('overall').length > 1;

    if (hasResults) {
      return html`
        <p class="has-text-right">
          <a id="csv" href="javascript:void(0)" @click="${this.createCsv}" class="button is-ghost has-text-black"
            ><md-icon path=${mdiFileExcel} icon-size="2x"></md-icon
          ></a>
        </p>
      `;
    } else {
      return null;
    }
  }

  /**
   * Creates a CSV file with the Race's results.
   */
  createCsv() {
    const raceResults = this.race.results.get('overall');

    const headers = Object.keys(raceResults[0]).map((key) => {
      return getUiMessage(uiMessagesKeys[key]);
    });

    let csv = headers.join(',') + '\n';
    csv += raceResults.map((row) => Object.values(row).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const csvLink = this.shadowRoot.getElementById('csv');
    csvLink.href = window.URL.createObjectURL(blob);
    csvLink.setAttribute('download', this.race.raceReference + '.csv');
  }
}

customElements.define('race-header', RaceHeader);
