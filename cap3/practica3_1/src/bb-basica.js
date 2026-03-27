import { html, LitElement } from 'lit';

class BBBasica extends LitElement {

  static properties = {
    name: { type: String }
  };

  constructor() {
    super();
    this.name = 'Mundo';
  }

  render() {
    return html`<p>¡Hola, ${this.name}!</p>`;
  }
}

customElements.define('bb-basica', BBBasica);

/*
En Lit, las expresiones básicas son muy similares a las de JavaScript, se utilizan dentro de las plantillas para mostrar valores dinámicos.
La expresión ${this.name} inserta el valor de la propiedad name dentro del párrafo.
*/