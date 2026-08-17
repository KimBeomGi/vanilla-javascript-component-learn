# Step 04: 컴포넌트 분화 및 데이터 흐름 (Props & Callbacks)

> **"하나의 거대한 컴포넌트에 모든 코드를 다 몰아넣으시겠습니까, 아니면 역할별로 작고 예쁜 자식 컴포넌트들로 나누시겠습니까?"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 거대한 앱을 **단일 책임 원칙(SRP)**에 따라 입력용, 목록용, 필터용 자식 컴포넌트로 깔끔하게 조각냅니다.
2. 부모가 자식에게 데이터를 물려주는 **`props` 전달** 방식을 배웁니다.
3. 자식이 부모의 데이터를 바꾸고 싶을 때 부모가 넘겨준 함수를 부르는 **콜백(Callback) 전달** 방식을 배웁니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. **`exercise/src/components/ItemInput.js`**: `setEvent()`에서 부모가 준 `addItem` 콜백 호출하기
2. **`exercise/src/components/ItemList.js`**: `setEvent()`에서 `toggleItem`, `deleteItem` 콜백 호출하기
3. **`exercise/src/components/ItemFilter.js`**: `setEvent()`에서 `filterItem` 콜백 호출하기
4. **`exercise/src/App.js`**: `mounted()` 안에서 `new ItemInput()`, `new ItemList()`, `new ItemFilter()` 자식 부착하기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 🌲 컴포넌트 데이터 흐름 규칙

```text
       ┌───────────┐
       │  App.js   │ (중앙 데이터 state 소유자)
       └─────┬─────┘
   ┌─────────┼─────────┐
   ▼         ▼         ▼
ItemInput ItemList ItemFilter  (자식 컴포넌트들)
```

- **Props Down (부모 ➔ 자식)**: 부모(`App.js`)가 자식(`ItemList.js`) 생성자에 데이터 보따리 `props` 전달
- **Events Up (자식 ➔ 부모)**: 자식(`ItemInput.js`)에서 입력이 들어오면 부모가 넘겨준 `addItem()` 콜백을 불러 부모의 `state` 갱신 요청

#### 💡 보조 설명: ❌ `.bind(this)` 누락 vs ⭕ 올바른 콜백 전달 비교
```javascript
// ❌ 잘못된 예시 (.bind(this)를 안 적어 전달하면 자식에서 실행될 때 this가 엉뚱한 곳을 가리킴!)
mounted() {
  new ItemInput($input, { addItem: this.addItem }); // 💥 자식에서 호출 시 this.state 읽다가 에러 발생!
}

// ⭕ 올바른 예시 (.bind(this)를 명시해 부모의 this 스코프를 꽁꽁 묶어서 넘겨줌!)
mounted() {
  new ItemInput($input, { addItem: this.addItem.bind(this) }); // 핑퐁! 안전하게 부모 메서드 호출 성공!
}
```

---

## 🔑 자가 점검 체크리스트
- [ ] 부모 함수를 자식에게 넘겨줄 때 `.bind(this)`를 붙이셨나요?
- [ ] 자식 컴포넌트가 부모 state를 직접 수정하지 않고 콜백으로 알리는 것을 이해하셨나요?
