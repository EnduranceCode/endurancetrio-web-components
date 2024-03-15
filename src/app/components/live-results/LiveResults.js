/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';

import { appStyles } from '../../css/app-style';
import { Utils } from '../../utils/Utils';

import { ResultsService } from '../../service/ResultsService';

import '../results-body/ResultsBody';

class LiveResults extends LitElement {
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
    rangeName: { attribute: 'range-name' },
    race: {},
  };

  constructor() {
    super();
    this.rangeName = '';
    this.race = {};
  }

  render() {
    return html` ${Utils.isObjectEmpty(this.race) ? this.renderProgressBar() : this.renderLiveRaceResults()} `;
  }

  /**
   * Renders the live race results
   *
   * @returns The Event Header template
   */
  renderLiveRaceResults() {
    return html` <results-body .race="${this.race}"></results-body> `;
  }

  /**
   * Renders the Progress Bar template
   *
   * @returns The Progress Bar template
   */
  renderProgressBar() {
    return html`<progress class="progress is-large is-warning"></progress>`;
  }

  connectedCallback() {
    super.connectedCallback();
    ResultsService.getLiveRaceResultsByRangeName(this.rangeName).then((result) => {
      this.race = result;
    });
  }
}

customElements.define('live-results', LiveResults);
