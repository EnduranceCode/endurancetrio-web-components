import { LitElement, html } from 'lit';
import { appStyles } from './css/app-style';

class RaceResults extends LitElement {
  static styles = [appStyles];

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
