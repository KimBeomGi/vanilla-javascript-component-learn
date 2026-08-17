# 📖 [나도 가능!] 바닐라 자바스크립트 컴포넌트 완벽 독학 교과서 (왕초보 눈높이 마스터판)

> **"HTML 태그만 겨우 아시나요? '나는 컴포넌트가 뭔지 1도 모르겠다!' 하시는 분도 이 교과서 하나면 100% 이해할 수 있습니다!"**  
> 이 교과서는 자바스크립트를 시작한 지 1달 된 초보자도 막힘없이 따라오도록 **쉬운 일상 비유**, **한 줄 한 줄 코드 풀이**, 그리고 **실무 꿀팁**을 총동원한 완전 무결점 독학 교과서입니다.

---

## 💡 이 코스를 이수하면 어떤 것을 만들 수 있나요?

이 과정을 마치고 나면 React나 Vue 같은 외부 라이브러리 없이 **순수 바닐라 JS만으로** 다음과 같은 멋진 실무 프로젝트들을 제로부터 직접 제작할 수 있게 됩니다!

1. 🛒 **미니 이커머스 쇼핑몰 SPA**: 카테고리 필터링, 장바구니 수량 조절, 실시간 결제 금액 계산 및 LocalStorage 동기화
2. 📊 **실시간 데이터 대시보드**: 백엔드 비동기 API 통신, 검색/페이징, 로딩 스피너 및 유저 관리 대시보드
3. 💬 **동적 댓글 & 커뮤니티 위젯**: 기존 PHP / JSP / Spring 사이트에 새로고침 없이 부착하는 댓글 및 좋아요 위젯
4. 📝 **스마트 폼 & 회원가입 위저드**: 실시간 이메일/비밀번호 검증, 에러 메시지 제어 및 단계별(Multi-step) 폼
5. 🧩 **나만의 UI 컴포넌트 라이브러리**: 모달 팝업, 토스트 알림, 무한 스크롤, 다크 모드 테마 스위처

---

## 🌐 [필수] 시작하기 전: 웹 서버(Live Server) 켜는 방법
자바스크립트 모듈(`import/export`)은 파일 더블클릭이 아닌 **Live Server**를 통해 켜야 보안 에러가 나지 않습니다.  
설치법이 궁금하시다면 **[SERVER_GUIDE.md](SERVER_GUIDE.md)** 가이드를 정독해 보세요!

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

## 📌 [Chapter 00] 왕초보를 위한 3단계 디딤돌 사다리

컴포넌트 아키텍처에 들어가기 전, 자바스크립트 기본기를 마스터하는 3단계 사다리입니다.

### 1️⃣ Level 1: DOM 탐색과 글자 바꾸기 (`level-1-dom.html`)
- `document.querySelector('#target')`: 화면의 HTML 요소 주소를 찾아 변수에 담습니다.
- `.innerText`: 단순 텍스트를 대입합니다. (`$title.innerText = '안녕';`)
- `.innerHTML`: HTML 태그가 해석되는 문맥을 대입합니다. (`$content.innerHTML = '<b>안녕</b>';`)
  - ⚠️ **보안 주의**: 사용자 입력을 그대로 `.innerHTML`에 넣으면 악성 스크립트가 실행되는 **XSS 공격** 위험이 있으므로, 안전한 텍스트는 항상 `.innerText`를 쓰는 것이 실무 원칙입니다!

