/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';

import { appStyles } from '../../css/app-style';

import { RaceService } from '../../service/RaceService';
import { ResultsService } from '../../service/ResultsService';
import { Utils } from '../../utils/Utils';

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
    _lastFetchedRaceReference: { attribute: false, state: true },
  };

  constructor() {
    super();
    this.location = '';
    this.race = {};
    this._lastFetchedRaceReference = '';
  }

  render() {
    if (Utils.isObjectEmpty(this.race)) {
      return;
    }

    if (this._lastFetchedRaceReference != this.race.raceReference) {
      RaceService.getRaceByReference(this.race.raceReference).then((result) => {
        if (result.error) {
          return;
        }

        this._lastFetchedRaceReference = this.race.raceReference;
        this.race = ResultsService.processRacesResults(result);

        this.dispatchEvent(
          new CustomEvent('results-body-update-race', { bubbles: true, composed: true, detail: { race: this.race } })
        );
      });
    }

    return html`
      <race-header location="${this.location}" .race="${this.race}"></race-header>
      <race-results .race="${this.race}"></race-results>
    `;
  }
}

customElements.define('race-data', RaceData);
