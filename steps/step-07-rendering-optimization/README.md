# Step 07: 렌더링 최적화 (Debounce Batching & DOM Diffing)

> **"상태가 1초 동안 100번 바뀐다고 해서 화면을 100번 다 고쳐 그리시겠습니까, 아니면 1프레임 모아서 1번만 그리시겠습니까?"**

---

## 🔗 [누적 연결] 이전 Step 06과의 비교 및 발전 과정

- **이전 Step 06에서 한 것**: SPA 라우터까지 결합되어 라우팅과 상태 관리가 작동하는 완성형 아키텍처를 구축했습니다.
- **겪었던 한계**: 하지만 반복문 안에서 `setState()`가 100번 연속 연달아 불리면 1초 만에 `this.$target.innerHTML = ...` 이 100번 불려서 브라우저가 화면을 그리느라 하얗게 버벅이는 **성능 과부하(Reflow/Repaint)**가 생겼습니다.
- **이번 Step 07에서의 발전**:
  - `setState()`가 100번 연속 불려도 `requestAnimationFrame()`으로 1프레임(초당 60프레임) 모아 **딱 1번만 렌더링하는 비동기 배치(Batching)**를 도입합니다!
  - 전체 DOM을 엎어치지 않고 바뀐 노드만 최소 교체하는 **`diff.js` Virtual DOM Diffing**을 탑재해 프레임워크 성능을 극대화합니다!

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 브라우저가 화면을 그리는 비용(Reflow/Repaint)이 비싸다는 점을 이해합니다.
2. `requestAnimationFrame`을 사용하여 연속으로 호출되는 `setState()`를 1프레임으로 묶어 1번만 실행합니다.
3. DOM 노드를 통째로 삭제하고 다시 만들지 않고, 바뀐 글자/속성만 찾아 핀포인트로 고치는 **DOM Diffing 알고리즘**을 배웁니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. **`exercise/src/core/Component.js`**: `setState()` 안에서 `#renderScheduled` 플래그와 `requestAnimationFrame()` 배치 코드 작성하기
2. **`exercise/src/core/diff.js`**: 실제 DOM과 가상 DOM을 비교해 변경점만 최소 갱신하는 `updateElement()` 함수 완성하기
3. **`exercise/index.html`**: 100회 연속 업데이트 버튼을 눌렀을 때 화면이 1번만 그려지는지 콘솔에서 확인하기

---

## ✍️ TODO 1-2 실습 가이드 (어떻게 작성해야 하나요?)

### 1. `core/Component.js` TODO 가이드
- **`TODO 1`**: `setState(newState)` 안에서 `#renderScheduled` 예약 플래그를 검사하여 이미 예약되었으면 중복 렌더링을 막고, `requestAnimationFrame(() => { this.render(); this.#renderScheduled = false; })` 로 1프레임 모아 렌더링하기

### 2. `core/diff.js` TODO 가이드
- **`TODO 2`**: `updateElement(parent, newNode, oldNode, index)` 안에서 텍스트 노드 비교(`nodeValue`), 태그 이름 비교(`nodeName`), 속성 비교(`updateAttributes`)를 수행하여 변경점만 핀포인트 업데이트하기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 비동기 배치 렌더링 (Microtask Batching)

#### 📌 주 설명
- `setState()`가 반복문 안에서 100번 불려도, `#renderScheduled` 예약 플래그를 활용해 `requestAnimationFrame()`으로 1프레임(초당 60프레임) 모아 딱 1번만 `render()`를 수행합니다.

#### 💡 보조 설명: ❌ 매번 render() vs ⭕ 1프레임 배치 render() 코드 비교
```javascript
// ❌ 매번 렌더링 (100번 연달아 setState 부르면 100번 DOM을 싹 엎어버려서 버벅임 발생!)
setState(newState) {
  this.state = { ...this.state, ...newState };
  this.render(); // 💥 100번 불려 화면이 하얗게 멈춤!
}

// ⭕ 비동기 배치 렌더링 (100번 불려도 예약 플래그로 1프레임에 딱 1번만 모아 그림!)
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

---

### DOM Diffing 최소 갱신 (`diff.js`)

#### 📌 주 설명
- 전체 DOM을 지우고 새로 그리지 않고, 바뀐 텍스트 노드나 `class` 속성만 비교해서 핀포인트로 그 부분만 쏙 교체합니다.

---

## 🔑 자가 점검 체크리스트
- [ ] 100번 연속 `setState` 호출 시 `render()` 가 1번만 실행되나요?
- [ ] `updateElement`가 바뀐 부분만 핀포인트로 고치나요?
