import { LitElement, html, css } from 'lit';

class BbEventos extends LitElement {
  static styles = css`
 :host {
   display: block;
   font-family: Arial, sans-serif;
   text-align: center;
   margin: 20px;
 }
 .button {
   padding: 10px 20px;
   font-size: 16px;
   color: white;
   background-color: #007acc;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   transition: background-color 0.3s ease;
 }
 .button:hover {
   background-color: #005fa3;
 }
 .message {
   margin-top: 20px;
   font-size: 18px;
   color: #333;
 }
`;

  static properties = {
    message: { type: String },
  };

  constructor() {
    super();
    this.message = 'Presiona el botón para interactuar';
  }

  handleClick() {
    this.message = '¡El evento se ejecutó correctamente!';
  }

  render() {
    return html`
   <h2>Manejo de Eventos en Lit</h2>
   <button class="button" @click="${this.handleClick}">Haz clic aquí</button>
   <div class="message">${this.message}</div>
 `;
  }
}

customElements.define('bb-eventos', BbEventos);
