import { html, LitElement } from 'lit';

class BBComplejo extends LitElement {
  static properties = {
    user: { type: Object }
  };

  constructor() {
    super();
    this.user = { name: 'Greta', age: 25 };
  }

  render() {
    return html`
      <p>Nombre: ${this.user.name}</p>
      <p>Edad: ${this.user.age}</p>
    `;
  }
}

customElements.define('bb-complejo', BBComplejo);


/*
  Puedes usar expresiones más complejas, como objetos o arrays, 
  para manipular múltiples atributos o propiedades de forma eficiente.
  En el ejemplo, el objeto user tiene múltiples propiedades que son renderizadas dinámicamente
*/