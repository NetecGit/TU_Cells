import { html, css, LitElement } from 'lit';

import { repeat } from 'lit/directives/repeat.js'; // Importar la directiva repeat

class BBRepeat extends LitElement {

  static properties = {
    items: { type: Array }
  };

  static styles = css`
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
    }
    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: #fff;
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
    this.items = [
      { id: 1, name: 'Manzanas' },
      { id: 2, name: 'Plátanos' },
      { id: 3, name: 'Naranjas' },
      { id: 4, name: 'Uvas'},
      { id: 5, name: 'fresas'}
    ]; // Array de objetos con identificador único
    this.nextId = 6; // Variable para generar nuevos identificadores
  }

  addItem() {
    this.items = [
      ...this.items,
      { id: this.nextId++, name: `Fruta ${this.nextId - 1}` }
    ];
  }

  render() {
    return html`
      <ul>
        ${repeat(
          this.items,
          (item) => item.id,
          (item) => html`<li>${item.name}</li>`
        )}
      </ul>
      <button @click="${this.addItem}">Agregar Fruta</button>
    `;
  }
}

customElements.define('bb-repeat', BBRepeat);
