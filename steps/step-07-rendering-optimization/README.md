# Step 07: 렌더링 최적화 (Debounce Batching & DOM Diffing)

> **"상태가 1초 동안 100번 바뀐다고 해서 화면을 100번 다 고쳐 그리시겠습니까, 아니면 1프레임 모아서 1번만 그리시겠습니까?"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 브라우저가 화면을 그리는 비용(Reflow/Repaint)이 비싸다는 점을 이해합니다.
2. `requestAnimationFrame`을 사용하여 연속으로 호출되는 `setState()`를 1프레임으로 묶어 1번만 실행합니다.
3. DOM 노드를 통째로 삭제하고 다시 만들지 않고, 바뀐 글자/속성만 찾아 핀포인트로 고치는 **DOM Diffing 알고리즘**을 배웁니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/src/core/Component.js`** 열기: `setState()` 안에서 `#renderScheduled` 플래그와 `requestAnimationFrame()` 배치 코드 작성하기
2. 2️⃣ **`exercise/src/core/diff.js`** 열기: 실제 DOM과 가상 DOM을 비교해 변경점만 최소 갱신하는 `updateElement()` 함수 완성하기
3. 3️⃣ **`exercise/index.html`** 열기: 100회 연속 업데이트 버튼을 눌렀을 때 화면이 1번만 그려지는지 콘솔에서 확인하기

---

## 💡 2대 최적화 핵심 기법 풀이

### 1️⃣ 비동기 배치 렌더링 (Microtask Batching)
- `setState()`가 반복문 안에서 100번 불려도, `#renderScheduled` 예약 플래그를 활용해 `requestAnimationFrame()`으로 1프레임(초당 60프레임) 모아 딱 1번만 `render()`를 수행합니다.

```javascript
setState(newState) {
  this.state = { ...this.state, ...newState };
  if (!this.#renderScheduled) {
    this.#renderScheduled = true; // 예약 완료!
    requestAnimationFrame(() => {
      this.render(); // 1프레임에 모아서 딱 1번만 수행!
      this.#renderScheduled = false; // 예약 해제!
    });
  }
}
```

### 2️⃣ DOM Diffing 최소 갱신 (`diff.js`)
- 전체 DOM을 지우고 새로 그리지 않고, 바뀐 텍스트 노드나 `class` 속성만 비교해서 핀포인트로 그 부분만 쏙 교체합니다.

---

## 🔑 자가 점검 체크리스트
- [ ] 100번 연속 `setState` 호출 시 `render()` 가 1번만 실행되나요?
- [ ] `updateElement`가 바뀐 부분만 핀포인트로 고치나요?
