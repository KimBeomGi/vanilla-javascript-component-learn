# Step 00: [왕초보 디딤돌] `querySelector`만 알아도 시작하는 자바스크립트 3단계 사다리

> **"나는 자바스크립트 초보다! 비전공자다! 빡대가리다! 하시는 분도 100% 이해하도록 친절하게 하나하나 설명합니다!"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. `document.querySelector`로 HTML 태그를 잡아서, `.innerText`와 `.innerHTML`로 화면 글자를 바꾸는 방법을 배웁니다.
2. 백틱(`` ` ``) 기호와 `${변수}` 템플릿 리터럴로 HTML 조각을 조립하는 법을 배웁니다.
3. 자바스크립트 `class`가 붕어빵 틀이고 `new`가 붕어빵을 찍어내는 것임을 배웁니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/level-1-dom.html`** 열기: `.innerText`와 `.innerHTML` 주석 풀고 화면 글자 바꿔보기
2. 2️⃣ **`exercise/level-2-template.html`** 열기: 백틱(`` ` ``) 기호로 `user` 정보 카드 조립하기
3. 3️⃣ **`exercise/level-3-module.html`** 열기: `class` 인스턴스 마운트 체험하기

---

## 💡 왕초보 눈높이 개념 해설

### 1️⃣ Level 1: DOM 탐색과 `.innerText` vs `.innerHTML`
- `const $app = document.querySelector('#app');`
  - 의미: HTML에서 `id="app"`인 요소를 찾아 `$app`이라는 상자에 담아둡니다.
- `$app.innerText = '<b>안녕</b>';`
  - 결과: 화면에 글자 그대로 `<b>안녕</b>` 이 찍힙니다. (텍스트로 취급)
- `$app.innerHTML = '<b>안녕</b>';`
  - 결과: 브라우저가 `<b>` 태그를 해석해서 **안녕** (굵은 글씨)으로 그려줍니다.
  - ⚠️ **보안 주의**: 사용자 입력을 그대로 `.innerHTML`에 넣으면 해커가 악성 스크립트를 실행할 수 있어(XSS 공격), 일반 글자는 항상 `.innerText`를 쓰는 것이 안전합니다.

### 2️⃣ Level 2: 백틱(`` ` ``)과 `${변수}` 템플릿 리터럴
- 키보드 숫자 1 왼쪽의 물결(`~`) 자리에 있는 백틱(`` ` ``) 기호를 쓰면, 문자열 안에서 줄바꿈도 마음대로 하고 자바스크립트 변수 `${user.name}` 도 쏙 넣어 조립할 수 있습니다.

```javascript
const user = { name: "철수", age: 10 };
const html = `
  <div>
    <h2>${user.name} 어린이</h2>
    <p>나이: ${user.age}살</p>
  </div>
`;
$app.innerHTML = html;
```

### 3️⃣ Level 3: `class`와 `new` (붕어빵 틀 비유)
- `class Student { ... }`: 학생 정보를 만들어낼 붕어빵 틀(설계도)
- `const student1 = new Student('철수');`: 설계도로부터 실제 화면에 태어난 붕어빵(객체 인스턴스)

---

## 🔑 자가 점검 체크리스트
- [ ] `innerText`는 태그가 안 먹고, `innerHTML`은 태그가 먹는다는 것을 확인하셨나요?
- [ ] 백틱 기호 안에서 `${변수}`로 글자를 조립해보셨나요?
- [ ] 막히면 `solution/` 폴더 파일과 내 코드를 비교해 보세요!
