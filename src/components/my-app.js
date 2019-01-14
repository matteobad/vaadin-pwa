import { LitElement, html } from "lit-element";

class MyApp extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    // Anything that's related to rendering should be done in here.
    return html`
      <p>Hello World!</p>
    `;
  }
}

window.customElements.define("my-app", MyApp);
