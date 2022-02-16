import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { appStyles } from '../../css/app-style';

class ResultsTab extends LitElement {
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
    _activeTab: { attribute: false, state: true },
  };

  constructor() {
    super();
    this.labels = {};
    this.results = [];
    this._activeTab = 'overall';
  }

  render() {
    const ageGroupLabels = Array.from(this.results.keys());
    const resultsEntries = Array.from(this.results.entries());

    console.log(Array.from(this.results.entries()));
    return html`
      <div class="tabs is-boxed">
        <ul>
          ${ageGroupLabels.map((ageGroupTitle) => {
            const classes = ageGroupTitle.toLowerCase() === this._activeTab ? 'is-active' : null;
            return html`
              <li class=${ifDefined(classes)}>
                <a id=${ageGroupTitle.toLowerCase()} @click=${this.toggleActiveTab}>${ageGroupTitle}</a>
              </li>
            `;
          })}
        </ul>
      </div>

      <div id="tabs-content">
        ${resultsEntries.map((entry) => {
          const displayStyle = { display: entry[0].toLowerCase() === this._activeTab ? 'block' : 'none' };
          return html`
            <div class="tab-content" style=${styleMap(displayStyle)}>
              <results-table .labels=${this.labels} .results=${entry[1]}></results-table>
            </div>
          `;
        })}
      </div>
    `;
  }

  toggleActiveTab(event) {
    this._activeTab = event.target.id;
    this.requestUpdate();
  }
}

customElements.define('results-tab', ResultsTab);
