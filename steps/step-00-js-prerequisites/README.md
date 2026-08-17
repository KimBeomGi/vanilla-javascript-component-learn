# Step 00: [왕초보 디딤돌] `querySelector`만 알아도 시작하는 자바스크립트 3단계 사다리

> **"HTML 태그 쓸 줄 알고 `document.querySelector('.class')`만 겨우 아시나요? 환영합니다! 여기서부터 시작하시면 됩니다."**

---

## 🐣 왕초보를 위한 3단계 사다리 코스

| 레벨 | 파일명 | 배울 핵심 내용 |
| :---: | :--- | :--- |
| **Level 1** | `level-1-dom.html` | `querySelector`로 요소를 찾고, `.innerText`와 `.innerHTML`로 화면 글자 바꾸기 |
| **Level 2** | `level-2-template.html` | 백틱(`` ` ``) 기호와 `${변수}`를 사용해 자바스크립트로 HTML 조각 만들기 |
| **Level 3** | `level-3-module.html` | `type="module"`로 JS 파일 나누기 (`import`/`export`) 및 `class` 맛보기 |

---

## 💡 1분 만에 이해하는 왕초보 핵심 3계명

### 1계명: `.innerText` vs `.innerHTML`
- `element.innerText = "안녕"` ➔ 글자 그대로 "안녕"이 들어갑니다.
- `element.innerHTML = "<h1>안녕</h1>"` ➔ HTML 태그가 해석되어 큰 제목으로 들어갑니다.

### 2계명: 백틱(`` ` ``)과 템플릿 리터럴
- 키보드 숫자 1 왼쪽의 물결(`~`) 자리에 있는 백틱(`` ` ``) 기호를 쓰면, 문자열 사이에 변수를 넣을 수 있습니다.
```javascript
const name = "철수";
console.log(`안녕하세요, ${name}님!`); // 안녕하세요, 철수님!
```

### 3계명: 파일 나누기 (`import`와 `export`)
- 기존: HTML 하나에 코드를 수백 줄 길게 작성했습니다.
- 현대 JS: 기능별로 파일을 나누고 필요한 것만 가져옵니다.
```html
<!-- HTML에서 JS를 부를 때 type="module" 필수! -->
<script type="module" src="./main.js"></script>
```

---

## 🏃 시작하기
`exercise/level-1-dom.html` 파일부터 차례대로 브라우저로 열어 실행해 보세요!
