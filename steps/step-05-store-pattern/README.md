# Step 05: 옵저버 패턴(Observer Pattern)과 중앙 상태 관리 (Store)

> **"부모가 자식의 자식의 자식에게 props를 5번 넘기는 'Props Drilling' 고통을 해결할 중앙 장바구니/상태 스토어(Store)를 만듭니다."**

---

## 🎯 학습 목표

1. **Props Drilling** 문제와 **옵저버 패턴(Observer Pattern / Pub-Sub)**의 필연성을 이해합니다.
2. ES6 **`Proxy`**를 사용하여 상태가 조회(`get`)될 때 구독(Subscribe)하고, 변경(`set`)될 때 통지(Notify)하는 리액티브 감시자를 설계합니다.
3. 리액트의 Redux/Zustand, Vue의 Pinia와 원리가 동일한 **중앙 상태 관리 스토어(`Store.js`)**를 구축합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

1. 1️⃣ **`exercise/src/core/observer.js`**: ES6 `Proxy` 트랩의 `get` (구독 등록: `observers.add`)과 `set` (통지: `observers.forEach`)을 완성하세요!
2. 2️⃣ **`exercise/src/core/Store.js`**: 중앙 상태 변경을 담당하는 `commit()`과 `dispatch()` 메서드를 완성하세요!
3. 3️⃣ **`exercise/src/App.js`**: 중앙 스토어를 구독하는 컴포넌트 동작을 라이브 서버에서 확인하세요!

---

## 💡 ES6 Proxy 기반 옵저버 동작 원리

```javascript
let currentObserver = null;

export const observe = fn => {
  currentObserver = fn;
  fn(); // 1. 실행하면서 get 트랩 호출!
  currentObserver = null;
};

export const observable = obj => {
  const observers = new Set();
  return new Proxy(obj, {
    get(target, name) {
      if (currentObserver) observers.add(currentObserver); // 2. 자동 구독!
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      target[name] = value;
      observers.forEach(fn => fn()); // 3. 자동 통지 및 재렌더링!
      return true;
    }
  });
};
```

---

## 🔑 자가 점검 체크리스트
- [ ] `Proxy`의 `get`과 `set` 트랩이 언제 작동하는지 이해하셨나요?
- [ ] 스토어 상태 변경 시 컴포넌트가 `render()`를 부르지 않아도 자동 갱신되나요?
