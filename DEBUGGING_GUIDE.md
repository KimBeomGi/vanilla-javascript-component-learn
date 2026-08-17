# 🐞 크롬 개발자 도구 디버깅 & 콘솔 에러 문제 해결 사전 (`DEBUGGING_GUIDE.md`)

> **"자바스크립트 개발 중 콘솔창에 붉은색 에러가 떴나요? 99%는 이 문제 해결 사전에 수록된 답변으로 10초 만에 고칠 수 있습니다."**

---

## 🚨 자주 발생하는 8대 콘솔 에러 매트릭스

### 1. `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`
- **원인**: `document.querySelector(...)` 로 가져온 HTML 요소가 실제 존재하지 않는데 `addEventListener`를 걸었기 때문입니다.
- **해결책**:
  1. 선택자 이름(클래스명 `#`, `.`) 오타가 없는지 확인하세요.
  2. HTML DOM이 완전히 만들어진 뒤(`mounted()` 내부나 `type="module"`) 스크립트를 실행하세요.

---

### 2. `Uncaught SyntaxError: Cannot use import statement outside a module`
- **원인**: HTML의 `<script>` 태그에 `type="module"` 속성을 붙이지 않고 `import`를 사용했기 때문입니다.
- **해결책**:
  ```html
  <!-- ⭕ 올바른 코드 -->
  <script type="module" src="./src/main.js"></script>
  ```

---

### 3. `Access to script at '...' from origin 'null' has been blocked by CORS policy`
- **원인**: HTML 파일을 웹 서버 없이 그냥 더블클릭해서 파일 경로(`file://...`)로 열었기 때문입니다.
- **해결책**: **[SERVER_GUIDE.md](SERVER_GUIDE.md)**를 참고하여 VS Code `Live Server`나 `npx serve .` 로 웹 서버 주소(`http://localhost:5500`)에서 실행하세요.

---

### 4. `Uncaught RangeError: Maximum call stack size exceeded` (무한 루프)
- **원인**: `render()` 함수 안에서 `setState()`를 또 다시 호출하여 렌더링 ➔ `setState` ➔ 렌더링 ➔ `setState` 무한 루프에 빠진 경우입니다.
- **해결책**: `render()` 나 `template()` 안에서는 절대로 `setState()`를 호출하면 안 됩니다. 오직 클릭/입력 등의 **이벤트 핸들러 콜백 내부**에서만 `setState()`를 부르세요!

---

### 5. `Uncaught TypeError: Cannot read properties of undefined (reading 'setState')`
- **원인**: 이벤트 핸들러 콜백 함수에서 `this` 스코프 바인딩이 깨져 `this`가 컴포넌트 인스턴스를 가리키지 않는 경우입니다.
- **해결책**: 일반 `function()` 대신 화살표 함수 `() => { ... }`를 사용하거나, `this.method.bind(this)`로 `this`를 고정하세요.

---

### 6. `Input 태그에 글자를 칠 때마다 포커스(Focus)가 자꾸 풀려요!`
- **원인**: `input` 이벤트가 일어날 때마다 `this.render()`가 통째로 실행되면서 기존 `<input>` DOM이 삭제되고 새 `<input>` DOM으로 덮어씌워지기 때문입니다.
- **해결책**: Step 07 최적화 마당의 **DOM Diffing 알고리즘**을 적용하거나, 이벤트 위임 및 `virtualNode` 비교 갱신을 사용하세요.

---

## 🛠️ 꿀팁: 크롬 개발자 도구 디버깅 3종 세트

1. **`console.log('현재 state:', this.state);`**: 상태 변수 확인하기
2. **`debugger;` 코드 삽입**: 스크립트 실행을 그 자리에서 멈추고 변수 값을 한 줄씩 추적하기
3. **Network 탭**: fetch 요청 시 서버로 보낸 데이터와 받기를 확인하기
