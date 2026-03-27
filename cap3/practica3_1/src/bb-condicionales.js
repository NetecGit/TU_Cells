

import { html, LitElement } from 'lit';

class BBCondicionales extends LitElement {
    static properties = {
        userName: { type: String },
        userStatus: { type: String } // Ejemplo de otra propiedad para manejar estados
    };

    constructor() {
        super();
        this.userName = ''; // Esto puede ser vacío inicialmente
        this.userStatus = 'guest'; // guest, loggedIn, newUser, etc.
    }

    // Condicional con un operador Ternario
    usoOperarTernario() {
        return this.userName
            ? html`Bienvenido ${this.userName}`
            : html`Pulsa aquí para ingresar <button>Login</button>`;
    }

    // Condicional típico con un bloque if-else
    usoIfElse() {
        let message;
        if (this.userName) {
            message = html`Bienvenido ${this.userName}`;
        } else {
            message = html`Pulsa aquí para ingresar <button>Login</button>`;
        }
        return html`<p class="message">${message}</p>`;
    }

    // Función que maneja la lógica condicional
    // Usando switch para manejar la lógica condicional
    getUserMessage() {
        switch (this.userStatus) {
            case 'loggedIn':
                return html`<p>Bienvenido, ${this.userName}!</p>`;
            case 'newUser':
                return html`<p>¡Hola! Crea una nueva cuenta para ingresar</p>`;
            case 'guest':
            default:
                return html`<p>Pulsa aquí para ingresar <button>Login</button></p>`;
        }
    }

    render() {
        return html`
        <div>
            <p style="font-weight: bold;">Operadores Ternarios</p>
            ${this.usoOperarTernario()}  <!-- Llamamos a la función aquí -->
        </div>
        <div>
            <p style="font-weight: bold;">Bloque if-else<p>
            ${this.usoIfElse()}  <!-- Llamamos a la función aquí -->
        </div>
        <div>
            <p style="font-weight: bold;"> Switch con variable de estado </p>
            ${this.getUserMessage()}  <!-- Llamamos a la función aquí -->
        </div>
    `;
    }
}



customElements.define('bb-condicionales', BBCondicionales);
