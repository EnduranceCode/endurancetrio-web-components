/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';
import { appStyles } from '../../css/app-style';

import naturalSort from '../../vendor/naturalSort';

class ResultsTable extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      th {
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
    labels: {},
    results: {},
    _sortColumn: { attribute: false, state: true },
    _sortingOrder: { attribute: false, state: true },
  };

  constructor() {
    super();
    this.labels = {};
    this.results = [];
    this._sortColumn = 'rank';
    this._sortingOrder = 1;
  }

  render() {
    return html`
      <div class="table-container">
        <table class="table is-fullwidth is-striped is-narrow is-hoverable">
          <thead>
            ${this.labels.map((label) => {
              return html`<th id=${label} @click=${this.sortTable}>${label}</th>`;
            })}
          </thead>
          <tbody>
            ${this.results.map((result) => {
              return html`
                <tr>
                  ${this.labels.map((label) => {
                    return html`<td>${result[label]}</td>`;
                  })}
                </tr>
              `;
            })}
          </tbody>
        </table>
      </div>
    `;
  }

  /**
   * Sorts the table based on the column thar was clicked by the user. When the user clicks the column
   * for the first time, the sorting is made in ascending order. When the user clicks, sequentially,
   * the column, the sorting is made in descending order. The process is repeated if the user keeps
   * on clicking the same column.
   *
   * @param {Event} event The event that triggers the sorting action
   */
  sortTable(event) {
    this._sortingOrder = this._sortColumn === event.target.id ? -1 * this._sortingOrder : 1;
    this.results.sort((row1, row2) => {
      naturalSort.insensitive = true;
      return this._sortingOrder * naturalSort(row1[event.target.id], row2[event.target.id]);
    });
    this._sortColumn = event.target.id;
  }
}

customElements.define('results-table', ResultsTable);
