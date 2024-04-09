/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';

import { appStyles } from '../../css/app-style';

import { getErrorMessage, errorMessagesKeys } from '../../i18n/error-messages';
import { getUiMessage, uiMessagesKeys } from '../../i18n/ui-messages';

import { Utils } from '../../utils/Utils';

import '../results-tab/ResultsTab';
import '../results-table/ResultsTable';

class RaceResults extends LitElement {
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
    race: {},
  };

  constructor() {
    super();
    this.race = {};
  }

  render() {
    const hasRace = !Utils.isObjectEmpty(this.race);

    if (hasRace && this.race.results instanceof Map) {
      if (this.race.results.has('error')) {
        return this.renderErrorMessage();
      } else {
        switch (this.race.results.size) {
          case 0:
            return html`${this.renderNoResultsMessage()}`;
          case 1:
            if (this.race.results.get('overall').length > 0) {
              return html`
                <results-table
                  .labels=${getResultsTableColumnLabels(this.race.results.get('overall'))}
                  .results=${this.race.results.get('overall')}
                ></results-table>
              `;
            }
            return html`${this.renderNoResultsMessage()}`;
          default:
            return html`
              <results-tab
                .labels=${getResultsTableColumnLabels(this.race.results.get('overall'))}
                .results=${this.race.results}
              ></results-tab>
            `;
        }
      }
    }
  }

  /**
   * Renders the Progress Bar template.
   *
   * @returns the Progress Bar template
   */
  renderProgressBar() {
    return html`<progress class="progress is-info"></progress>`;
  }

  /**
   * Renders the Error Message template.
   *
   * @returns the Error Message template
   */
  renderErrorMessage() {
    return html`
      <div class="notification is-warning mt-6">
        <p>${this.race.results.get('error')}</p>
      </div>
    `;
  }

  /**
   * Renders the Results Not found Message template.
   *
   * @returns the Results Not Found Message Template
   */
  renderNoResultsMessage() {
    return html`
      <div class="notification is-warning mt-6">
        <p>${getErrorMessage(errorMessagesKeys['resultsNotFound'])}</p>
      </div>
    `;
  }
}

/**
 * Gets the labels for the columns of the results table.
 *
 * @param {Array} results
 * @returns the labels for the columns of the results table
 */
function getResultsTableColumnLabels(results) {
  const labels = [];
  const resultKeys = Object.keys(results[0]);

  resultKeys.forEach((key) => {
    labels.push({ key: key, label: getUiMessage(uiMessagesKeys[key]) });
  });

  return labels;
}

customElements.define('race-results', RaceResults);
