/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';

import { appStyles } from '../../css/app-style';
import { mdiEnduranceTrioFilePdf } from '../../icons/mdi-endurancetrio';
import { Utils } from '../../utils/Utils';
import { generateLiveResultsPDF } from '../../utils/pdf-generator';

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

      .is-clickable {
        cursor: pointer;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
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
    return html`${this.renderPdfIcon()}
      <results-body .race="${this.race}"></results-body> `;
  }

  /**
   * Renders the Progress Bar template
   *
   * @returns The Progress Bar template
   */
  renderProgressBar() {
    return html`<progress class="progress is-large is-warning"></progress>`;
  }

  /**
   * Renders the PDF icon/button template
   *
   * @returns the PDF icon/button template
   */
  renderPdfIcon() {
    const hasResults =
      !Utils.isObjectEmpty(this.race) &&
      !Utils.isObjectEmpty(this.race.results) &&
      this.race.results instanceof Map &&
      !this.race.results.has('error');

    if (hasResults) {
      return html`<p class="has-text-right">
        <md-icon
          path=${mdiEnduranceTrioFilePdf}
          icon-size="3x"
          @click="${this.createPDF}"
          class="is-clickable"
        ></md-icon>
      </p>`;
    } else {
      return null;
    }
  }

  /**
   * Generate a PDF file with the race's live results
   */
  createPDF() {
    generateLiveResultsPDF(this.race);
  }

  connectedCallback() {
    super.connectedCallback();
    ResultsService.getLiveRaceResultsByRangeName(this.rangeName).then((result) => {
      this.race = result;
    });
  }
}

customElements.define('live-results', LiveResults);
