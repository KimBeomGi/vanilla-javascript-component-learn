# ⚡ React & Vue 사용자를 위한 바닐라 JS 컴포넌트 1초 매핑 가이드

> **"React나 Vue를 이미 사용해보셨나요? 이 매핑 표 한 장으로 바닐라 JS 컴포넌트 아키텍처의 원리를 100% 한눈에 이해할 수 있습니다!"**

---

## 📊 1. 1대1 문법 비교 매핑 표 (Cheat Sheet)

| 개념 / 기능 | React (Hooks / JSX) | Vue 3 (Composition API) | 우리의 Vanilla JS Component |
| :--- | :--- | :--- | :--- |
| **컴포넌트 정의** | `function Counter()` | `<script setup>` | `class Counter extends Component` |
| **상태 선언 (State)** | `const [count, setCount] = useState(0);` | `const count = ref(0);` | `setup() { this.state = { count: 0 }; }` |
| **상태 변경** | `setCount(count + 1);` | `count.value++;` | `this.setState({ count: this.state.count + 1 });` |
| **HTML 템플릿** | `return <div>{count}</div>;` | `<template><div>{{ count }}</div></template>` | `template() { return \`<div>\${this.state.count}</div>\`; }` |
| **마운트 라이프사이클** | `useEffect(() => { ... }, []);` | `onMounted(() => { ... });` | `mounted() { ... }` |
| **Props 전달** | `<Child count={count} />` | `<Child :count="count" />` | `new Child($target, { count: this.state.count })` |
| **이벤트 핸들러** | `<button onClick={handleClick}>` | `<button @click="handleClick">` | `setEvent() { this.addEvent('click', 'button', ...); }` |
| **중앙 상태 관리** | Redux / Zustand | Pinia | `src/core/Store.js` (Proxy Observer) |
| **SPA 라우팅** | React Router (`<Routes>`) | Vue Router (`<router-view>`) | `src/core/Router.js` (History API) |

---

## 🔍 2. 왜 프레임워크는 내부에서 바닐라 JS처럼 동작할까요?

### 💡 React의 `useState` ➔ 우리의 `setState` + `render()`
React에서 `setCount(nextCount)`를 호출하면 컴포넌트 함수가 다시 실행되면서 새로운 Virtual DOM을 만듭니다.  
우리가 직접 만든 `setState(newState)`도 동일합니다:
```javascript
setState(newState) {
  this.state = { ...this.state, ...newState }; // 1. 상태 갱신
  this.render();                               // 2. 화면 다시 그리기!
}
```

### 💡 Vue 3의 `ref()` / `reactive()` ➔ 우리의 `Proxy` 기반 `Store`
Vue 3는 자바스크립트 ES6 **`Proxy`** 객체를 이용해 데이터가 읽힐 때 구독자(Component)를 수집하고, 데이터가 바뀔 때 화면을 갱신합니다.  
우리의 Step 05 `Store.js`도 정확히 똑같은 **`Proxy` 트랩**으로 구현되어 있습니다:
```javascript
export const observable = obj => {
  return new Proxy(obj, {
    get(target, name) { /* 구독 수집 */ },
    set(target, name, value) { /* 자동 Re-render 통지! */ }
  });
};
```

---

## 🎓 결론: 프레임워크의 마법을 해제하다

React와 Vue는 마법이 아닙니다.  
단지 우리가 만든 `Component.js`, `Store.js`, `Router.js`와 같은 바닐라 자바스크립트 클래스와 디자인 패턴들을 아주 정교하고 가볍게 다듬어 놓은 라이브러리일 뿐입니다.

이 프로젝트의 바닐라 JS 구현체를 한 번 완성하고 나면, React와 Vue의 작동 원리가 선명하게 눈에 보이기 시작합니다!
