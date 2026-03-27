import { LitElement, html, css } from 'lit';

class BbEventosReactivos extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }
    .counter {
      font-size: 24px;
      margin: 20px 0;
      color: #007acc;
    }
    .button {
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color: #007acc;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin: 0 10px;
      transition: background-color 0.3s ease;
    }
    .button:hover {
      background-color: #005fa3;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0; // Valor inicial del contador
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  render() {
    return html`
      <h2>Manejo de Eventos Reactivos</h2>
      <p class="counter">Contador: ${this.count}</p>
      <button class="button" @click="${this.increment}">Incrementar</button>
      <button class="button" @click="${this.decrement}">Decrementar</button>
    `;
  }
}

customElements.define('bb-eventos-reactivos', BbEventosReactivos);