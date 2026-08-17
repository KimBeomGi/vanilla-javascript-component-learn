# Step 04: 컴포넌트 분화 및 데이터 흐름 (Props & Callbacks)

> **"하나의 거대한 컴포넌트에 모든 코드를 다 몰아넣으시겠습니까, 아니면 역할별로 작고 예쁜 자식 컴포넌트들로 나누시겠습니까?"**

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

자식 컴포넌트들의 `setEvent()`를 먼저 완성한 뒤 부모인 `App.js`에서 엮어줍니다!

1. 1️⃣ **`exercise/src/components/ItemInput.js`**: `setEvent()`에서 부모가 건네준 `addItem` 콜백 호출 완성!
2. 2️⃣ **`exercise/src/components/ItemList.js`**: `setEvent()`에서 `toggleItem`, `deleteItem` 콜백 호출 완성!
3. 3️⃣ **`exercise/src/components/ItemFilter.js`**: `setEvent()`에서 `filterItem` 콜백 호출 완성!
4. 4️⃣ **`exercise/src/App.js`**: `mounted()` 메서드 내부에서 `new ItemInput()`, `new ItemList()`, `new ItemFilter()` 마운트 및 props 전달 완성!

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
