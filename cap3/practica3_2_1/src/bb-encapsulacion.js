import { LitElement, html, css } from 'lit';

   class BbEncapsulacion extends LitElement {
     // Definición de estilos encapsulados
     static styles = css`
       :host {
         display: block;
         font-family: Arial, sans-serif;
         text-align: center;
         padding: 10px;
         border: 2px solid #007acc;
         border-radius: 8px;
         background-color: #e3f2fd;
       }
       h2 {
         color: #004085;
         margin: 0;
       }
       p {
         font-size: 14px;
         color: #333;
       }
     `;

     // Renderizado del componente
     render() {
       return html`
         <h2>Encapsulación de Estilos</h2>
         <p>Este componente tiene estilos protegidos por el Shadow DOM.</p>
       `;
     }
   }

   customElements.define('bb-encapsulacion', BbEncapsulacion);