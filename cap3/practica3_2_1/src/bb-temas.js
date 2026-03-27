import { LitElement, html, css } from 'lit';

class BbTemas extends LitElement {
  // Definición de estilos y temas
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    :host([theme="light"]) {
      background-color: #ffffff;
      color: #000000;
    }
    :host([theme="dark"]) {
      background-color: #1e1e1e;
      color: #e0e0e0;
    }
    .container {
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    :host([theme="light"]) .container {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
    }
    :host([theme="dark"]) .container {
      background-color: #2d2d2d;
      border: 1px solid #444;
    }
    .button {
      padding: 15px 30px;
      font-size: 18px;
      color: white;
      background-color: #007acc;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 20px;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }
    .button:hover {
      background-color: #005fa3;
      transform: scale(1.05);
    }
  `;

  // Propiedades del componente
  static properties = {
    theme: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.theme = 'light'; // Tema predeterminado
  }

  // Alternar el tema visual
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

  // Renderizado del componente
  render() {
    return html`
      <div class="container">
        <h2>Temas y Personalización Visual</h2>
        <p>Haz clic en el botón para cambiar entre los temas claro y oscuro.</p>
        <button class="button" @click="${this.toggleTheme}">
          Cambiar a tema ${this.theme === 'light' ? 'oscuro' : 'claro'}
        </button>
      </div>
    `;
  }
}

customElements.define('bb-temas', BbTemas);
