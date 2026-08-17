# Step 08: Web Components 표준 기술 (Custom Elements & Shadow DOM)

> **"브라우저 네이티브 웹 컴포넌트 사양과 클래스 메서드 & 화살표 함수 `this` 바인딩 완전 정복"**

---

## 💡 Web Components 주요 개념 및 함수 작성 규칙

### 1️⃣ 라이프사이클 메서드 (클래스 메서드 문법)
- `connectedCallback()`: 컴포넌트가 DOM에 부착될 때 브라우저가 자동 호출
- `disconnectedCallback()`: 컴포넌트가 DOM에서 제거될 때 호출 (클린업 작업)
- `attributeChangedCallback(name, oldVal, newVal)`: 관찰 중인 속성(`observedAttributes`)이 변경될 때 호출

### 2️⃣ 이벤트 핸들러 및 `this` 바인딩 (화살표 함수 필드 문법)
Web Component 내부에서 이벤트 핸들러를 정의할 때는 **화살표 함수 클래스 필드**(`handleClick = (e) => { ... }`)를 사용하는 것이 정석입니다.

```javascript
class MyCounter extends HTMLElement {
  count = 0;

  // ⭕ 화살표 함수로 정의하여 'this'가 항상 <my-counter> 태그를 가리키도록 고정!
  handleClick = () => {
    this.count++;
    this.render();
  };

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>button { padding: 8px 16px; font-weight: bold; }</style>
      <button class="btn-inc">카운트: ${this.count}</button>
    `;

    // 이벤트 리스너 바인딩
    this.shadowRoot.querySelector('.btn-inc').addEventListener('click', this.handleClick);
  }
}

// 브라우저 커스텀 태그 등록
customElements.define('my-counter', MyCounter);
```

---

## 🎯 학습 미션
- `exercise/` 디렉토리의 `MyCounter.js`에서 `customElements.define` 등록 및 Shadow DOM 마운트 구조를 완성해 보세요.
- 막히면 `solution/` 완성본 코드를 확인하세요!

---

## 📂 디렉토리 구조
- `exercise/`: 직접 코딩해 보는 **실습용 가이드 파일 (Starter)**
- `solution/`: "짜잔~" 하고 완벽히 작동하는 **완성본 정답 코드 (Solution)**
