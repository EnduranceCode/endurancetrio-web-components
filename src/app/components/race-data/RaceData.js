/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';

import { appStyles } from '../../css/app-style';

import '../race-header/RaceHeader';
import '../race-results/RaceResults';

class RaceData extends LitElement {
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
    return html`
      <race-header location="${this.location}" .race="${this.race}" }></race-header>
      <race-results .race="${this.race}"></race-results>
    `;
  }
}

customElements.define('race-data', RaceData);
