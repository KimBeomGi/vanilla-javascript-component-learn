# Step 01: 명령형(Imperative) vs 선언적(Declarative) 상태 기반 렌더링

> **"다 구워진 붕어빵 옆구리를 찢어서 팥을 넣으시겠습니까(명령형), 아니면 붕어빵 틀에 팥 양만 정해주시겠습니까(선언적)?"**

---

## 🔗 [누적 연결] 이전 Step 00과의 비교 및 발전 과정

- **이전 Step 00에서 한 것**: `document.querySelector`로 요소를 찾아 `.innerText`나 `.innerHTML`로 화면 글자를 일일이 교체했습니다.
- **겪었던 한계 (명령형의 문제)**: 화면 카운터 숫자가 3군데로 늘어나자, 버튼 하나 누를 때마다 3군데 DOM을 찾아다니며 일일이 수정해야 해서 코드가 금방 엉키고 버그가 발생했습니다.
- **이번 Step 01에서의 발전**: 
  - 화면을 하나하나 찾아서 고치라고 명령하는 대신, **중앙 데이터 상자인 `state = { count: 0 }`** 만 만들어 둡니다.
  - 데이터가 바뀌면 `setState()`가 자동으로 `render()`를 불러 화면을 싹 그려내는 **선언적 렌더링 (`UI = f(State)`) 파이프라인**으로 대전환을 시작합니다!

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 기존 jQuery / 순수 DOM 조작 방식인 **명령형(Imperative)** 프로그래밍의 한계와 스파게티 코드를 체험합니다.
2. React/Vue 등 현대 프런트엔드의 핵심 원리인 **선언적(Declarative) 상태 기반 렌더링 (`UI = f(State)`)** 패러다임을 습득합니다.
3. `state` 데이터가 변경될 때 화면이 저절로 갱신되는 `setState()` 함수를 직접 구현합니다.

---

## 📋 1-2-3단계 실습 순서 (Level 1 ~ Level 2 연습)

1. **`exercise/level-1-declarative.html` (Level 1: 카운터)**: `state` 데이터만 수정하고 `render()`를 부르는 `setState()` 기본 구조 완성하기
2. **`exercise/level-2-modal.html` (Level 2: 모달 토글)**: `state.isOpen` 조건에 따라 화면 조각을 그리고 `setState({ isOpen: !state.isOpen })` 호출하기
3. **`exercise/level-0-imperative.html`**: 옛날 방식 명령형 코드와 비교하여 선언적 방식의 압도적 편리함 체감하기

---

## ✍️ TODO 1-2-3 실습 가이드 (어떻게 작성해야 하나요?)

### 1. `level-1-declarative.html` TODO 가이드
- **`TODO 1`**: `render()` 안에서 `state.count` 변수값을 삼항 연산자나 백틱 `${state.count}` 으로 템플릿에 합치기
- **`TODO 2`**: 버튼 클릭 이벤트 안에서 직접 count 숫자를 올리지 않고 `setState({ count: state.count + 1 })` 호출하기
- **`TODO 3`**: `setState(newState)` 안에서 전개 연산자로 `state = { ...state, ...newState }` 복사 후 `render()` 부르기

### 2. `level-2-modal.html` TODO 가이드
- **`TODO 1`**: `${state.isOpen ? '<div class="modal">...</div>' : ''}` 조건부 삼항 연산자로 템플릿 작성하기
- **`TODO 2`**: 토글 버튼 클릭 시 `setState({ isOpen: !state.isOpen })` 호출하여 상태 반전시키기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 명령형(Imperative) 방식: "이거 찾아서 요거 고쳐라!"

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

### 선언적(Declarative) 방식: "데이터(State)가 이러하니 화면은 알아서 그려라!"

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
- [ ] 막히면 `solution/` 폴더 정답 코드를 열어 줄별 주석을 비교해 보세요!
