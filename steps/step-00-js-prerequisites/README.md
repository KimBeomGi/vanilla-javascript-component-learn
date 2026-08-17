# Step 00: [왕초보 디딤돌] `querySelector`만 알아도 시작하는 자바스크립트 4단계 사다리

> **"자바스크립트 기초 문법부터 실무 핵심 문법까지, 다음 단계로 나아가기 위한 기초 체력을 기릅니다!"**

---

## 🔗 [누적 연결] 왜 이 디딤돌 단계가 필요한가요?

- **현재 위치**: 자바스크립트 기초를 막 배우기 시작한 단계입니다.
- **다음 Step 01과의 연결고리**: 다음 **Step 01**에서는 화면에 글자를 하나 바꿀 때 마다 일일이 조작하지 않고 `state`라는 상자에 데이터를 모아 두는 **선언적 렌더링**을 배우게 됩니다.
- **Step 00에서 미리 다지는 무기**:
  1. HTML 태그를 선택하는 `document.querySelector`
  2. 태그 조립을 쉽게 해주는 백틱(`` ` ``) 템플릿 리터럴
  3. 이벤트 핸들러에서 `this` 스코프를 안전하게 지켜주는 **화살표 함수 `() => {}`**
  4. 컴포넌트 붕어빵 틀의 기반이 되는 ES6 **`class` 및 모듈(`type="module"`)**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. `document.querySelector`로 HTML 요소를 찾고, `.innerText`와 `.innerHTML`의 결정적 차이 및 **XSS 보안 위험성**을 배웁니다.
2. 백틱(`` ` ``) 기호와 `${변수}` 템플릿 리터럴로 HTML 카드 조각을 조립하는 법을 배웁니다.
3. **함수 선언식**, **함수 표현식**, **화살표 함수(`() => {}`)**의 차이점과 **`this` 바인딩 3대 법칙**을 배웁니다.
4. ES6 모듈 시스템(`type="module"`)과 `class`의 기본 개념을 습득합니다.

---

## 📋 1-2-3-4 실습 순서 (무엇부터 하나요?)

