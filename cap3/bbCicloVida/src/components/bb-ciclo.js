
import { LitElement, html, css } from 'lit';

console.log("En la definición de la clase");

class BBCiclo extends LitElement {

  static properties = {
    count: { type: Number }
  };

  constructor() {
    super();
    this.count = 0;
    console.log('constructor');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connectedCallback');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('disconnectedCallback');
  }

  shouldUpdate(changedProperties) {
    console.log('shouldUpdate', changedProperties);
    return true;
  }

  willUpdate(changedProperties) {
    console.log('willUpdate', changedProperties);
  }

  update(changedProperties) {
    console.log('update', changedProperties);
    super.update(changedProperties);
  }

  render() {
    console.log('render');
    return html`
      <div>
        <h2>Contador: ${this.count}</h2>
        <button @click=${this.incrementar}>Incrementar</button>
        <button @click=${this.decrementar}>Decrementar</button>
      </div>
    `;
  }

  firstUpdated() {
    console.log('firstUpdated');
  }

  updated(changedProperties) {
    console.log('updated', changedProperties);
  }

  incrementar() {
    this.count++;
  }

  decrementar() {
    this.count--;
  }

}


console.log("Antes del define");
customElements.define('bb-ciclo', BBCiclo);
console.log("Después del define");