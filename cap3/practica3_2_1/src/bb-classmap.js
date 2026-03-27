import { LitElement, html, css } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';

class BBClassMap extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    .active {
      color: white;
      background-color: green;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .disabled {
      color: white;
      background-color: gray;
      padding: 10px;
      border-radius: 5px;
      opacity: 0.7;
      transition: opacity 0.3s ease, background-color 0.3s ease;
    }

    .active.disabled {
      background-color: darkred;
    }

    div {
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding: 10px;
      border: 2px solid transparent;
      transition: border-color 0.3s ease, transform 0.3s ease;
    }

    div:hover {
      border-color: black;
      transform: scale(1.05);
    }

    button {
      margin: 5px;
      padding: 10px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background-color: lightgray;
      transform: scale(1.1);
    }

    button:active {
      transform: scale(0.95);
    }
  `;

  static properties = {
    isActive: { type: Boolean },
    isDisabled: { type: Boolean },
  };

  constructor() {
    super();
    this.isActive = false;
    this.isDisabled = false;
  }

  render() {
    const classes = {
      active: this.isActive,
      disabled: this.isDisabled,
    };

    return html`
      <div class="${classMap(classes)}">Hello, Lit!</div>
      <button @click="${() => (this.isActive = !this.isActive)}">
        Toggle Active
      </button>
      <button @click="${() => (this.isDisabled = !this.isDisabled)}">
        Toggle Disabled
      </button>
    `;
  }
}

customElements.define('bb-classmap', BBClassMap);
