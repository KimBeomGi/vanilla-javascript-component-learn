# Step 01: 명령형(Imperative) vs 선언적(Declarative) 상태 기반 렌더링

> **"붕어빵 옆구리를 찢어서 팥을 넣으시겠습니까(명령형), 아니면 붕어빵 틀에 팥 양만 정해주시겠습니까(선언적)?"**

---

## 🎯 학습 목표

1. 기존 jQuery / 순수 DOM 조작 방식인 **명령형(Imperative) 프로그래밍**의 한계(스파게티 코드, 상태 파편화)를 체득합니다.
2. React/Vue 등 현대 프런트엔드의 핵심 원리인 **선언적(Declarative) 상태 기반 렌더링 (`UI = f(state)`)** 패러다임을 이해합니다.
3. `state` 객체, `render()` 함수, `setState()` 함수의 기초 파이프라인을 직접 코딩으로 작성합니다.

---

## 💡 개념 한눈에 보기

### 1. 명령형(Imperative) 방식 (`imperative.html`)
- 버튼을 누를 때마다 `document.querySelector('#count-display')`를 찾아서 `.innerText`를 일일이 고치는 방식입니다.
- **문제점**: 화면에 표시되는 숫자가 10곳으로 늘어나면 10곳의 DOM을 일일이 찾아다니며 수정해야 해서 코드가 엉키게 됩니다.

### 2. 선언적(Declarative) 방식 (`declarative.html`)
- 데이터인 `state = { count: 0 }`만 변경하고, 화면을 그리는 `render()` 함수를 호출하는 방식입니다.
- **핵심 공식**: `UI = f(state)` (UI는 상태에 따라 결정되는 결과물이다!)

---

## 📂 실습 안내 및 미션

### 1️⃣ `exercise/imperative.html` 실습
- **미션**: DOM 요소를 가져오고 버튼 클릭 시 `count` 변수를 증가/감소시켜 화면 글자를 고치세요.
- **핵심 포인트**: `document.querySelector('#btn-increase')` 연결 연습

### 2️⃣ `exercise/declarative.html` 실습
- **미션**: `state` 변경 후 `render()`를 재호출하는 `setState(newState)` 함수를 완성해 보세요.
- **핵심 포인트**:
  ```javascript
  function setState(newState) {
    state = { ...state, ...newState }; // 상태 업데이트
    render();                          // 자동 재렌더링!
  }
  ```

---

## 🔑 자가 점검 팁
- 실습 후 막히거나 화면이 나타나지 않을 땐 `solution/declarative.html` 정답 코드를 열어 내 코드와 비교해 보세요!
