# Step 07: 렌더링 최적화 (Debounce Batching & DOM Diffing)

> **"상태가 1초 동안 100번 바뀐다고 해서 화면을 100번 다 고쳐 그리시겠습니까, 아니면 1프레임 모아서 1번만 그리시겠습니까?"**

---

## 🎯 학습 목표

1. 브라우저 **Reflow/Repaint**의 비싼 비용을 이해하고 렌더링 최적화의 필연성을 체득합니다.
2. `requestAnimationFrame`을 사용하여 연속되는 `setState()` 호출을 1프레임으로 묶어 배치(Batch) 처리합니다.
3. DOM 노드를 통째로 지우지 않고 바뀐 텍스트/속성만 찾아 최소 갱신하는 **DOM Diffing 알고리즘** 맛보기를 실습합니다.

---

## 💡 2대 최적화 기법 원리

### 1. 비동기 배치 렌더링 (Microtask Batching)
- `setState()`가 반복문 안에서 100번 연달아 실행되어도, `#renderScheduled` 플래그를 이용해 `requestAnimationFrame()`에 `render()`를 1회만 예약합니다.

```javascript
setState(newState) {
  this.state = { ...this.state, ...newState };

  if (!this.#renderScheduled) {
    this.#renderScheduled = true;
    requestAnimationFrame(() => {
      this.render(); // 1프레임 모아서 딱 1번만 렌더링!
      this.#renderScheduled = false;
    });
  }
}
```

### 2. DOM Diffing 최소 갱신 (`diff.js`)
- 기존 DOM과 새 Virtual DOM 노드의 태그 이름, 텍스트, Attributes를 비교하여 변경된 부분만 핀포인트로 대입합니다.

---

## 📂 실습 미션 지침 (`exercise/src/core/Component.js`)

1. `Component.js`의 `setState(newState)` 내부 작성
2. `#renderScheduled` 플래그 조건 검사 후 `requestAnimationFrame` 으로 `this.render()` 호출하기

---

## 🔑 자가 점검 팁
- `setState` 100회 호출 버튼을 누르고 콘솔 로그를 확인했을 때, `render()` 함수가 100번이 아니라 **단 1번만 호출되는지** 확인하세요!
