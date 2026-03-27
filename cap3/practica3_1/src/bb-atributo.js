import { html, LitElement } from 'lit';

class BBAtributo extends LitElement {
  static properties = {
    active: { type: Boolean }
  };

  constructor() {
    super();
    this.active = false;
  }

  render() {
    return html`
      <button ?disabled="${!this.active}">Click me</button>
    `;
  }
}

customElements.define('bb-atributo', BBAtributo);

/*
  Las expresiones también se pueden utilizar en los atributos de los elementos HTML. 
  Lit se encarga de actualizar el atributo dinámicamente cuando el valor cambia.
  En este caso, el atributo disabled se aplica solo cuando active es false, utilizando la sintaxis ?disabled.
*/
