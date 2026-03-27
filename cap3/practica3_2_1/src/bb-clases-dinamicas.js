import { LitElement, html, css } from 'lit';

class BbClasesDinamicas extends LitElement {
  // Definición de estilos
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }
    .box {
      width: 200px;
      height: 200px;
      margin: 20px auto;
      background-color: #007acc;
      border-radius: 10px;
      transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    .active {
      background-color: #ff5733;
      transform: scale(1.2) rotate(10deg);
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
    }
    .button {
      padding: 15px 30px;
      font-size: 18px;
      color: white;
      background-color: #333;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 20px;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }
    .button:hover {
      background-color: #555;
      transform: scale(1.05);
    }
  `;

  // Propiedades del componente
  static properties = {
    isActive: { type: Boolean },
  };

  constructor() {
    super();
    this.isActive = false; // Estado inicial
  }

  // Alternar el estado activo
  toggleActive() {
    this.isActive = !this.isActive;
  }

  // Renderizado del componente
  render() {
    return html`
      <h2>Uso de Clases Dinámicas con Cambios Enfáticos</h2>
      <p>Haz clic en el botón para cambiar el estado del cuadro.</p>
      <div class="box ${this.isActive ? 'active' : ''}"></div>
      <button class="button" @click="${this.toggleActive}">
        ${this.isActive ? 'Desactivar' : 'Activar'}
      </button>
    `;
  }
}

customElements.define('bb-clases-dinamicas', BbClasesDinamicas);
