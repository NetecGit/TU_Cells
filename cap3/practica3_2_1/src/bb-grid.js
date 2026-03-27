import { LitElement, html, css } from 'lit';

export class BBGrid extends LitElement {
    static styles = css`
    /* Estilos aquí */
    .grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px 200px 200px;
  gap: 10px; /* Espaciado entre celdas */
  background-color: lightgray; /* Color de fondo del contenedor */
  padding: 10px;
}
  .grid-item {
  background-color: white;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 100px; /* Alinea texto verticalmente */
  font-size: 18px;
}

.grid-item:nth-child(1) {
  grid-column: 1 / 3; /* Ocupa columnas 1 y 2 */
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-item:hover {
  background-color: lightblue;
  transform: scale(1.1);
}


  `;

    render() {
        return html`
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
      </div>
    `;
    }
}

customElements.define('bb-grid', BBGrid);
