# 🏢 [나도 가능!] 실무 초보 개발자를 위한 프로젝트 구조 & Git 협업 지침서 (`WORKFLOW_GUIDE.md`)

> **"회사에 첫 입사했거나, 실무 웹 프로젝트를 처음 시작할 때 파일 구조는 어떻게 짜야 하고, Git 커밋은 어떻게 해야 할까요?"**  
> 실무 초보 개발자가 회사에서 인정받는 디렉토리 컨벤션, Git 커밋 규칙, API 키 보안 관리 지침서입니다.

---

## 📁 1. 실무 표준 컴포넌트 디렉토리 구조

프로젝트가 커져도 파일이 엉키지 않도록 역할을 명확히 나눕니다.

```text
my-project/
├── index.html               # 루트 마운트 포털
├── assets/
│   ├── css/
│   │   └── style.css        # 전역 디자인 스타일
│   └── images/              # 이미지 자원
└── src/
    ├── core/                # 🧠 프레임워크 핵심 엔진 (Component, Store, Router)
    │   ├── Component.js
    │   ├── Store.js
    │   └── Router.js
    ├── components/          # 🧩 재사용 가능한 UI 컴포넌트 (버튼, 모달, 헤더)
    │   ├── Header.js
    │   ├── Modal.js
    │   └── Toast.js
    ├── pages/               # 📄 라우터가 보여줄 각 화면 페이지
    │   ├── HomePage.js
    │   └── ProductPage.js
    ├── api/                 # 📡 백엔드 서버 통신 전용 함수 모듈
    │   └── userApi.js
    ├── utils/               # 🛠️ 헬퍼 함수 모듈 (storage, escapeHTML)
    │   ├── storage.js
    │   └── escapeHTML.js
    └── config.js            # 🔐 환경 변수 및 API URL 설정
```

---

## 🔐 2. API URL 및 환경변수(Config) 하드코딩 방지

코드 안에 백엔드 주소(`http://api.company.com`)나 비밀 키를 그대로 적어두면 보안 위반입니다.

### `src/config.js`
```javascript
// 개발 환경(Dev)과 운영 환경(Prod) 분리
const IS_DEV = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

export const CONFIG = {
  BASE_API_URL: IS_DEV 
    ? 'http://dev-api.company.com' 
    : 'https://api.company.com',
  TIMEOUT: 5000
};
```

---

## 🌿 3. 실무 Git 커밋 메시지 컨벤션 (Commit Convention)

회사 팀원들이 한눈에 변경 사항을 알아볼 수 있도록 약속된 깃 머리말을 사용합니다.

| 태그 | 의미 | 커밋 메시지 예시 |
| :---: | :--- | :--- |
| `feat` | 새로운 기능 추가 | `feat: 로그인 폼 실시간 이메일 검증 기능 추가` |
| `fix` | 버그 수정 | `fix: 모달 닫기 버튼 클릭 시 이벤트 미작동 버그 수정` |
| `docs` | 문서 수정 | `docs: README.md 및 컴포넌트 설치 지침 업데이트` |
| `style` | 코드 포맷팅 (로직 변경 없음) | `style: Component.js 들여쓰기 및 세미콜론 정돈` |
| `refactor` | 코드 리팩토링 | `refactor: Store 옵저버 렌더링 로직 최적화` |

---

## 🎯 결론
이 디렉토리 구조와 Git 컨벤션만 갖추어 프로젝트를 진행한다면, 초보 개발자라도 **"어라? 이 친구 디렉토리 구조랑 깃 관리가 사수급인데?"** 하는 극찬을 듣게 됩니다!
