import { html, LitElement } from 'lit';

class BBListas extends LitElement {
  static properties = {
    items: { type: Array }
  };

  constructor() {
    super();
    this.items = ['México', 'Argentina', 'Brasil', 'Colombia'];
  }

  render() {
    return html`
      <ul>
        ${this.items.map(item => html`<li>${item}</li>`)}
      </ul>
    `;
  }


  render() {
    const itemTemplates = [];
    for (const item of this.items) {
      itemTemplates.push(html`<li>${item}</li>`);
    }
    return html`<ul>${itemTemplates}</ul>`;
  }
  
}

customElements.define('bb-listas', BBListas);

/*
  Lit también permite iterar sobre listas o arrays con map() y renderizar elementos dinámicamente.
  Este ejemplo muestra una lista de elementos <li> basados en el contenido del array items.
*/
