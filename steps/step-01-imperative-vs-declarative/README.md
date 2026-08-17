# Step 01: 명령형(Imperative) vs 선언적(Declarative) 상태 기반 렌더링

> **"다 구워진 붕어빵 옆구리를 찢어서 팥을 넣으시겠습니까(명령형), 아니면 붕어빵 틀에 팥 양만 정해주시겠습니까(선언적)?"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 옛날 방식(DOM 직접 조작)인 **명령형** 코드가 왜 나중에 코드가 커지면 스파게티처럼 꼬이는지 직접 경험합니다.
2. 현대 프런트엔드(React, Vue)의 핵심 원리인 **선언적 상태 기반 렌더링 (`UI = f(State)`)** 방식을 배웁니다.
3. `state` 데이터가 바뀌면 화면이 저절로 짠! 하고 다시 그려지는 `setState()` 파이프라인을 작성합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/imperative.html`** 열기: 버튼 누를 때마다 `document.querySelector`로 일일이 글자 바꾸는 옛날 방식 작성해보기
2. 2️⃣ **`exercise/declarative.html`** 열기: `state` 데이터만 수정하고 `render()`를 부르는 `setState()` 함수 작성해보기

---

## 💡 왕초보 눈높이 개념 해설

### 1️⃣ 명령형(Imperative) 방식: "이거 찾아서 요거 바꿔라!"
- `document.querySelector('#count').innerText = count;`
- 버튼 누를 때마다 일일이 DOM을 찾아서 글자를 고치는 방식입니다.
- **문제점**: 화면에 카운터 숫자가 10군데에 써있으면, 버튼 누를 때마다 10군데 DOM을 찾아다니며 고쳐야 합니다. 개발자가 깜빡하고 1곳을 누락하면 버그가 생깁니다!

### 2️⃣ 선언적(Declarative) 방식: "데이터(State)만 정해줄 테니 화면은 틀이 알아서 그려라!"
- **핵심 공식**: `UI = f(State)` (화면 UI는 오직 상태 State에 의해 결정되는 결과물이다!)
- 데이터인 `state = { count: 0 }` 만 고치고, `render()`를 호출하면 끝납니다!

### 💻 선언적 파이프라인 한 줄 한 줄 풀이
```javascript
let state = { count: 0 }; // 1. 화면의 기준이 되는 중앙 데이터 상자

function render() {
  // 2. 현재 state 데이터 모양대로 HTML을 싹 새로 대입!
  $app.innerHTML = `
    <div>
      <h2>카운트: ${state.count}</h2>
      <button id="btn-inc">+</button>
    </div>
  `;
}

function setState(newState) {
  state = { ...state, ...newState }; // 3. 데이터 상자를 안전하게 갱신!
  render();                          // 4. 데이터가 바뀌었으니 화면을 다시 그리기!
}
```

---

## 🔑 자가 점검 체크리스트
- [ ] 명령형과 선언적의 차이를 붕어빵 비유로 이해하셨나요?
- [ ] `setState` 안에서 `render()`를 호출해야 화면이 바뀌는 것을 확인하셨나요?
- [ ] 막히면 `solution/declarative.html` 정답을 비교해 보세요!
