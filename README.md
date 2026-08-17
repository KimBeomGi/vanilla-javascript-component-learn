# 🍦 [나도 가능!] 바닐라 자바스크립트 컴포넌트 아키텍처

> **웹 컴포넌트(Web Components) 아키텍처를 원리부터 브라우저 표준 기술까지 완벽히 정복하는 독학 성전**  
> GitHub Repository: [https://github.com/KimBeomGi/vanilla-javascript-component-learn](https://github.com/KimBeomGi/vanilla-javascript-component-learn)

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Web Components](https://img.shields.io/badge/Web_Components-Custom_Elements-purple.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📖 프로젝트 소개

프론트엔드 프레임워크(React, Vue 등) 없이 **순수 바닐라 자바스크립트(Vanilla JS)**만으로 **웹 컴포넌트(Web Components)**의 동작 원리와 상태 관리, 마운트 라이프사이클 및 브라우저 표준 사양(`Custom Elements`, `Shadow DOM`)을 체득하는 최적의 학습 저장소입니다.

- 🐣 **HTML/CSS/JS 기초만 안다면 누구나 시작 가능**: `Step 00 문법 디딤돌` 단계 수록
- 🏋️ **실습(Exercise) & ✨ 완성본(Solution)** 이중 구성
- 📖 **독학용 완벽 교과서([TEXTBOOK.md](TEXTBOOK.md))** 제공

---

## 💡 이 프로젝트로 어떤 것을 만들 수 있게 되나요?

이 코스를 완료하면 프레임워크(React/Vue) 없이 **순수 바닐라 JS만으로** 다음 프로젝트들을 제작할 수 있습니다:

- 🛒 **쇼핑몰 & 장바구니 커머스 SPA 웹앱**
- 📊 **실시간 데이터 조회/검색 대시보드**
- 💬 **기존 PHP/JSP/Spring 사이트에 부착하는 동적 댓글 위젯**
- 📝 **실시간 유효성 검사 스마트 폼 & 회원가입 위저드**
- 🧩 **모달, 토스트, 무한 스크롤, 다크 모드 UI 킷**

---

## 📚 교재 및 실무 응용 지침서

| 문서명 | 설명 |
| :--- | :--- |
| 📖 **[TEXTBOOK.md](TEXTBOOK.md)** | 개념 비유, 라이프사이클 흐름도, 1분 퀴즈 수록 교과서 |
| 🏢 **[WORKFLOW_GUIDE.md](WORKFLOW_GUIDE.md)** | 실무 표준 폴더 구조, Git 커밋 컨벤션(`feat:`, `fix:`) & Config |
| 🛡️ **[SECURITY_GUIDE.md](SECURITY_GUIDE.md)** | `innerHTML` XSS 보안 공격 방어 & `escapeHTML` 이스케이프 |
| ♿ **[A11Y_GUIDE.md](A11Y_GUIDE.md)** | 웹 접근성(WAI-ARIA 스크린리더) & `unmount` 메모리 누수 방지 |
| 🎠 **[SLOT_COMPOUND_GUIDE.md](SLOT_COMPOUND_GUIDE.md)** | `<CarouselWrapper><CarouselTrack><CarouselItem/></CarouselTrack></CarouselWrapper>` 중첩 가이드 |
| 🚀 **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)** | GitHub Pages / Netlify 1분 무료 배포 및 어디서나 사용 가이드 |
| 🧩 **[UI_PATTERNS.md](UI_PATTERNS.md)** | 실무 4대 필수 UI (모달, 토스트, 무한 스크롤, 다크 모드) 패턴 |
| ⚛️ **[FRAMEWORK_COMPARISON.md](FRAMEWORK_COMPARISON.md)** | React & Vue 사용자를 위한 1초 개념 변환 매핑 표 |
| 🎨 **[ICON_GUIDE.md](ICON_GUIDE.md)** | React Icons 처럼 `<LuX />` 아이콘 컴포넌트 구현법 |
| 📡 **[API_GUIDE.md](API_GUIDE.md)** | 비동기 `fetch()` 통신 (로딩/에러) & `localStorage` 동기화 |
| 📝 **[FORM_GUIDE.md](FORM_GUIDE.md)** | 폼 입력 실시간 검증 및 버튼 제어 가이드 |
| 🐞 **[DEBUGGING_GUIDE.md](DEBUGGING_GUIDE.md)** | 크롬 개발자 도구 콘솔 8대 주요 에러 원인 & 해결책 |
| 🌐 **[SERVER_GUIDE.md](SERVER_GUIDE.md)** | VS Code Live Server 3분 구동 가이드 |

---

## 🗺️ 단계별 학습 커리큘럼

| 단계 | 구분 | 주제 및 학습 내용 |
| :---: | :---: | :--- |
| **Step 00** | 🐣 디딤돌 | 필수 ES6+ 문법 (`querySelector`, 백틱 템플릿, `class` 맛보기) |
| **Step 01** | 🔹 기초 | 명령형 DOM 조작 vs 선언적 상태 기반 렌더링 |
| **Step 02** | 🔹 클래스 | `Component` 추상 클래스 설계 및 라이프사이클 (`setup`, `template`, `render`, `setState`) |
| **Step 03** | 🔹 이벤트 | 버블링을 활용한 이벤트 위임(Event Delegation) 패턴 (`addEvent`) |
| **Step 04** | 🔹 모듈화 | 컴포넌트 분화 (`App`, `Input`, `List`, `Filter`) & 단방향 Props |
| **Step 05** | 🔹 상태 | Proxy 기반 옵저버 패턴 및 중앙 `Store` 구현 |
| **Step 06** | 🔹 라우팅 | History API / Hash 기반 클라이언트 사이드 `Router` |
| **Step 07** | 🔹 최적화 | `requestAnimationFrame` 배치 처리 & DOM Diffing 최소 갱신 |
| **Step 08** | 🔹 웹표준 | 브라우저 네이티브 Web Components (`Custom Elements`, `Shadow DOM`) |
| **Step 09** | 🏆 캡스톤 | **미니 쇼핑몰 & 장바구니 SPA 종합 프로젝트** |

---

## 🚀 빠른 시작 (Quick Start)

### 1. Repository 클론
```bash
git clone https://github.com/KimBeomGi/vanilla-javascript-component-learn.git
cd vanilla-javascript-component-learn
```

### 2. 웹 서버 실행
- VS Code에서 `index.html` 우클릭 ➔ **`Open with Live Server`** 클릭!
- 또는 터미널에서 `npx serve .` 실행 후 `http://localhost:3000` 접속

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