1. **`exercise/level-1-dom.html`**: `.innerText`와 `.innerHTML` 주석 풀고 화면 글자 바꿔보기
2. **`exercise/level-2-template.html`**: 백틱(`` ` ``) 기호로 `user` 정보 카드 조립하기
3. **`exercise/level-3-this-functions.html`**: 함수 3형제 비교 및 `function` vs 화살표 함수 `() => {}` 클릭 시 `this` 차이 확인하기
4. **`exercise/level-4-module.html`**: `UserProfile` 클래스와 `CounterClass` 클래스를 내 손으로 직접 구현해 보는 ES6 Class 집중 훈련

---

## ✍️ TODO 1-2-3-4 실습 가이드 (어떻게 작성해야 하나요?)

### 1. `level-1-dom.html` TODO 가이드
- **`TODO 1`**: `querySelector`로 `#target-title`과 `#target-content` 찾기
- **`TODO 2`**: `innerText`로 단순 글자 변경하기 (`🎉 글자가 성공적으로 바뀌었습니다!`)
- **`TODO 3`**: `innerHTML`로 태그가 포함된 글자 변경하기 (`<strong>HTML 태그가 적용된 굵은 글자입니다!</strong>`)

### 2. `level-2-template.html` TODO 가이드
- **`TODO 1`**: 백틱(`` ` ``) 기호를 사용하여 `${user.name}`, `${user.age}`, `${user.job}` 변수가 합쳐진 HTML 카드 템플릿 대입하기

### 3. `level-3-this-functions.html` TODO 가이드
- **`TODO 1`**: 함수 선언식, 표현식, 화살표 함수에서 `a + b` 반환값 더하기 작성하기
- **`TODO 2`**: 일반 `function(e)` 클릭 시 `this`가 클릭된 `<button>` 태그 자신임을 콘솔과 화면에 출력하기
- **`TODO 3`**: 화살표 함수 `(e) => {}` 클릭 시 `this`가 상위 스코프(Strict Module `undefined`)를 유지함을 콘솔과 화면에 출력하기

### 4. `level-4-module.html` TODO 가이드 (⭐️⭐️⭐️ 클래스 집중 실습)
- **`TODO 1`**: `class UserProfile { constructor($target, user) { ... } render() { ... } }` 클래스를 직접 손으로 작성하기
- **`TODO 2`**: `class CounterClass { constructor($target) { ... } render() { ... } }` 클래스를 작성하고 `#btn-inc` 클릭 이벤트 바인딩하기
- **`TODO 3` & `TODO 4`**: `new UserProfile(...)` 및 `new CounterClass(...)` 인스턴스 마운트하기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### Level 1: DOM 탐색과 `.innerText` vs `.innerHTML`

#### 📌 주 설명
- `document.querySelector('#app')`: HTML에서 `id="app"`인 요소를 찾아 자바스크립트 변수에 대입합니다.
- `.innerText`: 태그를 무시하고 오직 글자(텍스트) 그대로 출력합니다.
- `.innerHTML`: 문자열 안의 `<button>`, `<b>` 같은 HTML 태그를 해석해서 실제 태그 형태로 그려줍니다.

#### 💡 Q. "컴포넌트를 만들 땐 `innerHTML`을 써야 하는 것 아닌가요?"
- **네, 100% 맞습니다!** 컴포넌트는 `<button>`, `<div>` 같은 HTML 구조 태그를 그려내야 하므로 **`this.$target.innerHTML = this.template()`을 필수로 사용**합니다.
- 다만, 사용자가 입력한 순수 텍스트(이름, 댓글 등)를 템플릿 안`${userInput}`에 직접 합칠 때는 XSS 해킹 방지를 위해 `escapeHTML()` 이스케이프 함수를 거치거나 주의해야 합니다.

#### 💡 보조 설명: ❌ XSS 해킹 위험 예시 vs ⭕ 이스케이프 및 올바른 사용 예시
```javascript
// 사용자가 입력한 악성 스크립트 텍스트
const userInput = "<script>alert('해킹당함!');</script>";

// ❌ 위험한 예시 (사용자 입력을 검증 없이 그대로 innerHTML 템플릿에 합칠 때)
$app.innerHTML = `<div>${userInput}</div>`; // 해킹 스크립트가 실행될 위험이 있음!

// ⭕ 올바른 예시 1: 컴포넌트는 innerHTML로 태그를 그리되, 사용자 텍스트는 escapeHTML() 치환!
function escapeHTML(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
$app.innerHTML = `<div>${escapeHTML(userInput)}</div>`; // 안전하게 태그로 해석되지 않고 출력!

// ⭕ 올바른 예시 2: 단순 텍스트 전용 요소의 글자만 바꿀 때는 innerText 사용!
document.querySelector('#user-name').innerText = userInput;
```

---

### Level 2: 백틱(`` ` ``)과 템플릿 리터럴

#### 📌 주 설명
- 백틱(`` ` ``) 기호를 사용하면 줄바꿈과 자바스크립트 변수 `${변수}` 대입이 매우 편리해집니다.

#### 💡 보조 설명: ❌ 따옴표 `+` 연산자 vs ⭕ 백틱 비교 예시
```javascript
const name = "철수";
const age = 10;

// ❌ 옛날 방식 (더하기 연산자와 따옴표 지옥 - 줄바꿈도 안 됨)
const htmlOld = '<div class="card">' + '<h2>' + name + '님</h2>' + '<p>' + age + '살</p>' + '</div>';

// ⭕ 현대 방식 (백틱 기호로 줄바꿈과 변수 대입을 깔끔하게 처리!)
const htmlModern = `
  <div class="card">
    <h2>${name}님</h2>
    <p>${age}살</p>
  </div>
`;
```

---

### Level 3: 함수 3형제 & `this` 정체 완전 타파 (⭐️⭐️⭐️)

#### 📌 주 설명
자바스크립트에는 함수를 만드는 3가지 방법이 있으며, `this` 키워드는 **"나를 실행하는 주체/배경"**을 의미합니다.

#### 💡 보조 설명: `this` 바인딩 3대 법칙 및 이벤트 비교 예시
```javascript
// ❌ 이벤트 핸들러에서 일반 function을 썼을 때 (this가 버튼 태그로 바뀌어 컴포넌트 메서드 호출 불가!)
$button.addEventListener('click', function(e) {
  console.log(this); // ➔ <button> 태그 자체가 됨!
  // this.setState({ ... }); // 💥 에러 발생! (button 태그에는 setState 함수가 없으므로!)
});

// ⭕ 이벤트 핸들러에서 화살표 함수 () => {} 를 썼을 때 (this가 태어난 상위 컴포넌트를 보존!)
$button.addEventListener('click', (e) => {
  console.log(this); // ➔ Component 인스턴스 자체가 유지됨!
  this.setState({ count: 1 }); // 핑퐁! 안전하게 컴포넌트 메서드 호출 성공!
});
```

---

### Level 4: 모듈(`type="module"`)과 `class` 기초 (⭐️⭐️⭐️)

#### 📌 주 설명: 붕어빵 틀(`class`)로 찍어내는 컴포넌트 세상
자바스크립트를 막 1개월 배운 입문자에게 `class`는 가장 생소한 무서운 단어일 수 있습니다. 쉽게 비유해 봅시다!

1. **`class` (붕어빵 틀)**: 붕어빵을 구워내는 설계도이자 틀입니다. (붕어빵을 어떻게 만들지 정해둠)
2. **`new 클래스명()` (붕어빵 찍어내기)**: 붕어빵 틀에서 실제 먹을 수 있는 붕어빵(**인스턴스**)을 뚝딱 만들어냅니다.
3. **`constructor()` (생성자 / 재료 반죽)**: `new`로 붕어빵을 찍어내는 순간 **가장 먼저 1등으로 자동으로 호출**되어 초기 재료(`$target`, `name`)를 세팅합니다.
4. **`this` (지금 찍어내는 내 붕어빵 자신)**: `this.name = name` ➔ "지금 만든 나(`this`)의 이름에 넘어온 `name` 재료를 저장한다!"
5. **`render()` (메서드 / 붕어빵 인쇄 기능)**: 클래스 상자 내부에 만들어둔 전용 함수(기능)입니다.

#### 💡 보조 설명: ❌ 일일이 복사/붙여넣기 vs ⭕ `class`로 1줄 깔끔 마운트 비교

```javascript
// ❌ 옛날 방식: 비슷한 UI 화면을 만들 때마다 30줄씩 복사/붙여넣기 반복
const $app1 = document.querySelector('#app1');
$app1.innerHTML = '<div class="box"><h2>안녕하세요, 홍길동님!</h2></div>';

const $app2 = document.querySelector('#app2');
$app2.innerHTML = '<div class="box"><h2>안녕하세요, 김철수님!</h2></div>';


// ⭕ 현대 `class` 방식: 붕어빵 틀(Class)을 딱 1번 만들어두고 1줄로 찍어내기!

// 1. 붕어빵 틀(Class) 정의하기
class Greeting {
  constructor($target, name) {
    this.$target = $target; // 나(this)의 화면 대상 저장
    this.name = name;       // 나(this)의 데이터 저장
    this.render();          // 내 렌더링 기능 실행!
  }

  render() {
    this.$target.innerHTML = `
      <div class="box">
        <h2>안녕하세요, ${this.name}님!</h2>
      </div>
    `;
  }
}

// 2. new 키워드로 원하는 곳에 1줄로 뚝딱 찍어내기! (Step 02 컴포넌트의 모태가 됩니다!)
new Greeting(document.querySelector('#app1'), '홍길동');
new Greeting(document.querySelector('#app2'), '김철수');
```

---

## 🔑 자가 점검 체크리스트
- [ ] `innerText`와 `innerHTML`의 차이점 및 보안 주의사항을 이해하셨나요?
- [ ] 일반 `function`과 화살표 함수 `() => {}` 사용 시 `this` 가 어떻게 달라지는지 확인하셨나요?
- [ ] `class`가 붕어빵 틀이고 `constructor`와 `this`가 무슨 역할을 하는지 손으로 타이핑해 보셨나요?
- [ ] 막히면 `solution/` 폴더 파일과 비교해 보세요!
