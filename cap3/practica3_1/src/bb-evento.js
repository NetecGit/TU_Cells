import { html, LitElement } from 'lit';

class BBEvento extends LitElement {
  static properties = {
    count: { type: Number }
  };

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  render() {
    return html`
      <button @click="${this.increment}">Incrementar</button>
      <p>Cuenta: ${this.count}</p>
    `;
  }
}

customElements.define('bb-evento', BBEvento);


/*
   En Lit, puedes asociar eventos directamente a las expresiones dentro de las plantillas. 
   Los eventos como click, input, change, etc., pueden ser manejados de forma declarativa.
   En este caso, el evento @click está asociado al método increment(), que actualiza la propiedad 
   count del componente.
*/