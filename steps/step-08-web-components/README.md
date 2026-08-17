# Step 08: Web Components 표준 기술 (Custom Elements & Shadow DOM)

> **"브라우저 네이티브 웹 컴포넌트 사양과 클래스 메서드 & 화살표 함수 `this` 바인딩 완전 정복"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 브라우저가 기본 내장한 표준 기술인 **Custom Elements**와 **Shadow DOM**을 배웁니다.
2. `connectedCallback`, `attributeChangedCallback` 표준 라이프사이클을 이해합니다.
3. 웹 컴포넌트 내부에서 화살표 함수 필드로 이벤트 핸들러의 `this` 스코프를 안전하게 유지합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/src/components/MyCounter.js`** 열기: `constructor()` 내부에서 `this.attachShadow({ mode: 'open' })` 및 맨 아래 `customElements.define('my-counter', MyCounter)` 작성하기
2. 2️⃣ **`exercise/index.html`** 열기: 브라우저에서 커스텀 태그인 `<my-counter count="10"></my-counter>` 가 깔끔하게 출력되는지 확인하기

---

## 💡 Web Components 주요 사양 & `this` 스코프 규칙

### 1️⃣ 표준 라이프사이클 함수 (클래스 메서드 문법)
- `connectedCallback()`: 컴포넌트 태그가 DOM에 붙는 순간 브라우저가 자동 호출
- `attributeChangedCallback(name, oldVal, newVal)`: 속성이 바뀌면 자동 호출

### 2️⃣ 이벤트 핸들러와 `this` (화살표 함수 필드 문법)
- 클래스 내부에서 `handleClick = (e) => { ... }` 처럼 화살표 함수 필드로 작성해야 `this`가 항상 커스텀 태그 본체를 가리킵니다.

### 3️⃣ Shadow DOM 캡슐화
- `this.attachShadow({ mode: 'open' })`을 사용하면 CSS 스타일이 외부와 완전히 격리되어 부모 사이트 CSS와 충돌하지 않습니다!

```javascript
class MyCounter extends HTMLElement {
  #count = 0; #shadow;
  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' }); // Shadow DOM 격리막 생성!
  }
  static get observedAttributes() { return ['count']; }
  connectedCallback() { this.render(); }
  render() {
    this.#shadow.innerHTML = `<style>p { color: purple; }</style><p>${this.#count}</p>`;
  }
}
customElements.define('my-counter', MyCounter); // 브라우저에 태그 등록!
```

---

## 🔑 자가 점검 체크리스트
- [ ] `<my-counter>` 커스텀 태그가 HTML 브라우저에 표시되나요?
- [ ] Shadow DOM 안의 CSS가 외부 전역 스타일과 분리되나요?
