
import { LitElement, html, css } from 'lit';

class BBCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      margin: 16px;
    }
    .header {
      background-color: #f0f0f0;
      padding: 16px;
      font-weight: bold;
      font-size: 1.2em;
      border-bottom: 1px solid #ddd;
    }
    .content {
      padding: 16px;
    }
    .footer {
      background-color: #f9f9f9;
      padding: 12px 16px;
      font-size: 0.9em;
      color: #555;
      border-top: 1px solid #ddd;
      text-align: center;
    }
  `;

  render2() {
    return html`
      <div class="header">
        <slot name="header">Default Header</slot>
      </div>
      <div class="content">
        <slot>Default Content</slot>
      </div>
    `;
  }

  render() {
    return html`
      <div class="header">
        <slot name="header">Default Header</slot>
      </div>
      <div class="content">
        <slot>Default Content</slot>
      </div>
      <div class="footer">
        <slot name="footer">Default Footer</slot>
      </div>
    `;
  }
}

customElements.define('bb-card', BBCard);