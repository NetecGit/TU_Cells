import { LitElement, html, css } from 'lit';

class BbEstadoReactivo extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }
    .message {
      font-size: 20px;
      color: #007acc;
      margin: 20px 0;
    }
    .button {
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color: #333;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 20px;
      transition: background-color 0.3s ease;
    }
    .button:hover {
      background-color: #555;
    }
  `;

  // Propiedades observables
  static properties = {
    count: { type: Number }, // Valor reactivo
  };

  constructor() {
    super();
    this.count = 0; // Estado inicial
  }

  // Método para simular una actualización externa
  updateState(newValue) {
    this.count = newValue; // Actualizar propiedad observable
  }

  render() {
    return html`
      <h2>Gestión de Estado Reactivo</h2>
      <p class="message">Estado actual: ${this.count}</p>
      <button class="button" @click="${() => this.updateState(this.count + 1)}">
        Incrementar Estado
      </button>
    `;
  }
}

customElements.define('bb-estado-reactivo', BbEstadoReactivo);