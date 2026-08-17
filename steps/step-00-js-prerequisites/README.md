# Step 00: [왕초보 디딤돌] `querySelector`만 알아도 시작하는 자바스크립트 4단계 사다리

> **"자바스크립트 기초 문법부터 실무에서 매일 쓰는 핵심 문법까지 보조 설명과 비교 코드 예시로 완벽히 정복합니다!"**

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
4. **`exercise/level-4-module.html`**: `type="module"` 환경에서 `class` 인스턴스 마운트 체험하기

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

### 2️⃣ Level 2: 백틱(`` ` ``)과 템플릿 리터럴

#### 📌 주 설명
- 키보드 숫자 1 왼쪽의 물결(`~`) 자리에 있는 백틱(`` ` ``) 기호를 사용하면 줄바꿈과 자바스크립트 변수 `${변수}` 대입이 매우 편리해집니다.

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

### 3️⃣ Level 3: 함수 3형제 & `this` 정체 완전 타파 (⭐️⭐️⭐️)

#### 📌 주 설명
자바스크립트에는 함수를 만드는 3가지 방법이 있으며, `this` 키워드는 **"나를 실행하는 주체/배경"**을 의미합니다.

#### 💡 보조 설명: 함수 3가지 작성 방식 코드 비교
```javascript
// 1. 함수 선언식 (Function Declaration) - 코드 어디서든 호출 가능(호이스팅)
function add1(a, b) { return a + b; }

// 2. 함수 표현식 (Function Expression) - 변수에 함수를 값으로 저장
const add2 = function(a, b) { return a + b; };

// 3. 화살표 함수 (Arrow Function) - ES6 백틱 조립과 가장 궁합이 좋고 짧은 문법!
const add3 = (a, b) => a + b;
```

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

### 4️⃣ Level 4: 모듈(`type="module"`)과 `class` 기초

#### 📌 주 설명
- HTML 스크립트 태그에 `<script type="module" src="./app.js"></script>` 속성을 부여해야 파일 간 `import` / `export` 모듈 시스템이 동작합니다.
- `class`는 컴포넌트의 붕어빵 틀(설계도)이고, `new` 키워드로 실제 화면에 부착할 붕어빵(인스턴스)을 찍어냅니다.

#### 💡 보조 설명: 클래스 인스턴스 생성 예시
```javascript
class Counter {
  constructor($target) {
    this.$target = $target; // 부착 위치 기억
    this.render();
  }
  render() {
    this.$target.innerHTML = `<h3>카운터 컴포넌트 마운트 완료!</h3>`;
  }
}

// new 키워드로 붕어빵 찍어내기!
new Counter(document.querySelector('#app'));
```

---

## 🔑 자가 점검 체크리스트
- [ ] `innerText`와 `innerHTML`의 차이점 및 보안 주의사항을 이해하셨나요?
- [ ] 일반 `function`과 화살표 함수 `() => {}` 사용 시 `this` 가 어떻게 달라지는지 확인하셨나요?
- [ ] 막히면 `solution/` 폴더 파일과 비교해 보세요!
