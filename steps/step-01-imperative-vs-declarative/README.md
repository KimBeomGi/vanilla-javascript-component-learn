# Step 01: 명령형(Imperative) vs 선언적(Declarative) 상태 기반 렌더링

> **"붕어빵 옆구리를 찢어서 팥을 넣으시겠습니까(명령형), 아니면 붕어빵 틀에 팥 양만 정해주시겠습니까(선언적)?"**

---

## 🎯 학습 목표

1. 기존 jQuery / 순수 DOM 조작 방식인 **명령형(Imperative) 프로그래밍**의 한계(스파게티 코드, 상태 파편화)를 체득합니다.
2. React/Vue 등 현대 프런트엔드의 핵심 원리인 **선언적(Declarative) 상태 기반 렌더링 (`UI = f(state)`)** 패러다임을 이해합니다.
3. `state` 객체, `render()` 함수, `setState()` 함수의 기초 파이프라인을 직접 코딩으로 작성합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

1. 1️⃣ **`exercise/imperative.html`**: 기존 방식대로 DOM을 일일이 찾아다니며 글자를 고쳐봅니다. (명령형의 답답함 체험)
2. 2️⃣ **`exercise/declarative.html`**: `state` 데이터만 수정하고 `render()`를 부르는 `setState()` 함수를 직접 구현해 봅니다. (선언적 혁신 체험!)

---

## 💡 개념 상세 설명 및 비유

### 1️⃣ 명령형(Imperative) 방식 (`imperative.html`)
- 버튼을 누를 때마다 `document.querySelector('#count-display')`를 찾아서 `.innerText`를 일일이 고치는 방식입니다.
- **문제점**: 화면에 표시되는 숫자가 10곳으로 늘어나면, 버튼 하나 누를 때마다 10곳의 DOM 요소를 일일이 찾아가며 고쳐야 합니다. 코드가 금방 엉키고 버그가 발생합니다.

### 2️⃣ 선언적(Declarative) 방식 (`declarative.html`)
- 데이터인 `state = { count: 0 }`만 변경하고, 화면을 그리는 `render()` 함수를 호출하는 방식입니다.
- **핵심 공식**: `UI = f(state)` (UI는 오직 상태 State에 의해 결정되는 결과물이다!)

### 💻 선언적 파이프라인 핵심 코드 미리보기
```javascript
let state = { count: 0 };

function render() {
  // 상태(state)를 입력받아 화면을 그리는 함수
  $app.innerHTML = `
    <div class="container">
      <h2>카운터: ${state.count}</h2>
      <button id="btn-inc">+</button>
      <button id="btn-dec">-</button>
    </div>
  `;
}

function setState(newState) {
  state = { ...state, ...newState }; // 1. 상태 업데이트
  render();                          // 2. 화면 자동 재렌더링!
}
```

---

## 🔑 자가 점검 체크리스트
- [ ] 명령형과 선언적 방식의 차이를 붕어빵 비유로 설명할 수 있나요?
- [ ] `setState` 안에서 `render()`를 불러주는 이유를 이해하셨나요?
- [ ] 막히면 `solution/declarative.html` 정답 코드를 열어 내 코드와 비교해 보세요!
