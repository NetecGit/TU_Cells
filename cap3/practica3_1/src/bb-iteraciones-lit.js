import { LitElement, html, css } from 'lit';

class BBIteracionesLit extends LitElement {
  
    static styles = css`
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 5px 10px;
      border: 1px solid #ccc;
      margin-bottom: 5px;
      border-radius: 4px;
    }
  `;

  static properties = {
    items: { type: Array },
    showEvenNumbers: { type: Boolean },
  };

  constructor() {
    super();
    this.items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5'];
    this.showEvenNumbers = true;
  }

  render() {
    return html`
      <h2>Iteraciones en Lit</h2>
      
      <!-- Iteración básica con map -->
      <h3>1. Iteración básica con map()</h3>
      <ul>
        ${this.items.map(item => html`<li>${item}</li>`)}
      </ul>

      <!-- Iteración usando un contador -->
      <h3>2. Iteración usando un contador</h3>
      <ul>
        ${Array.from({ length: 5 }, (_, index) => html`<li>Ítem ${index + 1}</li>`)}
      </ul>

      <!-- Iteración con condicional -->
      <h3>3. Renderizado condicional</h3>
      <ul>
        ${Array.from({ length: 10 }, (_, index) => index + 1)
          .filter(number => (this.showEvenNumbers ? number % 2 === 0 : number % 2 !== 0))
          .map(number => html`<li>Número ${number}</li>`)}
      </ul>
      <button @click=${this.toggleNumbers}>Alternar entre pares e impares</button>
    `;
  }

  toggleNumbers() {
    this.showEvenNumbers = !this.showEvenNumbers;
  }
}

customElements.define('bb-iteraciones-lit', BBIteracionesLit);