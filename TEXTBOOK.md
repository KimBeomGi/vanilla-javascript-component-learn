# 📖 [나도 가능!] 바닐라 자바스크립트 컴포넌트 완벽 독학 교과서 (입문부터 실전까지)

> **"웹 컴포넌트(Web Components) 아키텍처를 원리부터 표준 기술까지 마스터하는 지침서"**  
> 이 교과서는 HTML 태그와 `document.querySelector('.class')`만 겨우 아는 **왕초보**부터, 회사 실무 PHP/jQuery 레거시 프로젝트를 웹 컴포넌트로 이식하려는 실무자까지 완벽 지원하는 교과서입니다.

---

## 💡 이 코스를 이수하면 어떤 것을 만들 수 있나요?

이 자바스크립트 컴포넌트 아키텍처 과정을 마치면 **외부 라이브러리(React/Vue) 없이 바닐라 JS만으로** 다음과 같은 실무 프로젝트들을 제로부터 직접 제작할 수 있게 됩니다!

1. 🛒 **미니 이커머스 쇼핑몰 SPA**: 카테고리 필터링, 장바구니 수량 조절, 실시간 결제 금액 계산 및 LocalStorage 동기화
2. 📊 **실시간 데이터 대시보드**: 백엔드 비동기 API 통신, 검색/페이징, 로딩 스피너 및 유저 관리 대시보드
3. 💬 **동적 댓글 & 커뮤니티 위젯**: 기존 PHP / JSP / Spring 사이트에 새로고침 없이 부착하는 댓글 및 좋아요 위젯
4. 📝 **스마트 폼 & 회원가입 위저드**: 실시간 이메일/비밀번호 검증, 에러 메시지 제어 및 단계별(Multi-step) 폼
5. 🧩 **나만의 UI 컴포넌트 라이브러리**: 모달 팝업, 토스트 알림, 무한 스크롤, 다크 모드 테마 스위처

---

## 🐘 기존 PHP / jQuery 레거시 프로젝트에 JS 컴포넌트 이식하기
회사 프로젝트가 PHP나 jQuery로 되어 있나요? **[LEGACY_INTEGRATION_GUIDE.md](LEGACY_INTEGRATION_GUIDE.md)** 가이드를 정독해보세요!
- PHP 페이지의 특정 구역(`div#slot`)에 바닐라 JS 컴포넌트를 위젯처럼 부착하는 방법
- PHP `data-*` 속성으로 데이터 주고받기 및 새로고침 없는 반응형 UI 구축법 수록

---

## 🎨 바닐라 JS에서 React Icons처럼 `<LuX />` 사용하는 방법
- React Icons의 `<LuX size={24} />`처럼 아이콘 컴포넌트를 만드는 3가지 가이드: **[ICON_GUIDE.md](ICON_GUIDE.md)**
- 아이콘 모듈 함수 (`Icons.LuX({ size: 24 })`) 및 Custom Element 태그 (`<icon-x></icon-x>`) 구현법 수록!

---

## ⚡ React & Vue 사용자를 위한 1초 매핑 해설
React나 Vue를 이미 경험해 보셨나요? **[FRAMEWORK_COMPARISON.md](FRAMEWORK_COMPARISON.md)** 가이드를 읽어보세요!
- `useState()` / `ref()` ➔ 우리의 `setState()`
- `useEffect()` / `onMounted()` ➔ 우리의 `mounted()`
- Vue 3 Reactive ➔ 우리의 Proxy 기반 `Store.js`

---

## 🌐 [필수] 시작하기 전: 웹 서버(Live Server) 켜는 방법
자바스크립트 모듈(`import/export`)은 그냥 `.html` 파일을 더블클릭해서 열면 보안 에러가 발생합니다.  
Live Server 켜는 방법이 궁금하시다면 **[SERVER_GUIDE.md](SERVER_GUIDE.md)** 가이드를 읽어보세요!

---

## 📚 전체 학습 및 실무 응용 지침서 목록

