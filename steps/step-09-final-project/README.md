# Step 09: [최종 캡스톤] 미니 쇼핑몰 & 장바구니 SPA 구축

> **"축하합니다! Step 00부터 배운 모든 컴포넌트 아키텍처 기술(Component, Event Delegation, Store, Router, LocalStorage)을 하나로 융합하여 미니 커머스 웹앱을 완성합니다."**

---

## 🎯 최종 프로젝트 구현 핵심 기능 4가지

1. **상품 목록 & 카테고리 필터링 (`/` 라우트)**
   - 전체, 의류, 전자기기 등 카테고리 필터링 탭
   - 장바구니 담기 버튼 클릭 시 애니메이션 및 수량 업데이트
2. **실시간 장바구니 SPA 페이지 (`#/cart` 라우트)**
   - 담긴 상품 수량 조절 (`+`, `-`), 개별 삭제 및 전체 비우기
   - 총 결제 금액 실시간 대합산 계산
3. **새로고침 보존 (LocalStorage Sync)**
   - 브라우저를 새로고침해도 장바구니 담긴 항목이 사라지지 않도록 `Store` 자동 동기화
4. **React Icons 스타일 아이콘 컴포넌트 (`Icons.js`)**
   - `${Icons.LuShoppingCart({ size: 24 })}` 형태로 아이콘 합성

---

## 🏗️ 캡스톤 프로젝트 전체 아키텍처

```text
src/
├── core/
│   ├── Component.js      # 캡슐화 컴포넌트 엔진
│   ├── Store.js          # Proxy 기반 중앙 상태 스토어
│   ├── observer.js       # 리액티브 감시자
│   └── Router.js         # SPA 라우터
├── store/
│   └── index.js          # 장바구니(cart), 상품(products) 중앙 상태 정의
├── components/
│   └── Icons.js          # SVG 아이콘 컴포넌트 모듈
├── pages/
│   └── Pages.js          # ProductListPage, CartPage 페이지 컴포넌트
└── App.js                # 최상위 쉘 앱
```

---

## 📂 실습 과제 및 완주 미션

1. `exercise/index.html`을 라이브 서버로 구동합니다.
2. 지금까지 익힌 기술로 장바구니 데이터 흐름을 완성해 보세요!
3. 완성 후 `solution/index.html` 완성본의 우아한 장바구니 웹앱과 내 작품을 비교해 보세요!
