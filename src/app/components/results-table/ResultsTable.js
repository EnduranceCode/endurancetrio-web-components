import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { appStyles } from '../../css/app-style';

class ResultsTable extends LitElement {
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
    labels: {},
    results: {},
  };

  constructor() {
    super();
    this.labels = {};
    this.results = [];
  }

  render() {
    return html`
      <table id=${ifDefined(this.id)} class="table is-fullwidth is-striped is-narrow is-hoverable">
        <thead>
          <th>${ifDefined(this.labels.rank)}</th>
          <th>${ifDefined(this.labels.raceNumber)}</th>
          <th>${ifDefined(this.labels.name)}</th>
          <th>${ifDefined(this.labels.ageGroup)}</th>
          <th>${ifDefined(this.labels.team)}</th>
          <th>${ifDefined(this.labels.swim)}</th>
          <th>${ifDefined(this.labels.firstRun)}</th>
          <th>${ifDefined(this.labels.t1)}</th>
          <th>${ifDefined(this.labels.bike)}</th>
          <th>${ifDefined(this.labels.t2)}</th>
          <th>${ifDefined(this.labels.run)}</th>
          <th>${ifDefined(this.labels.secondRun)}</th>
          <th>${ifDefined(this.labels.time)}</th>
          <th>${ifDefined(this.labels.gap)}</th>
        </thead>
        <tbody>
          ${this.results.map((result) => {
            return html`
              <tr>
                <td>${ifDefined(result.rank)}</td>
                <td>${ifDefined(result.raceNumber)}</td>
                <td>${ifDefined(result.name)}</td>
                <td>${ifDefined(result.ageGroup)}</td>
                <td>${ifDefined(result.team)}</td>
                <td>${ifDefined(result.swim)}</td>
                <td>${ifDefined(result.firstRun)}</td>
                <td>${ifDefined(result.t1)}</td>
                <td>${ifDefined(result.bike)}</td>
                <td>${ifDefined(result.t2)}</td>
                <td>${ifDefined(result.run)}</td>
                <td>${ifDefined(result.secondRun)}</td>
                <td>${ifDefined(result.time)}</td>
                <td>${ifDefined(result.gap)}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }
}

customElements.define('results-table', ResultsTable);
