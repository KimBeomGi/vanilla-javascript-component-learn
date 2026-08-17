# Step 04: 컴포넌트 분화 및 데이터 흐름 (Props & Callbacks)

> **"하나의 거대한 컴포넌트에 모든 코드를 다 몰아넣으시겠습니까, 아니면 역할별로 작고 예쁜 자식 컴포넌트들로 나누시겠습니까?"**

---

## 🎯 학습 목표

1. **단일 책임 원칙(SRP)**에 따라 거대한 앱을 역할별 자식 컴포넌트로 분화합니다.
2. 부모 ➔ 자식 방향으로 데이터를 전달하는 **`props` 전달** 방식을 습득합니다.
3. 자식 ➔ 부모 방향으로 변경 사항을 알리는 **콜백(Callback) 함수 전달** 방식을 습득합니다.

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

---

## 📂 실습 미션 지침 (`exercise/src/App.js`)

`App.js`의 `mounted()` 메서드 내부에서 자식 컴포넌트 슬롯(`data-component="..."`)을 찾고 마운트하세요:

1. **`ItemInput` 마운트**: `addItem` 콜백 함수를 props로 전달
2. **`ItemList` 마운트**: `filteredItems` 목록과 `deleteItem`, `toggleItem` 콜백 전달
3. **`ItemFilter` 마운트**: `filterItem` 콜백 전달

```javascript
mounted() {
  const $itemInput = this.$target.querySelector('[data-component="item-input"]');
  new ItemInput($itemInput, { addItem: this.addItem.bind(this) });
  
  // TODO 2 & TODO 3 코드를 완성하세요!
}
```

---

## 🔑 자가 점검 팁
- 부모 메서드를 콜백으로 전달할 때 `this`가 깨지지 않도록 `.bind(this)`를 꼭 붙였는지 확인하세요!
