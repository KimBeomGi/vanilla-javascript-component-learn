# Step 04: 컴포넌트 분화 및 데이터 흐름 (Props & Callbacks)

> **"하나의 거대한 컴포넌트에 모든 코드를 다 몰아넣으시겠습니까, 아니면 역할별로 작고 예쁜 자식 컴포넌트들로 나누시겠습니까?"**

---

## 🎯 학습 목표

1. **단일 책임 원칙(SRP)**에 따라 거대한 앱을 역할별 자식 컴포넌트로 분화합니다.
2. 부모 ➔ 자식 방향으로 데이터를 전달하는 **`props` 전달** 방식을 습득합니다.
3. 자식 ➔ 부모 방향으로 변경 사항을 알리는 **콜백(Callback) 함수 전달** 방식을 습득합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

자식 컴포넌트들의 `setEvent()`를 먼저 완성한 뒤 부모인 `App.js`에서 엮어줍니다!

1. 1️⃣ **`exercise/src/components/ItemInput.js`**: `setEvent()`에서 부모가 건네준 `addItem` 콜백 호출 완성!
2. 2️⃣ **`exercise/src/components/ItemList.js`**: `setEvent()`에서 `toggleItem`, `deleteItem` 콜백 호출 완성!
3. 3️⃣ **`exercise/src/components/ItemFilter.js`**: `setEvent()`에서 `filterItem` 콜백 호출 완성!
4. 4️⃣ **`exercise/src/App.js`**: `mounted()` 메서드 내부에서 `new ItemInput()`, `new ItemList()`, `new ItemFilter()` 마운트 및 props 전달 완성!

---

## 🌲 컴포넌트 트리 구조 및 데이터 흐름

```text
       ┌───────────┐
       │  App.js   │ (중앙 상태 데이터 state 소유)
       └─────┬─────┘
   ┌─────────┼─────────┐
   ▼         ▼         ▼
ItemInput ItemList ItemFilter  (자식 컴포넌트들)
```

- **Props Down (부모 ➔ 자식)**: 부모(`App.js`)가 자식(`ItemList.js`)에게 렌더링할 목록 데이터 `props` 전달
- **Events Up (자식 ➔ 부모)**: 자식(`ItemInput.js`)에서 버튼이 클릭되면 부모가 넘겨준 `addItem()` 콜백 함수를 호출하여 상태 변경 요청

### 💻 `App.js` 마운트 코드 가이드
```javascript
mounted() {
  const $itemInput = this.$target.querySelector('[data-component="item-input"]');
  new ItemInput($itemInput, {
    addItem: this.addItem.bind(this) // .bind(this) 필수!
  });
}
```

---

## 🔑 자가 점검 체크리스트
- [ ] 콜백 메서드를 자식에게 넘길 때 `.bind(this)`를 붙여 `this` 스코프를 유지했나요?
- [ ] 자식 컴포넌트가 부모의 `state`를 직접 수정하지 않고 콜백으로 알리는가요?
