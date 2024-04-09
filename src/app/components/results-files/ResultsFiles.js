/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { LitElement, html, css } from 'lit';

import { mdiFileMultiple } from '@mdi/js';

import { appStyles } from '../../css/app-style';

import { mdiEnduranceTrioFilePdf } from '../../icons/mdi-endurancetrio';
import { getFileUrlOnFilesApi as getFileUrl } from '../../properties/files-api-endpoints';

import '../md-icon/MdIcon';

class ResultsFiles extends LitElement {
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
    resultsFiles: {},
  };

  constructor() {
    super();
    this.resultsFiles = {};
  }

  render() {
    return html`<section class="container">
      <p class="has-text-right">
        <a @click="${this.toggleFilesListVisibility}" class="button is-ghost has-text-black"
          ><md-icon path=${mdiFileMultiple} icon-size="2x"></md-icon
        ></a>
      </p>
      <div id="files-list" class="documents-list has-background-info-light">
        ${this.resultsFiles.map((file) => {
          return html`<div class="documents-list__item">
            <a href="${getFileUrl('results-files', file.fileName)}" target="_blank"
              ><md-icon path=${mdiEnduranceTrioFilePdf} icon-size="2x"></md-icon
              ><span class="documents-list__title">${file.title} - ${file.subtitle}</span></a
            >
          </div>`;
        })}
      </div>
    </section> `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.resultsFiles = this.resultsFiles
      .filter((file) => {
        return file.active;
      })
      .sort((a, b) => {
        return a.displayOrder > b.displayOrder;
      });

    document.addEventListener('results-body-update-race', () => {
      this.removeFilesListVisibility();
    });
  }

  disconnectedCallback() {
    document.removeEventListener('results-body-update-race', () => {
      this.removeFilesListVisibility();
    });
    super.disconnectedCallback();
  }

  toggleFilesListVisibility() {
    this.shadowRoot.getElementById('files-list').classList.toggle('documents-list--visible');
  }

  removeFilesListVisibility() {
    this.shadowRoot.getElementById('files-list').classList.remove('documents-list--visible');
  }
}

customElements.define('results-files', ResultsFiles);
