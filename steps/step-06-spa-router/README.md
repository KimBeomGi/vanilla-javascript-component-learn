# Step 06: SPA (Single Page Application) 클라이언트 사이드 라우터

> **"페이지 이동 시마다 브라우저가 깜빡이는 F5 새로고침 없이, URL에 맞춰 화면 컴포넌트만 1초 만에 교체하는 SPA 라우터를 만듭니다."**

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

1. 1️⃣ **`exercise/src/core/Router.js`**: `renderRoute()` 메서드 내부에서 `window.location.hash`를 받아 `this.#routes.find()`로 매칭하는 코드를 완성하세요!
2. 2️⃣ **`exercise/src/App.js`**: `mounted()` 메서드 내부에서 `new Router()` 인스턴스를 생성하고 `.addRoute()`로 페이지를 등록하세요!
3. 3️⃣ **`exercise/index.html`**: 상단 네비게이션 메뉴를 눌러 페이지가 새로고침 없이 부드럽게 전환되는지 확인하세요!

---

## 🎯 학습 목표

1. 전통적인 다중 페이지(MPA) 방식과 **싱글 페이지 애플리케이션(SPA)** 라우팅의 동작 차이를 이해합니다.
2. `hashchange` 이벤트 및 `window.location.hash`를 이용하여 클라이언트 사이드 라우팅을 구현합니다.
3. 경로(`/`, `#/cart`, `#/product`)에 따라 적절한 페이지 컴포넌트를 부착하는 **`Router.js`**를 완성합니다.
