import { LitElement, html, css } from 'lit';

export class BBWeatherDisplay extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 1rem;
    }
    .weather-info {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `;

  constructor() {
    super();
    this.city = 'New York';
    this.temperature = 25; // Temperatura inicial
  }

  // Simula la actualización de la temperatura
  updateTemperature() {
    this.temperature = Math.floor(Math.random() * 35); // Genera una nueva temperatura aleatoria
    this.requestUpdate(); // Fuerza la actualización del DOM de manera eficiente
  }

  render() {
    console.log("render()");
    return html`
      <div class="weather-info">
        <p>City: ${this.city} </p>
        <p>Temperature: ${this.temperature}°C </p>
      </div>
      <button @click="${this.updateTemperature}">Update Temperature</button>
      `;
  }
}

customElements.define('bb-weather-display', BBWeatherDisplay);
