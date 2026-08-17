# Step 09: [최종 캡스톤] 미니 쇼핑몰 & 장바구니 SPA 구축

> **"축하합니다! Step 00부터 배운 모든 컴포넌트 아키텍처 기술(Component, Event Delegation, Store, Router, LocalStorage)을 하나로 융합하여 미니 커머스 웹앱을 완성합니다."**

---

## 🔗 [누적 연결] 전체 Step 00~08 총동원 집대성 서사시

- **Step 00 ~ 08까지 우리가 모은 무기들**:
  - **Step 02**: `Component.js` (상태 기반 라이프사이클 엔진)
  - **Step 03**: `addEvent()` (이벤트 위임 버블링 핸들러)
  - **Step 04**: 컴포넌트 분화 & `props` / 콜백 연결
  - **Step 05**: `Store.js` (Proxy 기반 중앙 장바구니 스토어)
  - **Step 06**: `Router.js` (SPA 카테고리/장바구니 해시 라우터)
- **이번 Step 09 완성 프로젝트**:
  - 위의 모든 엔진을 결합하여 새로고침(F5)해도 장바구니가 보존되는 실전 커머스 미니 쇼핑몰 SPA를 완성합니다!

---

## 🎯 최종 프로젝트 구현 핵심 기능 4가지

1. **상품 목록 & 카테고리 필터링 (`/` 라우트)**
   - 전체, 의류, 전자기기 등 카테고리 필터링 탭
2. **실시간 장바구니 SPA 페이지 (`#/cart` 라우트)**
   - 담긴 상품 수량 조절 (`+`, `-`), 개별 삭제 및 전체 비우기
3. **새로고침 보존 (LocalStorage Sync)**
   - 브라우저 새로고침 후에도 장바구니 데이터 자동 복원
4. **React Icons 스타일 아이콘 컴포넌트 (`Icons.js`)**
   - `${Icons.LuShoppingCart({ size: 24 })}` 형태의 SVG 합성

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. **`solution/index.html` 먼저 구동해보기**: 완벽히 완성된 정답 캡스톤 쇼핑몰 앱을 라이브 서버로 구동하여 카테고리 필터, 장바구니 수량 조절, 라우팅, LocalStorage 동기화 동작을 느껴보기!
2. **`exercise/index.html` 완성하기**: 지금까지 배운 지식을 총동원해 나만의 커머스 SPA를 완성해보기!

---

## ✍️ TODO 1-2-3 실습 가이드 (어떻게 작성해야 하나요?)

### 1. `store/index.js` TODO 가이드
- **`TODO 1`**: `cart` 장바구니 추가(`ADD_TO_CART`), 수량 조절(`CHANGE_QUANTITY`), 삭제(`REMOVE_FROM_CART`) 뮤테이션 작성을 완료하세요.

### 2. `pages/Pages.js` TODO 가이드
- **`TODO 2`**: `ProductListPage` 에서 카테고리 필터링 탭 클릭 시 `store.commit('SET_CATEGORY', category)` 를 호출하세요.
- **`TODO 3`**: `CartPage` 에서 장바구니 비우기 및 수량 조절 버튼 클릭 이벤트를 위임 연결하세요.

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 🏗️ 캡스톤 프로젝트 전체 모듈 아키텍처

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

#### 💡 보조 설명: LocalStorage 장바구니 동기화 코드 패턴
```javascript
// 스토어 상태 변경 시 LocalStorage에 자동 저장
observe(() => {
  localStorage.setItem('shopping_cart', JSON.stringify(store.state.cart));
});
```

---

## 🔑 완주 기념 축하 메시지
- [ ] 상품을 장바구니에 담으면 상단 배너 숫자가 즉시 올라가나요?
- [ ] 브라우저를 새로고침해도 담은 장바구니가 유지되나요?
- [ ] 완주를 진심으로 축하합니다! 이제 여러분은 외부 라이브러리 없이 자신만의 바닐라 JS 프레임워크를 만들 줄 아는 멋진 프런트엔드 개발자입니다! 🎉
