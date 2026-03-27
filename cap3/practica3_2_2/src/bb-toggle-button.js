import { LitElement, html, css } from 'lit';

class BBToggleButton extends LitElement {

  static get properties() {  // Sintaxis heredada en LitElement
    return {
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.disabled = false;
  }

  static styles = css`
    button {
      font-size: 1rem;
      padding: 0.5em 1em;
      margin: 0.5em;
      border-radius: 0.25em;
      border: 1px solid #ccc;
      cursor: pointer;
    }

    button[disabled] {
      background-color: #eee;
      color: #aaa;
      cursor: not-allowed;
    }

    button:not([disabled]):hover {
      background-color: #f0f0f0;
    }
  `;

  render() {
    // Uso ?attribute & @event
    return html`
      <button ?disabled="${this.disabled}">Botón ${!this.disabled ? "Habilitado" : "Deshabilitado"}</button>
      <button @click="${this.toggleButton}">
        ${this.disabled ? 'Habilitar' : 'Deshabilitar'} Botón
      </button>
    `;
  }


  toggleButton() {
    this.disabled = !this.disabled;
  }
}

customElements.define('bb-toggle-button', BBToggleButton);
