# Step 08: Web Components 표준 기술 (Custom Elements & Shadow DOM)

> **"브라우저 네이티브 웹 컴포넌트 사양과 클래스 메서드 & 화살표 함수 `this` 바인딩 완전 정복"**

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

1. 1️⃣ **`exercise/src/components/MyCounter.js`**: `constructor()` 내부에서 `this.attachShadow({ mode: 'open' })` 및 맨 하단 `customElements.define('my-counter', MyCounter)`를 완성하세요!
2. 2️⃣ **`exercise/index.html`**: 브라우저에서 HTML 태그인 `<my-counter count="10"></my-counter>`가 캡슐화되어 커스텀 태그로 정상 출력되는지 확인하세요!

---

## 🎯 학습 목표

1. 브라우저 표준 기술인 **Custom Elements**와 **Shadow DOM**의 스타일 캡슐화 원리를 체득합니다.
2. `connectedCallback`, `attributeChangedCallback` 브라우저 표준 라이프사이클을 이해합니다.
3. Web Components 내부에서 화살표 함수 필드로 이벤트 핸들러의 `this` 스코프를 안전하게 보존합니다.
