import { LitElement, html, css } from 'lit';

class MyComponent extends LitElement {
    static styles = css`
      :host {
        display: block;
        padding: 16px;
        background-color: lightblue;
        font-family: Arial, sans-serif;
      }
    `;
  
    render() {
      return html`<p>¡Hola, este es mi primer componente Lit Reactivo!</p>`;
    }
  }

customElements.define('my-component', MyComponent);