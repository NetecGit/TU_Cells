import { html, LitElement } from 'lit';

class BBNodo extends LitElement {
  static properties = {
    content: { type: String }
  };

  constructor() {
    super();
    this.content = 'Texto inicial Lit';
  }

  render() {
    const contentNode = html`<span>${this.content}</span>`;
    return html`
      <div>
        ${contentNode}
      </div>
    `;
  }
}

customElements.define('bb-nodo', BBNodo);

/*
  Lit también permite iterar sobre listas o arrays con map() y renderizar elementos dinámicamente.
  Además de simples valores, Lit también puede manejar nodos completos del DOM, 
  lo que permite que los componentes más complejos puedan ser fácilmente insertados.
  Este ejemplo inserta un nodo <span> que contiene el valor de la propiedad content.
*/