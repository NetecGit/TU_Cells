import { LitElement, html, css } from 'lit';

console.log("class: Creación de la subclase de LitElement");

export class BBCiclo extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 10px;
      border: 1px solid #ccc;
      background-color: #f9f9f9;
    }
  `;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    console.log('Constructor: El componente está siendo creado.');
    this.name = 'Mundo';
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connectedCallback: El componente se ha agregado al DOM.');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('disconnectedCallback: El componente se ha eliminado del DOM.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    console.log(`attributeChangedCallback: El atributo "${name}" cambió de "${oldValue}" a "${newValue}".`);
  }


  willUpdate(changedProperties) {
    if (changedProperties.has('name')) {
      console.log(`willUpdate: Cambio  ${changedProperties.get('name')} to ${this.name}`);
    }
  }
  

 firstUpdated(changedProperties) {
    console.log('firstUpdated: El componente se ha renderizado por primera vez. Propiedades cambiadas:', changedProperties);

    // Ejemplo: Agregar enfoque a un elemento después del primer renderizado
    const paragraph = this.shadowRoot.querySelector('p');
    if (paragraph) {
      paragraph.style.color = 'blue';
      console.log('firstUpdated: Se aplicó estilo al párrafo.');
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    console.log('updated: El componente se actualizó. Propiedades cambiadas:', changedProperties);
  }

  
  update(changedProperties) {
    super.update(changedProperties);
    console.log('update: El componente se actualizó. Propiedades cambiadas:', changedProperties);
  }

  render() {
    console.log('render: Renderizando el componente.');
    return html`
      <p>¡Hola, ${this.name}!</p>
    `;
  }
}

console.log('customElements.define: definiendo la nueva etiqueta HTML');
customElements.define('bb-ciclo', BBCiclo);


// Simula un cambio de atributo después de 3 segundos
setTimeout(() => {
  const element = document.querySelector('bb-ciclo');
  if (element) {
    console.log('Modificando atributo "name" del componente...');
    element.setAttribute('name', 'Estudiante');
  }
}, 3000);

// Elimina el componente después de 5 segundos
setTimeout(() => {
  const element = document.querySelector('bb-ciclo');
  if (element) {
    console.log('Eliminando el componente del DOM...');
    element.remove();
  }
}, 6000);