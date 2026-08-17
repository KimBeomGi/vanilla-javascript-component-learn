# Step 08: Web Components 표준 기술 (Custom Elements & Shadow DOM)

> **"브라우저 네이티브 웹 컴포넌트 사양과 클래스 메서드 & 화살표 함수 `this` 바인딩 완전 정복"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 브라우저가 기본 내장한 표준 기술인 **Custom Elements**와 **Shadow DOM**을 배웁니다.
2. `connectedCallback`, `attributeChangedCallback` 표준 라이프사이클을 이해합니다.
3. 웹 컴포넌트 내부에서 화살표 함수 필드로 이벤트 핸들러의 `this` 스코프를 안전하게 유지합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. **`exercise/src/components/MyCounter.js`**: `constructor()` 내부에서 `this.attachShadow({ mode: 'open' })` 및 맨 아래 `customElements.define('my-counter', MyCounter)` 작성하기
2. **`exercise/index.html`**: 브라우저에서 커스텀 태그인 `<my-counter count="10"></my-counter>` 가 깔끔하게 출력되는지 확인하기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### Web Components 주요 사양 & `this` 스코프 규칙

#### 📌 주 설명
- `connectedCallback()`: 컴포넌트 태그가 DOM에 붙는 순간 브라우저가 자동 호출하는 라이프사이클 메서드
- `attributeChangedCallback(name, oldVal, newVal)`: 속성이 바뀌면 자동 호출되는 라이프사이클 메서드

#### 💡 보조 설명: Web Components 클래스 표준 예시
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
