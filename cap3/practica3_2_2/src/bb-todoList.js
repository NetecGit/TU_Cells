import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class BBTodoList extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      margin: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
      display: flex;
      justify-content: space-between;
    }
    button {
      background-color: red;
      color: white;
      border: none;
      padding: 0.3rem 0.5rem;
      cursor: pointer;
    }
    button:hover {
      background-color: darkred;
    }
  `;

  // Definición de propiedades reactivas en un getter estático
  static get properties() {
    return {
      tasks: { type: Array },
  
    };
  }

  constructor() {
    super();
    this.tasks = ['Respaldar la base de datos', 'Facturar Diciembre 2024'];
 
  }

  // Método para agregar una nueva tarea
  addTask(task) {
    this.tasks = [...this.tasks, task];
  }

  // Método para eliminar una tarea
  removeTask(index) {
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }

  // Renderizado del componente
  render() {
 
    return html`
      <h2>Todo List</h2>
      <input id="taskInput" type="text" placeholder="Add a task..." />
      <button @click="${this.handleAddTask}">Add</button>
      <ul>
        ${this.tasks.map(
          (task, index) => html`
            <li>
              ${task}
              <button @click="${() => this.removeTask(index)}">Remove</button>
            </li>
          `
        )}
      </ul>
    `;
  }

  handleAddTask() {
    const input = this.shadowRoot.getElementById('taskInput');
    const task = input.value.trim();
    if (task) {
      this.addTask(task);
      input.value = '';
    }
  }
}

customElements.define('bb-todo-list', BBTodoList);
