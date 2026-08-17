# Step 05: 옵저버 패턴(Observer Pattern)과 중앙 상태 관리 (Store)

> **"부모가 자식의 자식의 자식에게 props를 5번 넘기는 'Props Drilling' 고통을 해결할 중앙 장바구니/상태 스토어(Store)를 만듭니다."**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 깊은 컴포넌트 구조에서 데이터를 전달하기 괴로웠던 **Props Drilling** 문제점을 배웁니다.
2. ES6 **`Proxy`**를 사용해 상태가 조회(`get`)될 때 자동으로 구독하고, 변경(`set`)될 때 통지하는 감시 카메라를 만듭니다.
3. React의 Redux, Vue의 Pinia와 원리가 똑같은 **중앙 상태 관리 스토어(`Store.js`)**를 만듭니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/src/core/observer.js`**: ES6 `Proxy` 트랩의 `get` (구독: `observers.add`)과 `set` (통지: `observers.forEach`) 작성하기
2. 2️⃣ **`exercise/src/core/Store.js`**: 중앙 상태 변경을 담당하는 `commit()`과 `dispatch()` 작성하기
3. 3️⃣ **`exercise/src/App.js`**: 중앙 스토어를 구독하는 컴포넌트 동작 확인하기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 🛒 은행 통장 알림 비유로 이해하는 옵저버 원리

- 은행 계좌(`Store state`)에 돈이 입출금(`set`)되면, 계좌에 등록된 스마트폰(`observe` 구독 컴포넌트)으로 **"입금되었습니다!"** 하고 문자(알림)가 날아가 화면이 자동으로 재렌더링되는 원리입니다!

#### 💡 보조 설명: `observer.js` 코드 한 줄 한 줄 풀이
```javascript
let currentObserver = null; // 현재 어떤 컴포넌트가 감시 중인지 기록할 변수

export const observe = fn => {
  currentObserver = fn;
  fn(); // 1. render()를 실행하면 내부에서 state를 읽으면서(get) 자동 등록됨!
  currentObserver = null;
};

export const observable = obj => {
  const observers = new Set(); // 중복 없는 알림 명단 리스트

  return new Proxy(obj, {
    get(target, name) {
      if (currentObserver) observers.add(currentObserver); // 2. 읽을 때 명단에 추가!
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      target[name] = value;
      observers.forEach(fn => fn()); // 3. 값이 바뀌면 명단의 모든 컴포넌트 자동 재렌더링!
      return true;
    }
  });
};
```

---

## 🔑 자가 점검 체크리스트
- [ ] `Proxy`의 `get`과 `set` 트랩이 언제 호출되는지 이해하셨나요?
- [ ] 스토어 상태가 바뀌면 컴포넌트가 저절로 재렌더링되나요?
