# Step 05: 옵저버 패턴(Observer Pattern)과 중앙 상태 관리 (Store)

> **"부모가 자식의 자식의 자식에게 props를 5번 넘기는 'Props Drilling' 고통을 해결할 중앙 장바구니/상태 스토어(Store)를 만듭니다."**

---

## 🎯 학습 목표

1. **Props Drilling** 문제와 **옵저버 패턴(Observer Pattern / Pub-Sub)**의 필연성을 이해합니다.
2. ES6 **`Proxy`**를 사용하여 상태가 조회(`get`)될 때 구독(Subscribe)하고, 변경(`set`)될 때 통지(Notify)하는 리액티브 감시자를 설계합니다.
3. 리액트의 Redux/Zustand, Vue의 Pinia와 원리가 동일한 **중앙 상태 관리 스토어(`Store.js`)**를 구축합니다.

---

## 💡 ES6 Proxy 기반 옵저버 동작 원리

```javascript
let currentObserver = null;

export const observe = fn => {
  currentObserver = fn;
  fn(); // 1. 함수 실행 시 내부에서 state에 접근하면 get 트랩이 실행됨!
  currentObserver = null;
};

export const observable = obj => {
  const observers = new Set();

  return new Proxy(obj, {
    get(target, name) {
      if (currentObserver) observers.add(currentObserver); // 2. 구독자 자동 등록!
      return target[name];
    },
    set(target, name, value) {
      target[name] = value;
      observers.forEach(fn => fn()); // 3. 상태 변경 시 모든 구독자 자동 재실행(Re-render)!
      return true;
    }
  });
};
```

---

## 📂 실습 미션 지침 (`exercise/src/core/observer.js`)

1. **`get` 트랩 작성**: `currentObserver`가 존재하는 경우 `observers.add(currentObserver)` 등록
2. **`set` 트랩 작성**: 상태 값이 바뀔 때 `observers.forEach(fn => fn())` 통지 로직 완성

---

## 🔑 자가 점검 팁
- 스토어의 상태가 바뀌면 컴포넌트가 `this.render()`를 직접 부르지 않아도 **자동으로 화면이 업데이트**되는지 확인하세요!
