import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
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
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-contact-detail-selection-modal-pgc-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <p>Welcome to ${this.name}</p>
    `;
  }
}