- 🎨 **[Tailwind CSS 사용 가이드](TAILWIND_GUIDE.md)**: CDN 1줄로 컴포넌트 내 Tailwind 유틸리티 클래스 활용법
- 🏢 **[실무 디렉토리 & Git 커밋 컨벤션 가이드](WORKFLOW_GUIDE.md)**: 회사 프로젝트 폴더 구조, 깃 커밋 태그(`feat:`, `fix:`) 및 API 설정
- 🛡️ **[보안 & XSS 방어 가이드](SECURITY_GUIDE.md)**: `innerHTML` 해킹(XSS) 방지 및 `escapeHTML` 이스케이프
- ♿ **[웹 접근성 & unmount 클린업 가이드](A11Y_GUIDE.md)**: WAI-ARIA 스크린리더 및 메모리 누수 방지
- 🎠 **[중첩 컴포넌트 & slot 가이드](SLOT_COMPOUND_GUIDE.md)**: `<CarouselWrapper><CarouselTrack><CarouselItem/></CarouselTrack></CarouselWrapper>` 중첩 태그 구현법
- 🚀 **[무료 배포 & 어디서나 호환 가이드](DEPLOY_GUIDE.md)**: GitHub Pages / Netlify 1분 배포 및 브라우저/백엔드 호환성
- 🌐 **[웹 서버 구동 가이드](SERVER_GUIDE.md)**: Live Server 3분 만에 설치하고 켜는 방법
- 🧩 **[실무 4대 필수 UI 패턴집](UI_PATTERNS.md)**: 모달 팝업, 토스트 알림, 무한 스크롤, 다크 모드 컴포넌트 패턴
- 🐘 **[PHP & jQuery 레거시 프로젝트 컴포넌트 이식 가이드](LEGACY_INTEGRATION_GUIDE.md)**: PHP 페이지에 JS 컴포넌트 위젯 연결법
- ⚛️ **[React & Vue 비교 매핑 표](FRAMEWORK_COMPARISON.md)**: 프레임워크 사용자를 위한 1초 개념 변환표
- 🎨 **[React Icons 처럼 아이콘 컴포넌트 쓰기](ICON_GUIDE.md)**: `Icons.LuX()` 및 `<icon-x>` 사용법
- 📡 **[비동기 API & LocalStorage 동기화 가이드](API_GUIDE.md)**: fetch 로딩/에러 처리 및 로컬 저장소 동기화
- 📝 **[폼(Form) 검증 및 양방향 입력 처리 가이드](FORM_GUIDE.md)**: 실시간 입력 검증 및 버튼 제어
- 🐞 **[크롬 개발자 도구 디버깅 & 에러 해결 사전](DEBUGGING_GUIDE.md)**: 콘솔 8대 주요 에러 원인 및 10초 해결법

---

## 📌 [Chapter 00] 왕초보를 위한 3단계 사다리

### Level 1: `innerText` vs `innerHTML`
- `.innerText = '안녕'` ➔ 글자 그대로 "안녕" 출력
- `.innerHTML = '<b>안녕</b>'` ➔ 태그가 해석되어 **안녕** 굵은 글자 출력

### Level 2: 백틱(`` ` ``) 기호와 `${변수}`
- 키보드 숫자 1 왼쪽의 백틱 기호를 사용하면 HTML 긴 줄을 깔끔하게 조립할 수 있습니다.
```javascript
const name = "초보 코더";
const html = `<h2>안녕하세요, ${name}님!</h2>`;
```

### Level 3: `class`와 `this`
- `class`는 붕어빵 틀(컴포넌트 설계도)이고, `this`는 그 틀에서 찍어낸 붕어빵(실제 화면 요소)입니다.

---

## 💡 현업 개발자들이 매일 쓰는 4대 실무 꿀팁 (Pro-Tips)

### 꿀팁 1: 왜 DOM 변수명 앞에 `$`를 붙이나요? (`$app`, `$target`, `$btn`)
- jQuery 전용이 아닙니다! 현대 바닐라 JS 실무에서는 **"이 변수는 일반 숫자/문자가 아니라 HTML DOM 태그입니다!"**라는 뜻의 약속(Naming Convention)으로 `$input`, `$btn` 처럼 앞에 `$`를 붙입니다.
- 덕분에 코드를 읽을 때 0.1초 만에 HTML 태그임을 알아채고 `.innerHTML`이나 `.addEventListener`를 안전하게 부를 수 있습니다.

### 꿀팁 2: 템플릿 리터럴 백틱(`` ` ``) 조립 팁
- HTML이 길어질 때는 `+` 연산자 대신 백틱 기호를 쓰면 줄바꿈과 변수 삽입(`${state.name}`)을 깔끔하게 처리할 수 있습니다.

