# Step 06: SPA (Single Page Application) 클라이언트 사이드 라우터

> **"페이지 이동 시마다 브라우저가 깜빡이는 F5 새로고침 없이, URL에 맞춰 화면 컴포넌트만 1초 만에 교체하는 SPA 라우터를 만듭니다."**

---

## 🎯 학습 목표

1. 전통적인 다중 페이지(MPA) 방식과 **싱글 페이지 애플리케이션(SPA)** 라우팅의 동작 차이를 이해합니다.
2. `hashchange` 이벤트 및 `window.location.hash`를 이용하여 클라이언트 사이드 라우팅을 구현합니다.
3. 경로(`/`, `#/cart`, `#/product`)에 따라 적절한 페이지 컴포넌트를 부착하는 **`Router.js`**를 완성합니다.

---

## 💡 라우팅 동작 원리

1. URL 해시 변경 시 `hashchange` 이벤트 감지 (예: `http://localhost:5500/#/cart` ➔ 해시 경로: `/cart`)
2. `Router`에 등록된 경로 중 일치하는 `route` 탐색
3. 타겟 요소(`$target`)를 비우고 해당 페이지 컴포넌트(`new CartPage($target)`) 마운트!

```javascript
renderRoute() {
  const currentPath = window.location.hash.replace('#', '') || '/';
  const route = this.#routes.find(r => r.path === currentPath);
  if (route) {
    this.#$target.innerHTML = '';
    new route.component(this.#$target); // 동적 페이지 컴포넌트 마운트!
  }
}
```

---

## 📂 실습 미션 지침 (`exercise/src/core/Router.js`)

1. `renderRoute()` 내부에서 현재 URL 해시 경로(`currentPath`) 구하기
2. `#routes` 배열에서 일치하는 `route` 찾기 (없으면 `*` 와일드카드 처리)
3. 타겟 비우고 `new route.component(this.#$target)` 인스턴스 생성하기

---

## 🔑 자가 점검 팁
- 네비게이션 메뉴 버튼을 눌렀을 때 페이지 전체가 새로고침되지 않고 **부드럽게 화면 컴포넌트만 교체되는지** 확인하세요!
