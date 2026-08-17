# Step 00: [왕초보 디딤돌] `querySelector`만 알아도 시작하는 자바스크립트 4단계 사다리

> **"자바스크립트 함수 3형제(선언식, 표현식, 화살표 함수)와 가장 헷갈리는 `this`의 정체까지 왕초보 눈높이로 완벽히 정복합니다!"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. `document.querySelector`로 HTML 요소를 찾고, `.innerText`와 `.innerHTML`의 결정적 차이 및 **XSS 보안 위험성**을 배웁니다.
2. 백틱(`` ` ``) 기호와 `${변수}` 템플릿 리터럴로 HTML 카드 조각을 조립하는 법을 배웁니다.
3. **함수 선언식**, **함수 표현식**, **화살표 함수(`() => {}`)**의 차이점과 **`this` 바인딩 3대 법칙**을 배웁니다.
4. ES6 모듈 시스템(`type="module"`)과 `class`의 기본 개념을 습득합니다.

---

## 📋 1-2-3-4 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/level-1-dom.html`**: `.innerText`와 `.innerHTML` 주석 풀고 화면 글자 바꿔보기
2. 2️⃣ **`exercise/level-2-template.html`**: 백틱(`` ` ``) 기호로 `user` 정보 카드 조립하기
3. 3️⃣ **`exercise/level-3-this-functions.html`**: 함수 3형제 비교 및 `function` vs 화살표 함수 `() => {}` 클릭 시 `this` 차이 확인하기
4. 4️⃣ **`exercise/level-4-module.html`**: `type="module"` 환경에서 `class` 인스턴스 마운트 체험하기

---

## 💡 왕초보 눈높이 개념 해설

### 1️⃣ Level 1: DOM 탐색과 `.innerText` vs `.innerHTML`
- `const $app = document.querySelector('#app');` ➔ HTML에서 `id="app"` 요소를 찾아 상자에 담아둡니다.
- `$app.innerText = '<b>안녕</b>';` ➔ 글자 그대로 `<b>안녕</b>` 이 찍힙니다.
- `$app.innerHTML = '<b>안녕</b>';` ➔ 브라우저가 `<b>` 태그를 해석해서 **안녕** (굵은 글씨)으로 그려줍니다.
  - ⚠️ **보안 주의**: 사용자 입력을 그대로 `.innerHTML`에 넣으면 해커가 악성 스크립트를 실행할 수 있어(XSS 공격), 일반 글자는 항상 `.innerText`를 쓰는 것이 안전합니다.

### 2️⃣ Level 2: 백틱(`` ` ``)과 `${변수}` 템플릿 리터럴
- 백틱(`` ` ``) 기호를 쓰면, 문자열 안에서 줄바꿈도 자유롭게 하고 자바스크립트 변수 `${user.name}` 도 쏙 넣어 조립할 수 있습니다.

### 3️⃣ Level 3: 함수 3형제 & `this` 바인딩 3대 법칙 (⭐️⭐️⭐️ 가장 중요!)

#### 🔹 함수 3가지 작성 방식 비교
```javascript
// 1. 함수 선언식 (Function Declaration) - 호이스팅(Hoisting) 가능
function add1(a, b) { return a + b; }

// 2. 함수 표현식 (Function Expression) - 변수에 함수 할당
const add2 = function(a, b) { return a + b; };

// 3. 화살표 함수 (Arrow Function) - ES6 백틱 템플릿과 찰떡궁합!
const add3 = (a, b) => a + b;
```

#### 🔹 `this` 의 정체와 3대 법칙
자바스크립트에서 `this`는 **"내가 실행되는 맥락(주인)"**을 가리키는 특별한 키워드입니다.

- **규칙 1 (일반 function)**: `function` 내부의 `this`는 **"누가 나를 클릭/호출했니?" (호출한 주체)**에 따라 동적으로 바뀌어 버립니다.
  - 버튼 클릭 이벤트에 `function(e) { console.log(this); }` 를 쓰면, `this`는 클릭된 `<button>` 태그가 됩니다!
- **규칙 2 (화살표 함수 `() => {}`)**: 화살표 함수 내부의 `this`는 **"내가 어디서 태어났니?" (태어난 고향/상위 스코프)**의 `this`를 평생 기억(Lexical `this`)합니다!
  - ⭐️ **왜 컴포넌트 개발할 때 화살표 함수를 쓸까요?**
    - 화살표 함수 `(e) => { this.setState(...) }` 를 쓰면, 버튼이 클릭되어도 `this`가 컴포넌트 클래스 자신으로 그대로 유지되어 에러가 나지 않기 때문입니다!
- **규칙 3 (`.bind(this)`)**: 일반 `function`의 `this`를 컴포넌트로 강제 고정하고 싶을 땐 `.bind(this)`를 붙여서 넘겨줍니다.

### 4️⃣ Level 4: 모듈(`type="module"`)과 `class`
- HTML에서 JS를 불러올 때 `<script type="module" src="./main.js"></script>` 로 지정해야 `import`와 `export` 모듈이 동작합니다.
- `class`는 컴포넌트의 **붕어빵 틀(설계도)**이며, `new` 키워드로 실제 화면에 부착할 **인스턴스**를 생성합니다.

---

## 🔑 자가 점검 체크리스트
- [ ] 일반 `function`과 화살표 함수 `() => {}` 의 `this` 차이를 이해하셨나요?
- [ ] 왜 이벤트 핸들러에서 화살표 함수를 쓰면 편리한지 이해하셨나요?
- [ ] 막히면 `solution/` 폴더 파일과 내 코드를 비교해 보세요!