### 꿀팁 3: 안전한 접근 옵셔널 체이닝 (`?.`)
- `document.querySelector('#btn')?.addEventListener('click', ...)`
- 뒤에 `?.`를 붙이면 해당 요소를 찾지 못해 `null`이 리턴되더라도 에러가 발생하며 프로그램이 멈추는 것을 방지해 줍니다.

### 꿀팁 4: 불변성(Immutability)을 지키는 전개 연산자 (`...`)
- `this.state = { ...this.state, ...newState }`
- 기존 상태 객체를 직접 수정하지 않고 복사본을 만들어 대입하는 것은 리액트, 뷰, 바닐라 JS 공통 실무 1순위 규칙입니다.

---

## 📌 [Chapter 01] 명령형 vs 선언적 렌더링 (Why Component?)

### 💡 붕어빵 틀과 붕어빵 이야기 (비유로 이해하기)
- **명령형(Imperative) 방식**: 붕어빵에 팥을 더 넣고 싶을 때, 다 구워진 붕어빵 옆구리를 칼로 찢어서 팥을 일일이 밀어 넣는 방식입니다. (`document.querySelector`로 일일이 글자 바꾸기)
- **선언적(Declarative) 방식**: 붕어빵 틀(Template)을 하나 만들어 두고, 팥의 양(State)만 정해주면 붕어빵 틀이 알아서 맛있는 붕어빵을 구워내는 방식입니다. (`UI = f(State)`)

---

## 📌 [Chapter 02] `Component` 클래스 라이프사이클 완전 정복

### 🔄 컴포넌트 생애 주기 (Lifecycle Flow)

1. **`setup()`**: 컴포넌트 태어나자마자 초기 상태(`state`)를 세팅합니다.
2. **`template()`**: 상태를 기반으로 어떤 HTML을 그릴지 템플릿 문자열을 반환합니다.
3. **`render()`**: 템플릿을 실제 HTML DOM(`$target.innerHTML`)에 반영합니다.
4. **`mounted()`**: 화면에 렌더링이 완료된 직후 실행됩니다. (자식 컴포넌트 연결 시점)
5. **`setEvent()`**: 버튼 클릭 등 사용자의 반응을 수신할 이벤트를 연결합니다.
6. **`setState(newState)`**: 상태가 바뀌면 `render()`를 자동으로 다시 실행합니다.

```javascript
class Component {
  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
  }
  setup() {}
  mounted() {}
  template() { return ''; }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
```

---

## 📌 [Chapter 03] 이벤트 위임 (Event Delegation) 패턴

### 💡 버블링(Bubbling)을 이용한 한 번의 이벤트 연결
- 리스트 아이템이 1,000개일 때 개별 요소에 `addEventListener`를 걸면 메모리가 낭비되고 렌더링 시마다 이벤트를 다시 걸어야 합니다.
- **이벤트 위임**: 부모 요소(`$target`)에 이벤트를 생성자 시점에 **딱 1번만 바인딩**하고, `event.target.closest(selector)` 조건문으로 클릭한 요소를 구별합니다.

```javascript
addEvent(eventType, selector, callback) {
  this.$target.addEventListener(eventType, (event) => {
    if (!event.target.closest(selector)) return false;
    callback(event);
  });
}
```

---

## 📌 [Chapter 04] 컴포넌트 분화 & Props 단방향 데이터 흐름

### 🌲 단일 책임 원칙 (SRP)과 데이터 흐름
- 하나의 거대한 파일에 모든 코드를 넣지 않고 `App.js` ➔ `ItemInput.js`, `ItemList.js`, `ItemFilter.js` 로 모듈을 분화합니다.
- **Props Down (부모 ➔ 자식)**: 부모가 자식의 생성자에 데이터(`props`)를 전달합니다.
- **Events Up (자식 ➔ 부모)**: 자식이 사용자 입력을 받으면 부모가 전달해준 콜백 메서드(`addItem`)를 불러 부모의 `state`를 갱신합니다.

---

## 📌 [Chapter 05] 옵저버 패턴 & ES6 Proxy 기반 중앙 상태 관리 (Store)

