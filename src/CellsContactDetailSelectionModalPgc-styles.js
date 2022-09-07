/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
  --_close-color: var(--bbva-web-template-modal-close-color, var(--colorsPrimaryMedium, ${unsafeCSS(foundations.colors.primaryMedium)}));
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}
.modal-header .title {
  font-size: 1em;
  font-weight: bold;
  color: var(--colorsPrimaryMedium, #1973b8);
}

.subtitle {
  width: fit-content;
}

.modal-content {
  background-color: #F0F8FF;
  margin: 10px;
  padding: 10px;
  min-height: 220px;
  min-width: 500px;
}

.modal-footer {
  padding: 10px;
  text-align: center;
}

.form-group {
  padding: var(--verticalPadding, 15px) 30px;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.lg-6 {
  width: 50%;
}

.button {
  margin: auto auto;
}

@media screen and (max-width: 400px) {
  .form-group {
    padding: var(--verticalPadding, 15px) 30px;
    margin-left: 0%;
    width: 100%;
    display: grid;
    flex-direction: column;
    justify-content: normal;
  }

  .lg-6 {
    padding-top: 5px;
    width: 100%;
  }

  .modal-content {
    background-color: #F0F8FF;
    margin: 10px;
    padding: 10px;
    min-height: 220px;
    min-width: auto;
  }
}
`;