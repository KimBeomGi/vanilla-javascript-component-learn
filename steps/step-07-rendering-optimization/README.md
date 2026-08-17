# Step 07: 렌더링 최적화 (Debounce Batching & DOM Diffing)

> **"상태가 1초 동안 100번 바뀐다고 해서 화면을 100번 다 고쳐 그리시겠습니까, 아니면 1프레임 모아서 1번만 그리시겠습니까?"**

---

## 🎯 학습 목표

1. 브라우저 **Reflow/Repaint**의 비싼 비용을 이해하고 렌더링 최적화의 필연성을 체득합니다.
2. `requestAnimationFrame`을 사용하여 연속되는 `setState()` 호출을 1프레임으로 묶어 배치(Batch) 처리합니다.
3. DOM 노드를 통째로 지우지 않고 바뀐 텍스트/속성만 찾아 최소 갱신하는 **DOM Diffing 알고리즘** 맛보기를 실습합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

1. 1️⃣ **`exercise/src/core/Component.js`**: `setState()` 내부에서 `#renderScheduled` 플래그와 `requestAnimationFrame()` 비동기 배치 예약 로직을 완성하세요!
2. 2️⃣ **`exercise/src/core/diff.js`**: Virtual DOM과 Real DOM을 재귀적으로 비교해 바뀐 노드만 최소 교체하는 `updateElement()` 함수를 완성하세요!
3. 3️⃣ **`exercise/index.html`**: 100회 연속 업데이트 버튼을 눌렀을 때 화면 깜빡임 없이 단 1회만 렌더링되는지 콘솔에서 확인하세요!

---

## 💡 2대 최적화 핵심 기법 해설

### 1️⃣ 비동기 배치 렌더링 (Microtask Batching)
- `setState()`가 반복문 안에서 100번 연달아 불러와도, `#renderScheduled` 플래그를 활용해 `requestAnimationFrame()`으로 1프레임에 딱 1번만 `render()`를 수행합니다.

```javascript
setState(newState) {
  this.state = { ...this.state, ...newState };
  if (!this.#renderScheduled) {
    this.#renderScheduled = true;
    requestAnimationFrame(() => {
      this.render(); // 1프레임 모아서 1회만 수행!
      this.#renderScheduled = false;
    });
  }
}
```

### 2️⃣ DOM Diffing 최소 갱신 (`diff.js`)
- `parser.parseFromString()`으로 가상 DOM(Virtual DOM)을 만들고, 실제 DOM과 노드 이름/텍스트/속성을 재귀 비교하여 변경점만 핀포인트 대입합니다.

---

## 🔑 자가 점검 체크리스트
- [ ] 100회 연속 `setState` 호출 시 `render()` 가 1번만 실행되나요?
- [ ] `updateElement`가 변경된 텍스트 노드만 핀포인트로 교체하나요?
