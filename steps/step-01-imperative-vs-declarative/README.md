# Step 01: 명령형(Imperative) vs 선언적(Declarative) 상태 기반 렌더링

> **"다 구워진 붕어빵 옆구리를 찢어서 팥을 넣으시겠습니까(명령형), 아니면 붕어빵 틀에 팥 양만 정해주시겠습니까(선언적)?"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 기존 jQuery / 순수 DOM 조작 방식인 **명령형(Imperative)** 프로그래밍의 한계와 스파게티 코드를 체험합니다.
2. React/Vue 등 현대 프런트엔드의 핵심 원리인 **선언적(Declarative) 상태 기반 렌더링 (`UI = f(State)`)** 패러다임을 습득합니다.
3. `state` 데이터가 변경될 때 화면이 저절로 갱신되는 `setState()` 함수를 직접 구현합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/imperative.html`** 열기: 버튼 누를 때마다 `document.querySelector`로 일일이 글자 바꾸는 옛날 방식 작성해보기
2. 2️⃣ **`exercise/declarative.html`** 열기: `state` 데이터만 수정하고 `render()`를 부르는 `setState()` 함수 작성해보기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 1️⃣ 명령형(Imperative) 방식: "이거 찾아서 요거 고쳐라!"

#### 📌 주 설명
- `document.querySelector('#count-display').innerText = count;`
- 화면에 표시된 숫자를 고치기 위해 자바스크립트가 직접 HTML DOM 태그를 찾아다니며 일일이 수정하라고 "명령"하는 방식입니다.

#### 💡 보조 설명: ❌ 명령형의 한계와 스파게티 코드 예시
```javascript
// ❌ 명령형 방식: 화면의 카운터 숫자가 3군데(상단, 중단, 하단)에 써있다면?
let count = 0;

document.querySelector('#btn-increase').addEventListener('click', () => {
  count++;
  // 카운터 숫자가 바뀔 때마다 3군데 DOM을 일일이 찾아가서 수정해야 함!
  document.querySelector('#header-count').innerText = count;
  document.querySelector('#main-count').innerText = count;
  document.querySelector('#footer-count').innerText = count;
  // 💥 만약 1군데라도 수정을 빠뜨리면 화면 데이터가 서로 달라지는 버그가 생김!
});
```

---

### 2️⃣ 선언적(Declarative) 방식: "데이터(State)가 이러하니 화면은 알아서 그려라!"

#### 📌 주 설명
- **핵심 공식**: `UI = f(State)` (화면 UI는 오직 상태 State 데이터에 의해 결정되는 결과물이다!)
- 개발자는 데이터인 `state = { count: 0 }` 만 변경하고, 화면을 싹 그려주는 `render()` 함수를 부르면 끝납니다.

#### 💡 보조 설명: ⭕ 선언적 파이프라인 우수성 코드 예시
```javascript
// ⭕ 선언적 방식: 데이터만 고치고 render()를 부르면 3군데든 100군데든 자동 일괄 갱신!
let state = { count: 0 };

function render() {
  // 현재 state 데이터 모양을 그대로 선언(정의)!
  $app.innerHTML = `
    <header>카운트: ${state.count}</header>
    <main>카운트: ${state.count}</main>
    <footer>카운트: ${state.count}</footer>
  `;
}

function setState(newState) {
  state = { ...state, ...newState }; // 1. 데이터 업데이트 (불변성 합치기)
  render();                          // 2. 화면 자동 재렌더링!
}
```

---

## ❓ 초보자가 자주 헷갈리는 Q&A

**Q. '선언적 렌더링'과 '함수 선언식'은 같은 단어인가요?**  
- **아닙니다! 완전히 다른 개념입니다.**
- **선언적 렌더링**: "화면을 상태(State) 데이터 중심으로 그리자!"라는 **생각의 틀(패러다임)**입니다.
- **함수 선언식**: `function add() {}` 처럼 자바스크립트에서 함수를 타이핑할 때 쓰는 **문법 규칙(Syntax)**입니다.

---

## 🔑 자가 점검 체크리스트
- [ ] 명령형과 선언적의 차이를 붕어빵 비유로 설명할 수 있나요?
- [ ] `setState` 안에서 `render()`를 부르는 이유를 이해하셨나요?
- [ ] 막히면 `solution/declarative.html` 정답 코드를 열어 비교해 보세요!
