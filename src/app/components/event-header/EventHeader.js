/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';

import { appStyles } from '../../css/app-style';
import { Utils } from '../../utils/Utils';
import { uiMessagesKeys, getUiMessage } from '../../i18n/ui-messages';

class EventHeader extends LitElement {
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
    event: {},
  };

  constructor() {
    super();
    this.event = {};
  }

  render() {
    return html`
      <section class="box has-background-link-light mb-4">
        ${Utils.isObjectEmpty(this.event) ? this.buildProgressBar() : this.buildEventHeader()}
      </section>
    `;
  }

  buildEventHeader() {
    const composedEventDate = this.getComposedEventDate();
    const composedEventLocation = Utils.getComposedLocation(this.event.city, this.event.county, this.event.district);

    if (this.event.error) {
      return html`${this.buildErrorMessage()}`;
    } else {
      return html`
        <h3 class="title is-3">${this.event.title}</h3>
        <p class="subtitle is-5">
          <span>${composedEventDate}</span>
          ${composedEventDate && composedEventLocation ? ' | ' : ''}
          <span>${composedEventLocation}</span>
        </p>

        <form>
          <fieldset class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">${getUiMessage(uiMessagesKeys.results)}</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <div class="select is-normal is-fullwidth">
                    <select @change="${this.handleChangeSelection}">
                      <option disabled selected>-- ${getUiMessage(uiMessagesKeys.resultsPlaceholder)} --</option>
                      ${this.buildAvailableRaceOptions()}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      `;
    }
  }

  getComposedEventDate() {
    const startDate = new Date(this.event.startDate);
    const endDate = new Date(this.event.endDate);
    let eventDate = '';

    if (startDate.getTime() == endDate.getTime()) {
      eventDate = startDate.toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' });
    } else if (startDate.getMonth() == endDate.getMonth()) {
      eventDate = startDate
        .toLocaleDateString('pt-PT', { day: 'numeric' })
        .concat(' - ', endDate.toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' }));
    } else {
      eventDate = startDate
        .toLocaleDateString('pt-PT', { day: 'numeric', month: 'long' })
        .concat(' - ', endDate.toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' }));
    }

    return eventDate;
  }

  buildAvailableRaceOptions() {
    if (this.event.races && this.event.races.length > 0) {
      return html`
        ${this.event.races.map((race) => {
          const optionText = race.subtitle ? race.title.concat(' - ', race.subtitle) : race.title;
          return html`<option value="${race.resultsReference}">${optionText}</option>`;
        })}
      `;
    }
  }

  buildErrorMessage() {
    return html`
      <div class="notification is-warning">
        <h3 class="title is-3">${getUiMessage(uiMessagesKeys.error)}</h3>
        <p>${this.event.error}</p>
      </div>
    `;
  }

  buildProgressBar() {
    return html`<progress class="progress is-info"></progress>`;
  }

  handleChangeSelection(e) {
    let selectedRace = {};
    if (this.event.races && this.event.races.length > 0) {
      this.event.races.map((race) => {
        if (race.resultsReference == e.target.value) {
          selectedRace = race;
        }
      });
    }

    this.dispatchEvent(
      new CustomEvent('change-race', { bubbles: true, composed: true, detail: { race: selectedRace } })
    );
  }
}

customElements.define('event-header', EventHeader);
