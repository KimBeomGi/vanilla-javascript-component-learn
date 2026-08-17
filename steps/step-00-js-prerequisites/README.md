# Step 00: [왕초보 디딤돌] `querySelector`만 알아도 시작하는 자바스크립트 3단계 사다리

> **"HTML 태그 쓸 줄 알고 `document.querySelector('.class')`만 겨우 아시나요? 환영합니다! 여기서부터 시작하시면 완벽합니다."**

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

초보자분들은 아래 순서대로 파일에 들어가서 `// TODO:` 빈칸을 채워나가시면 됩니다!

1. 1️⃣ **`exercise/level-1-dom.html`**: `.innerText`와 `.innerHTML`로 화면 글자 바꾸기부터 시작!
2. 2️⃣ **`exercise/level-2-template.html`**: 백틱(`` ` ``) 기호로 `user` 정보가 담긴 HTML 카드 조립!
3. 3️⃣ **`exercise/level-3-module.html`**: `type="module"` 환경에서 `class` 인스턴스 마운트 체험!

---

## 🎯 학습 목표

1. `document.querySelector`를 사용하여 DOM 요소를 탐색하고, `.innerText`와 `.innerHTML`의 결정적 차이를 이해합니다.
2. 백틱(`` ` ``) 기호와 `${변수}` 템플릿 리터럴을 활용하여 자바스크립트로 동적 HTML 조각을 조립합니다.
3. ES6 모듈 시스템(`import`/`export`)과 `class`의 기본 개념을 체득하여 컴포넌트 아키텍처에 들어갈 준비를 마칩니다.

---

## 💡 1분 만에 이해하는 왕초보 핵심 3계명

### 1계명: `.innerText` vs `.innerHTML`
- `element.innerText = "<b>안녕</b>"` ➔ 글자 그대로 `<b>안녕</b>`이 출력됩니다.
- `element.innerHTML = "<b>안녕</b>"` ➔ HTML 태그가 해석되어 **안녕** (굵은 글씨)으로 출력됩니다.

### 2계명: 백틱(`` ` ``)과 템플릿 리터럴
- 키보드 숫자 1 왼쪽의 물결(`~`) 자리에 있는 백틱(`` ` ``) 기호를 쓰면, 문자열 사이에 변수를 넣을 수 있습니다.
```javascript
const user = { name: '홍길동', age: 20 };
const html = `<h2>이름: ${user.name} (${user.age}세)</h2>`;
```

### 3계명: ES6 모듈 시스템 (`import`와 `export`)
- HTML에서 JS를 불러올 때 `<script type="module" src="./main.js"></script>` 속성을 부여해야 파일 간 `import/export`가 작동합니다.
