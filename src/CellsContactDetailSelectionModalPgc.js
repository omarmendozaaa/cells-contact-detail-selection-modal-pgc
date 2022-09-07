import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';

import '@bbva-web-components/bbva-web-template-modal/bbva-web-template-modal.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-option.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';
import '@bbva-web-components/bbva-web-form-radio-button/bbva-web-form-radio-button.js'

import styles from './CellsContactDetailSelectionModalPgc-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-contact-detail-selection-modal-pgc></cells-contact-detail-selection-modal-pgc>
```

##styling-doc

@customElement cells-contact-detail-selection-modal-pgc
*/
export class CellsContactDetailSelectionModalPgc extends LitElement {
  static get is() {
    return 'cells-contact-detail-selection-modal-pgc';
  }

  // Declare properties
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      contactLabel: { type: String },
      otherLabel: { type: String },
      buttonLabel: { type: String },
      closeable: { type: Boolean },
      listContacts: { type: Array },
      _contactNumber: { type: String },
      _isDisabled: { type: Boolean },
      _isOtherNumber: { type: Boolean },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
    this.subtitle = '';
    this.contactLabel = '';
    this.otherLabel = '';
    this.buttonLabel = '';
    this.closeable = false;
    this._isDisabled = true;
    this._isOtherNumber = false;
    this.listContacts = [];
    this._contactNumber = '';
  }

  updated(propsChanged) {
    // if (this._documentNumber && this._documentType) {
    //   this._isDisabled = false;
    // } else {
    //   this._isDisabled = true;
    // }
    // console.log(this._documentNumber, '--->', this._documentType, '--->', this._isDisabled)
  }

  _contactChange(event) {
    this._contactNumber = event.target.value;
    console.info(event.target.value);
  }

  _contactNumberChange(event) {
    this._contactNumber = event.target.value;
    console.info(event.target.value);
  }
  async init(data) {
    this.reset();
    this.title = data.title ? data.title : this.title;
    this.subtitle = data.subtitle ? data.subtitle : this.subtitle;
    this.contactLabel = data.contactLabel ? data.contactLabel : this.contactLabel;
    this.otherLabel = data.otherLabel ? data.otherLabel : this.otherLabel;
    this.buttonLabel = data.buttonLabel ? data.buttonLabel : this.buttonLabel;
    this.closeable = data.closeable ? data.closeable : this.closeable;
    this.listContacts = data.listContacts ? data.listContacts : this.listContacts;
    this._contactNumber = '';
  }

  reset() {
    this.title = '';
    this.subtitle = '';
    this.contactLabel = '';
    this.otherLabel = '';
    this.buttonLabel = '';
    this.closeable = false;
    this._isDisabled = true;
    this._isOtherNumber = false;
    this.listContacts = [];
    this._contactNumber = '';
  }

  getformData() {
    return {
      contactNumber: this._contactNumber,
    };
  }

  open() {
    const modal = this.shadowRoot.querySelector('#modalContent');
    modal.open();
  }
  close() {
    const modal = document.querySelector('#modalContent');
    modal.closest();
  }

  _acceptClicked() {
    this.dispatchEvent(
      new CustomEvent('accept-clicked', {
        bubbles: true,
        composed: true,
        detail: this.getformData(),
      })
    );
  }

  _closeClicked() {
    this.dispatchEvent(
      new CustomEvent('close-clicked', {
        bubbles: true,
        composed: true,
        detail: this.getformData(),
      })
    );
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles(
        'cells-contact-detail-selection-modal-pgc-shared-styles'
      ),
    ];
  }

  // Define a template
  render() {
    return html`
      <bbva-web-template-modal id="modalContent" size="m">
        <div class="modal-header">
          <label class="title">${this.title}</label>
        </div>
        <div class="modal-content">
          <label>${this.subtitle}</label>
          <div class="form-group">
            <label> ${this.contactLabel}:</label>
            <bbva-web-form-select class="lg-6" @change=${this._contactChange}>
              ${this.listContacts.map(
                (contact) => html`
                  <bbva-web-form-option value="${contact.contactNumber}"
                    >${contact.contactNumber}</bbva-web-form-option
                  >
                `
              )}
            </bbva-web-form-select>
          </div>
          <div class="form-group">
            <bbva-web-form-radio-button></bbva-web-form-radio-button>
            <label> ${this.otherLabel}:</label>
            <bbva-web-form-text
              class="lg-6"
              @input=${this._contactNumberChange}
            ></bbva-web-form-text>
          </div>
        </div>
        <div class="modal-footer">
          <bbva-web-button-default
            @click=${this._acceptClicked}
            .disabled=${this._isDisabled}
            >${this.buttonLabel}</bbva-web-button-default
          >
        </div>
      </bbva-web-template-modal>
    `;
  }
}
