import { LitElement, html, css } from 'lit';

class BbEstilos extends LitElement {
  // Definición de estilos
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      text-align: center;
      color: #333;
    }
    .container {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
    h1 {
      color: #007acc;
    }
    p {
      font-size: 14px;
    }
  `;

  // Renderizado del componente
  render() {
    return html`
      <div class="container">
        <h1>Estilos en Lit</h1>
        <p>Este es un ejemplo de un componente estilizado con Lit.</p>
      </div>
    `;
  }
}

customElements.define('bb-estilos', BbEstilos);