### 🛒 Props Drilling 해결과 중앙 스토어
- 부모-자식 관계가 5단계 깊어지면 props 전달이 매우 고통스럽습니다.
- **`Proxy` 기반 옵저버 패턴**: 스토어의 `state`가 조회(`get`)될 때 컴포넌트의 `render()`를 구독(Subscribe)으로 자동 등록하고, 상태가 수정(`set`)될 때 모든 구독자에게 알림(Notify)을 보내 자동 재렌더링시킵니다.

```javascript
let currentObserver = null;
export const observe = fn => { currentObserver = fn; fn(); currentObserver = null; };
export const observable = obj => {
  const observers = new Set();
  return new Proxy(obj, {
    get(target, name) { if (currentObserver) observers.add(currentObserver); return target[name]; },
    set(target, name, value) { target[name] = value; observers.forEach(fn => fn()); return true; }
  });
};
```

---

## 📌 [Chapter 06] SPA (Single Page Application) 클라이언트 사이드 라우터

### 🧭 새로고침 없는 URL 라우팅 (`Router.js`)
- 브라우저가 깜빡이는 F5 새로고침 없이 URL 해시(`window.location.hash`) 변경을 감지합니다.
- 경로(`#/`, `#/cart`)에 따라 해당 페이지 컴포넌트(`ProductPage`, `CartPage`)를 `$target`에 동적으로 교체 부착합니다.

---

## 📌 [Chapter 07] 렌더링 최적화 & Virtual DOM Diffing

### ⚡ `requestAnimationFrame` 배치 & 최소 DOM 갱신 (`diff.js`)
- **Microtask Batching**: `setState()`가 100번 연속 연달아 불려도 `#renderScheduled` 플래그를 사용해 `requestAnimationFrame`으로 1프레임 모아 딱 1번만 렌더링합니다.
- **DOM Diffing**: 기존 DOM과 새로운 가상 DOM(Virtual DOM)을 비교하여 바뀐 텍스트/속성만 찾아 핀포인트로 갱신합니다.

---

## 📌 [Chapter 08] Web Components 함수 작성 규칙 및 `this` 스코프 완벽 해설

웹 컴포넌트(`class MyComponent extends HTMLElement`) 클래스 내부에서 함수를 다룰 때의 핵심 규칙입니다:

1. **브라우저 라이프사이클 함수**: `connectedCallback()`, `attributeChangedCallback()` 은 **클래스 메서드 문법**으로 작성합니다.
2. **이벤트 핸들러 콜백**: `handleClick = (e) => { ... }` 처럼 **화살표 함수 필드**로 작성해야 `this`가 컴포넌트 커스텀 태그를 가리킵니다.
3. **Shadow DOM 캡슐화**: `this.attachShadow({ mode: 'open' })` 내부에서는 인라인 `<button onclick="...">` 이 작동하지 않으므로, `shadowRoot.querySelector().addEventListener()`를 통해 안전하게 화살표 함수 핸들러를 연결합니다.

---

## ❓ 1분 자가 점검 퀴즈 (Checkup Quiz)

**Q1. `setState` 함수에서 왜 `this.state.count = 5;` 처럼 직접 수정하면 안 될까요?**  
- **정답**: 직접 수정 시 상태 변화 추적이 불가능하며, `render()` 함수가 호출되지 않아 화면이 갱신되지 않습니다. 반드시 불변성을 유지하는 새 객체를 대입(`this.state = { ...this.state, ...newState }`)하고 `render()`를 호출해야 합니다.

**Q2. 리스트 아이템이 1,000개일 때 모든 아이템에 클릭 이벤트를 걸면 발생하는 문제는 무엇이고, 어떻게 해결하나요?**  
- **정답**: 메모리 과부하 및 렌더링 시마다 이벤트 등록 비용이 발생합니다. 부모 요소 1개에만 이벤트를 걸고 `e.target.closest('li')`로 탐색하는 **이벤트 위임(Event Delegation)**으로 해결합니다.

---

## 🏆 [Chapter 09] 최종 완성 프로젝트 지침
모든 챕터를 이수한 후 `steps/step-09-final-project/` 로 이동하여 장바구니, 수량 조절, 카테고리 필터링, 라우팅이 통합된 **바닐라 JS 커머스 SPA 프로젝트**를 도전해 보세요!
