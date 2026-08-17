export class MyCounter extends HTMLElement {
  #count = 0;
  #shadow;

  constructor() {
    super();
    // TODO 1: super() 호출 후 Shadow DOM을 open 모드로 생성하세요.
    // ✏️ 작성하기: this.#shadow = this.attachShadow({ mode: 'open' });

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
    if (!this.#shadow) return;

    this.#shadow.innerHTML = `
      <style>
        .counter-box { border: 1px solid #8b5cf6; padding: 1.2rem; border-radius: 8px; background: #faf5ff; }
        button { background: #8b5cf6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
      </style>
      <div class="counter-box">
        <h3>🌐 Web Components (Custom Element)</h3>
        <p>Count: <strong>${this.#count}</strong></p>
        <button id="inc">+1 증가</button>
      </div>
    `;

    this.#shadow.querySelector('#inc')?.addEventListener('click', () => {
      this.setAttribute('count', this.#count + 1);
    });
  }
}

// TODO 2: customElements.define('my-counter', MyCounter) 태그를 등록하세요.
// ✏️ 작성하기
