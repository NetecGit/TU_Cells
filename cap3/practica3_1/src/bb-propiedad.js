import { html, LitElement } from 'lit';

class BBPropiedad extends LitElement {
  static properties = {
    value: { type: Number }
  };

  constructor() {
    super();
    this.value = 5;
  }

  render() {
    return html`
      <p>Ingresa un valor diferente ${this.value}</p>
      <input .value="${this.value}" @input="${this.handleInput}">
    `;
  }

  handleInput(event) {
    this.value = event.target.value;
  }
}

customElements.define('bb-propiedad', BBPropiedad);


/*
  También puedes vincular expresiones directamente a las propiedades de los elementos HTML.
  En este ejemplo, el valor del input se vincula a la propiedad value del componente, 
  lo que permite que el cambio en el campo de texto se refleje en la propiedad.
*/