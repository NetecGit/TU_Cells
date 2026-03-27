import { html, LitElement } from 'lit';

class BBCondicional extends LitElement {
  static properties = {
    isVisible: { type: Boolean }
  };

  constructor() {
    super();
    this.isVisible = true;
  }

  render() {
    return html`
      ${this.isVisible ? html`<p>Este contenido es visible</p>` : ''}
    `;
  }
}

customElements.define('bb-condicional', BBCondicional);


/*
  Las expresiones también permiten renderizar elementos condicionalmente usando if.
  En el ejemplo, si isVisible es true, se renderiza el contenido dentro del <p>, 
  de lo contrario no se muestra nada.
*/