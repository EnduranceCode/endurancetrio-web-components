import { LitElement, html } from 'lit';

class RaceResults extends LitElement {
  static properties = {
    eventReference: { attribute: 'event-reference' },
  };

  constructor() {
    super();
    this.eventReference = '';
  }

  render() {
    return html`<p>${this.eventReference}</p>`;
  }
}

customElements.define('race-results', RaceResults);