### 2️⃣ Level 2: 백틱(`` ` ``)과 템플릿 리터럴 (`level-2-template.html`)
- 키보드 숫자 1 왼쪽의 물결 기호(`~`)에 있는 백틱(`` ` ``)을 사용하면, 자바스크립트 변수와 HTML을 자유롭게 조립할 수 있습니다.
```javascript
const user = { name: "홍길동", age: 20 };
const template = `
  <div class="user-card">
    <h2>${user.name}님 환영합니다!</h2>
    <p>나이: ${user.age}세</p>
  </div>
`;
$app.innerHTML = template;
```

### 3️⃣ Level 3: ES6 모듈 시스템과 `class` 기초 (`level-3-module.html`)
- HTML에서 JS를 불러올 때 `<script type="module" src="./main.js"></script>` 로 지정해야 `import`와 `export` 모듈이 동작합니다.
- `class`는 컴포넌트의 **붕어빵 틀(설계도)**이며, `new` 키워드로 화면에 **실제 붕어빵(인스턴스)**을 생성합니다.

---

## 📌 [Chapter 01] 명령형 vs 선언적 렌더링 (Why Component?)

### 💡 붕어빵 틀과 붕어빵 이야기 (쉬운 비유)
- **명령형(Imperative) 방식**: 다 구워진 붕어빵의 옆구리를 칼로 찢어서 팥을 일일이 밀어 넣는 방식입니다. (`document.querySelector`로 일일이 글자 고치기)
  - **문제점**: 화면의 숫자가 10곳으로 늘어나면, 버튼 하나 클릭할 때마다 10곳의 DOM을 찾아다니며 일일이 수정해야 해서 코드가 스파게티처럼 꼬입니다.
- **선언적(Declarative) 방식**: 붕어빵 틀(Template)을 하나 만들어 두고, 팥의 양(State)만 정해주면 붕어빵 틀이 알아서 노릇노릇한 새 붕어빵을 그려내는 방식입니다.
  - **핵심 공식**: `UI = f(State)` (화면 UI는 오직 상태 State에 의해 결정되는 결과물이다!)

### 💻 선언적 파이프라인 한 줄 한 줄 해석
```javascript
let state = { count: 0 }; // 1. 화면에 들어갈 중앙 데이터 변수 선언

function render() {
  // 2. 현재 state 데이터를 기반으로 화면 HTML을 새로 대입하는 함수
  $app.innerHTML = `<h2>카운트: ${state.count}</h2>`;
}

function setState(newState) {
  state = { ...state, ...newState }; // 3. 기존 state에 새로운 newState를 안전하게 병합!
  render();                          // 4. 데이터가 바뀌었으니 화면을 자동으로 재렌더링!
}
```

---

## 📌 [Chapter 02] `Component` 클래스 라이프사이클 완전 정복

### 🔄 컴포넌트 6단계 생애 주기 (Lifecycle Flow)

1. **`constructor($target, props)`**: 컴포넌트가 생성될 때 실행 (부착할 위치 `$target`과 부모 보따리 `props` 수령)
2. **`setup()`**: 컴포넌트 태어나자마자 초기 상태(`this.state`)를 세팅합니다.
3. **`template()`**: 상태를 기반으로 어떤 HTML을 그릴지 템플릿 문자열을 반환합니다.
4. **`render()`**: 템플릿을 실제 HTML DOM(`$target.innerHTML`)에 반영합니다.
5. **`mounted()`**: 화면에 렌더링이 완료된 직후 실행됩니다. (자식 컴포넌트 연결 시점)
6. **`setEvent()`**: 버튼 클릭 등 사용자의 반응을 수신할 이벤트를 연결합니다.
7. **`setState(newState)`**: 상태가 바뀌면 `render()`를 자동으로 다시 실행합니다.

### 💻 `Component` 클래스 한 줄 한 줄 코드 풀이
```javascript
export default class Component {
  $target; props; state; // 클래스 멤버 변수 선언

  constructor($target, props = {}) {
    this.$target = $target; // 1. 내가 그려질 HTML 부모 요소 기억하기
    this.props = props;     // 2. 부모 컴포넌트가 넘겨준 데이터 기억하기
    this.setup();           // 3. 초기 state 세팅 실행
    this.render();          // 4. 화면에 그리기 시작!
  }

  setup() {}     // 자식 클래스가 오버라이딩(재정의)할 빈 함수
  mounted() {}   // 화면에 그려진 직후 자식 컴포넌트 부착용 빈 함수
  template() { return ''; } // HTML 템플릿 반환용 빈 함수

  render() {
    this.$target.innerHTML = this.template(); // 화면에 HTML 그리기!
    this.mounted();                           // 자식 컴포넌트 부착!
    this.setEvent();                          // 이벤트 연결!
  }

  setEvent() {}  // 이벤트 연결용 빈 함수

  setState(newState) {
    this.state = { ...this.state, ...newState }; // 데이터 업데이트 (불변성 유지)
    this.render();                               // 화면 자동 재렌더링!
  }
}
```

---

## 📌 [Chapter 03] 이벤트 위임 (Event Delegation) 패턴

### 💡 아파트 경비원 비유로 이해하는 이벤트 위임
- **문제 상황**: 아파트 세대수가 1,000세대일 때, 모든 집 현관문마다 방문객 알림벨을 일일이 설치하면 비용과 관리가 감당되지 않습니다. (아이템 1,000개에 이벤트 1,000개 등록)
- **이벤트 위임 해결책**: 아파트 중앙 정문(부모 `$target`)에 경비원 1명을 두고, 방문객(이벤트)이 올 때마다 "어느 동 어느 호수로 가시나요?"(`event.target.closest(selector)`)를 물어보고 처리하는 방식입니다!

### 💻 `addEvent` 헬퍼 메서드 코드 풀이
```javascript
addEvent(eventType, selector, callback) {
  // 부모 태그($target)에 이벤트를 딱 1번만 등록!
  this.$target.addEventListener(eventType, (event) => {
    // 실제 클릭한 요소(event.target) 근처에 내가 찾는 selector가 없으면 거절!
    if (!event.target.closest(selector)) return false;
    // 내가 찾는 요소가 맞으면 콜백 함수 실행!
    callback(event);
  });
}
```

---

## 📌 [Chapter 04] 컴포넌트 분화 & Props 단방향 데이터 흐름

### 🌲 단일 책임 원칙 (SRP)과 데이터 흐름
- 하나의 거대한 파일에 모든 코드를 몰아넣지 않고 `App.js` ➔ `ItemInput.js`, `ItemList.js`, `ItemFilter.js` 로 모듈을 분화합니다.
- **Props Down (부모 ➔ 자식)**: 부모가 자식의 생성자에 데이터(`props`)를 건네줍니다.
- **Events Up (자식 ➔ 부모)**: 자식이 사용자 입력을 받으면 부모가 전달해준 콜백 메서드(`addItem`)를 불러 부모의 `state`를 갱신합니다.

```javascript
// App.js 부모 컴포넌트의 mounted 시점
mounted() {
  const $itemInput = this.$target.querySelector('[data-component="item-input"]');
  new ItemInput($itemInput, {
    addItem: this.addItem.bind(this) // 부모의 this 스코프가 깨지지 않도록 .bind(this) 필수!
  });
}
```

---

## 📌 [Chapter 05] 옵저버 패턴 & ES6 Proxy 기반 중앙 상태 관리 (Store)

### 🛒 은행 통장 알림 서비스 비유로 이해하는 옵저버 패턴
- 부모-자식 관계가 5단계 깊어지면 props 전달이 매우 고통스럽습니다. (Props Drilling)
- **`Proxy` 기반 옵저버 패턴**: 은행 계좌(`Store state`)에 입출금(`set`)이 발생하면, 등록된 휴대폰(`observe` 구독 컴포넌트)으로 **"잔액이 변경되었습니다!"** 하고 문자를 띡! 날려 자동으로 화면을 갱신시키는 원리입니다.

### 💻 `observer.js` 코드 한 줄 한 줄 풀이
```javascript
let currentObserver = null; // 현재 어떤 컴포넌트가 관찰 중인지 기록하는 임시 변수

export const observe = fn => {
  currentObserver = fn;
  fn(); // 1. 컴포넌트의 render() 함수를 실행하면, 내부에서 state를 읽으면서(get) 자동 등록됨!
  currentObserver = null;
};

export const observable = obj => {
  const observers = new Set(); // 중복 없는 구독자 명단 리스트

  return new Proxy(obj, {
    get(target, name) {
      if (currentObserver) observers.add(currentObserver); // 2. 읽을 때 명단에 추가!
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      target[name] = value; // 3. 값이 바뀌면!
      observers.forEach(fn => fn()); // 4. 명단에 있는 모든 컴포넌트 자동 재렌더링!
      return true;
    }
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
- **Microtask Batching**: `setState()`가 1초에 100번 불려도 `#renderScheduled` 플래그를 사용해 `requestAnimationFrame`으로 1프레임(초당 60프레임) 모아 딱 1번만 렌더링합니다.
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
