export class MyCounter extends HTMLElement {
  #count = 0;
  #shadow;

  constructor() {
    super();
    // TODO 1: Shadow DOM을 open 모드로 생성하세요. (this.attachShadow({ mode: 'open' }))
    // this.#shadow = this.attachShadow({ mode: 'open' });
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
      <div>
        <h3>🌐 Web Components (Custom Element) [실습용]</h3>
        <p>Count: ${this.#count}</p>
        <button id="inc">+1</button>
      </div>
    `;

    this.#shadow.querySelector('#inc')?.addEventListener('click', () => {
      this.setAttribute('count', this.#count + 1);
    });
  }
}

// TODO 2: customElements.define으로 등록해 보세요.
// customElements.define('my-counter', MyCounter);
