# Step 00: [왕초보 디딤돌] `querySelector`만 알아도 시작하는 자바스크립트 3단계 사다리

> **"HTML 태그 쓸 줄 알고 `document.querySelector('.class')`만 겨우 아시나요? 환영합니다! 여기서부터 차근차근 시작하시면 완벽합니다."**

---

## 🎯 학습 목표

1. `document.querySelector`로 HTML 요소를 탐색하고, `.innerText`와 `.innerHTML`의 결정적 차이 및 **보안(XSS) 주의점**을 이해합니다.
2. 백틱(`` ` ``) 기호와 `${변수}` 템플릿 리터럴을 활용하여 자바스크립트로 동적 HTML 조각을 조립합니다.
3. ES6 모듈 시스템(`import`/`export`)과 `class`의 기본 개념을 체득하여 컴포넌트 아키텍처에 들어갈 준비를 마칩니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

초보자분들은 아래 순서대로 파일에 들어가서 `// TODO:` 빈칸을 채워나가시면 됩니다!

1. 1️⃣ **`exercise/level-1-dom.html`**: `.innerText`와 `.innerHTML`로 화면 글자 바꾸기 실습!
2. 2️⃣ **`exercise/level-2-template.html`**: 백틱(`` ` ``) 기호로 `user` 정보가 담긴 HTML 카드 조립!
3. 3️⃣ **`exercise/level-3-module.html`**: `type="module"` 환경에서 `class` 인스턴스 마운트 체험!

---

## 💡 개념 상세 설명 및 코드 가이드

### 1️⃣ Level 1: DOM 탐색과 `.innerText` vs `.innerHTML`
- `document.querySelector('#id')`: 화면의 HTML 요소를 탐색하여 변수에 담습니다.
- `element.innerText = "<b>안녕</b>"` ➔ 글자 그대로 `<b>안녕</b>` 텍스트가 출력됩니다.
- `element.innerHTML = "<b>안녕</b>"` ➔ HTML 태그가 해석되어 **안녕** (굵은 글씨)으로 출력됩니다.
  - ⚠️ **실무 보안 팁**: 사용자 입력을 그대로 `.innerHTML`에 넣으면 악성 스크립트가 실행되는 **XSS 공격** 위험이 있습니다. 안전한 텍스트는 항상 `.innerText`를 쓰는 것이 정석입니다!

### 2️⃣ Level 2: 백틱(`` ` ``)과 템플릿 리터럴
- 키보드 숫자 1 왼쪽의 물결(`~`) 자리에 있는 백틱(`` ` ``) 기호를 쓰면, 문자열 줄바꿈과 변수 삽입(`${변수}`)을 깔끔하게 처리할 수 있습니다.
```javascript
const user = { name: '홍길동', age: 20, job: '초보 개발자' };
const template = `
  <div class="user-card">
    <h2>이름: ${user.name}</h2>
    <p>나이: ${user.age}세</p>
    <p>직업: ${user.job}</p>
  </div>
`;
$container.innerHTML = template;
```

### 3️⃣ Level 3: ES6 모듈 시스템과 `class` 기초
- HTML에서 JS를 불러올 때 `<script type="module" src="./main.js"></script>` 속성을 부여해야 파일 간 `import/export`가 동작합니다.
- `class`는 컴포넌트를 만드는 **붕어빵 틀(설계도)**이며, `new` 키워드로 실제 화면에 부착할 **인스턴스**를 생성합니다.

---

## 🔑 자가 점검 체크리스트
- [ ] `innerText`와 `innerHTML`의 차이점을 설명할 수 있나요?
- [ ] 백틱 기호 안에서 `${변수}`로 데이터 값을 넣어보셨나요?
- [ ] 막히면 `solution/` 폴더의 완성본 파일과 내 코드를 비교해 보세요!
