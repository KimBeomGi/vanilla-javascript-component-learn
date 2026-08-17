export class MyCounter extends HTMLElement {
  #count = 0;
  #shadow;

  constructor() {
    super();
    // 💡 정답 해설 1: Shadow DOM 생성 (외부 CSS 격리막)
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
    if (!this.#shadow) return;

    this.#shadow.innerHTML = `
      <style>
        .counter-box { border: 1px solid #8b5cf6; padding: 1.2rem; border-radius: 8px; background: #faf5ff; }
        button { background: #8b5cf6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
      </style>
      <div class="counter-box">
        <h3>🌐 Web Components (Custom Element) [완성본 정답]</h3>
        <p>Count: <strong>${this.#count}</strong></p>
        <button id="inc">+1 증가</button>
      </div>
    `;

    this.#shadow.querySelector('#inc')?.addEventListener('click', () => {
      this.setAttribute('count', this.#count + 1);
    });
  }
}

// 💡 정답 해설 2: 브라우저에 <my-counter> 커스텀 태그 등록
customElements.define('my-counter', MyCounter);
