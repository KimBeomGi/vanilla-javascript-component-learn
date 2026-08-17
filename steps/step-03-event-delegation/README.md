# Step 03: 이벤트 위임 (Event Delegation) 패턴

> **"리스트 아이템 1,000개에 일일이 이벤트를 거시겠습니까, 아니면 부모 요소 1개에만 걸어서 관리하시겠습니까?"**

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

1. 1️⃣ **`exercise/src/core/Component.js`**: `addEvent(eventType, selector, callback)` 메서드를 열고, `event.target.closest(selector)` 조건문을 완성하세요!
2. 2️⃣ **`exercise/src/components/TodoList.js`**: `TodoList` 클래스의 `setEvent()` 내부에서 `this.addEvent()`를 불러 폼 제출 및 삭제 이벤트를 연결하세요!
3. 3️⃣ **`exercise/index.html`**: 라이브 서버를 구동하고 할 일 추가/삭제 시 새로고침 없이 부드럽게 작동하는지 확인하세요!

---

## 🎯 학습 목표

1. DOM 이벤트 버블링(Bubbling) 원리와 **이벤트 위임(Event Delegation)** 패턴의 우수성을 이해합니다.
2. 렌더링 시마다 이벤트를 새로 걸어야 했던 메모리 누수 문제를 해결하는 `addEvent()` 헬퍼 메서드를 만듭니다.
3. Todo 앱(`TodoList.js`)에서 동적으로 생성되는 할 일 추가/삭제/체크 이벤트를 이벤트 위임으로 처리합니다.

---

## 💡 이벤트 위임이 필요한 이유

- 부모 요소(`this.$target`)에 이벤트를 **생성자 시점에 1회만 등록**하고, 실제 클릭된 타겟이 내가 원하는 선택자(`selector`)인지 `event.target.closest(selector)`로 감지합니다.
