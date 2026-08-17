# 🏫 왕초보를 위한 ES6 Class & 객체지향(OOP) 완전 정복 가이드

> **"자바스크립트 초보자가 가장 두려워하는 `class`, `constructor`, `this`, `extends` 4대 개념을 붕어빵 틀 비유로 10분 만에 완벽히 정복합니다!"**

---

## 📌 1. 왜 `class` (클래스)를 써야 하나요?

자바스크립트를 1개월 배운 입문자는 주로 `function`과 변수만으로 코드를 작성해 왔습니다. 하지만 화면 요소(컴포넌트)가 10개, 20개로 늘어나면 다음과 같은 문제에 부딪힙니다:

### ❌ 함수형 방식의 한계 (스파게티 코드)
```javascript
// 카운터 1번 데이터와 함수
let count1 = 0;
function render1() { document.querySelector('#app1').innerText = count1; }

// 카운터 2번 데이터와 함수 (코드를 그대로 또 복사/붙여넣기 해야 함!)
let count2 = 0;
function render2() { document.querySelector('#app2').innerText = count2; }
```
- 화면 조각을 만들 때마다 변수명(`count1`, `count2`)과 함수명(`render1`, `render2`)을 일일이 늘려야 합니다.
- 데이터와 화면을 그리는 기능이 전역 공간에 흩어져 있어 관리가 불가능해집니다.

---

## ⭕ 2. `class` (클래스) = "붕어빵 틀" 의 기적

`class`는 **데이터와 그 데이터를 그리는 전용 기능을 하나로 예쁘게 포장하는 상자(캡슐화)**이자 **도면(붕어빵 틀)**입니다.

```javascript
// 1. 붕어빵 틀(Class) 딱 1번만 정의하기!
class Counter {
  constructor($target) {
    this.$target = $target; // 나(this)의 화면 장소 저장
    this.count = 0;         // 나(this)의 카운트 데이터 저장
    this.render();          // 내 렌더링 기능 실행!
  }

  render() {
    this.$target.innerHTML = `<h3>카운트: ${this.count}</h3>`;
  }
}

// 2. 원하는 장소에 1줄로 붕어빵(인스턴스) 찍어내기!
new Counter(document.querySelector('#app1'));
new Counter(document.querySelector('#app2'));
new Counter(document.querySelector('#app3'));
```

---

## 🔑 3. ES6 Class 5대 필수 키워드 해부

| 키워드 | 쉽게 비유한 설명 | 실제 코드 역할 |
| :--- | :--- | :--- |
| **`class`** | **붕어빵 틀** | 클래스 상자 정의 (`class 클래스명 { ... }`) |
| **`new`** | **붕어빵 찍어내기** | 클래스 도면으로 실제 메모리에 인스턴스 생성 |
| **`constructor()`** | **재료 반죽 투입구 (생성자)** | `new` 실행 시 **1등으로 가장 먼저 자동 구동**되어 초기 데이터 세팅 |
| **`this`** | **지금 찍히는 내 붕어빵 자신** | 클래스 내부에서 내 데이터와 메서드에 접근할 때 사용 (`this.count`) |
| **`extends`** | **조상 붕어빵 틀 상속받기** | 부모 클래스의 모든 기능을 자식이 그대로 물려받음 (`class Child extends Parent`) |

---

## 🧬 4. `extends` (클래스 상속) = "부모 붕어빵 틀 물려받기"

Step 02에서 다룰 **`class Counter extends Component`** 의 핵심 원리입니다.

```javascript
// 1. 공통 부모 클래스 (Component)
class ParentCard {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.$target.innerHTML = `<div class="card">기본 카드</div>`;
  }
}

// 2. 부모를 상속받은 자식 클래스 (ChildCard)
class ChildCard extends ParentCard {
  // 부모의 constructor와 render를 그대로 물려받음!
  // 필요 시 render()만 내 마음대로 재정의(오버라이딩) 가능!
  render() {
    this.$target.innerHTML = `<div class="card">🎉 자식 클래스가 커스텀한 카드!</div>`;
  }
}
```

---

## ⚠️ 5. 초보자가 가장 자주 하는 3대 실수

1. **`new` 키워드 빼먹기**: `Counter($app)` (❌ 에러!) ➔ `new Counter($app)` (⭕ 정답!)
2. **`this` 생략하기**: `count = 0;` (❌) ➔ `this.count = 0;` (⭕ 정답!)
3. **이벤트 핸들러에서 `this` 잃어버리기**:
   - `function(e) { console.log(this); }` ➔ `this`가 HTML 버튼으로 바뀜 (❌)
   - `(e) => { console.log(this); }` ➔ **화살표 함수 사용 시 클래스 인스턴스 `this` 보존! (⭕ 정답!)**

---

이제 **Step 00 Level 4**와 **Step 02**로 이동하여 멋진 컴포넌트 클래스를 직접 완성해 보세요! 🚀
