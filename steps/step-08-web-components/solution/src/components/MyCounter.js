export class MyCounter extends HTMLElement {
  #count = 0;
  #shadow;

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['count'];
  }

  connectedCallback() {
    this.#count = Number(this.getAttribute('count')) || 0;
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'count' && oldValue !== newValue) {
      this.#count = Number(newValue);
      this.render();
    }
  }

  render() {
    this.#shadow.innerHTML = `
      <style>
        :host { display: block; padding: 1rem; border: 2px solid #8b5cf6; border-radius: 8px; background: #faf5ff; }
        h3 { margin-top: 0; color: #6d28d9; }
        button { padding: 0.5rem 1rem; border-radius: 4px; border: 1px solid #7c3aed; background: #8b5cf6; color: white; cursor: pointer; }
      </style>
      <div>
        <h3>🎉 Web Components 완성본 (Solution)</h3>
        <p>현재 Count: <strong>${this.#count}</strong></p>
        <button id="inc">+1 증가</button>
        <button id="dec">-1 감소</button>
      </div>
    `;

    this.#shadow.querySelector('#inc').addEventListener('click', () => {
      this.setAttribute('count', this.#count + 1);
    });
    this.#shadow.querySelector('#dec').addEventListener('click', () => {
      this.setAttribute('count', this.#count - 1);
    });
  }
}

customElements.define('my-counter', MyCounter);
