import { LitElement, html, css } from 'lit';

export class BBComponent extends LitElement {
    static properties = {
        data: { type: Array }, // Propiedad reactiva para almacenar los datos
    };

        static styles = css`
        :host {
        display: block;
        font-family: 'Arial', sans-serif;
        background: #f9f9f9;
        padding: 2rem;
        }
    
        .card {
        border: 1px solid #ddd;
        background-color: #fff;
        padding: 1.5rem;
        margin: 1rem 0;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        }
    
        .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }
    
        h3 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 0.5rem;
        }
    
        p {
        font-size: 1rem;
        color: #666;
        line-height: 1.5;
        }
    
        h2 {
        text-align: center;
        color: #007BFF;
        margin-bottom: 2rem;
        }
    
        .container {
        max-width: 800px;
        margin: 0 auto;
        }
    `;
  
  

    constructor() {
        super();
        this.data = [];
    }

    connectedCallback() {
        console.log("connectedCallback");
        super.connectedCallback();
        this.fetchData();
    }

    async fetchData() {
        console.log("fetchData()");
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
            this.data = result.slice(0, 10); // Limitar a los primeros 10 resultados
            console.log(this.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        console.log("render()");
        return html`
            <div>
                <h3>Fetched Posts</h3>
                ${this.data.length === 0 ? html`<p>Loading...</p>`
                : html`
                        ${this.data.map((item) => html`
                                <div class="card">
                                    <h3>${item.title}</h3>
                                    <p>${item.body}</p>
                                </div>
                            `
                )}
                    `}
            </div>
        `;
    }
}

console.log("customElements.define()");
customElements.define('bb-component', BBComponent);
