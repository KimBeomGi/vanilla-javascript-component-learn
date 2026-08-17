export class MyCounter extends HTMLElement {
  #count = 0;
  #shadow;

  constructor() {
    super();
    // Shadow DOM 캡슐화 모드 활성화
    this.#shadow = this.attachShadow({ mode: 'open' });
  }

  // 감시할 속성 목록 지정
  static get observedAttributes() {
    return ['count'];
  }

  // DOM에 연결되었을 때 실행 (마운트)
  connectedCallback() {
    this.#count = Number(this.getAttribute('count')) || 0;
    this.render();
  }

  // 속성 변경 시 자동 호출
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'count' && oldValue !== newValue) {
      this.#count = Number(newValue);
      this.render();
    }
  }

  render() {
    this.#shadow.innerHTML = `
      <style>
        :host { display: block; padding: 1rem; border: 2px solid #8b5cf6; border-radius: 8px; font-family: sans-serif; background: #faf5ff; }
        h3 { margin-top: 0; color: #6d28d9; }
        button { padding: 0.5rem 1rem; margin-right: 0.5rem; border-radius: 4px; border: 1px solid #7c3aed; background: #8b5cf6; color: white; cursor: pointer; }
      </style>
      <div>
        <h3>🌐 Web Components (Custom Element) 카운터</h3>
        <p>현재 상태 Count: <strong>${this.#count}</strong></p>
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

// 브라우저 커스텀 엘리먼트 등록 (태그명에 카멜케이스 사용 금지, 하이픈 필수)
customElements.define('my-counter', MyCounter);
