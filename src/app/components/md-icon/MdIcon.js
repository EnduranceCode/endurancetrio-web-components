/*!
 * EnduranceTrio Race Results
 * Copyright 2021 Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css, svg } from 'lit';

class MdIcon extends LitElement {
  static styles = css`
    svg {
      display: inline-block;
      fill: currentColor;
      height: 1em;
      margin: auto;
      vertical-align: middle;
      width: 1em;
    }
  `;

  static properties = {
    path: {},
  };

  constructor() {
    super();
    this.path = svg``;
  }
  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d=${this.path} />
      </svg>
    `;
  }
}

customElements.define('md-icon', MdIcon);
