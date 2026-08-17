# Step 06: SPA (Single Page Application) 클라이언트 사이드 라우터

> **"페이지 이동 시마다 브라우저가 깜빡이는 F5 새로고침 없이, URL에 맞춰 화면 컴포넌트만 1초 만에 교체하는 SPA 라우터를 만듭니다."**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 화면 전체가 하얗게 깜빡이는 옛날 방식(MPA)과 깜빡임 없는 싱글 페이지 앱(SPA)의 차이를 배웁니다.
2. `hashchange` 이벤트와 `window.location.hash`로 URL 주소 변경을 감지합니다.
3. 주소(`/#`, `#/cart`)에 따라 해당 페이지 컴포넌트를 들아와 화면에 띄우는 **`Router.js`**를 완성합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/src/core/Router.js`** 열기: `renderRoute()` 내부에서 `window.location.hash` 주소를 매칭하는 코드 작성하기
2. 2️⃣ **`exercise/src/App.js`** 열기: `mounted()` 안에서 `new Router()` 인스턴스를 만들고 `.addRoute()`로 페이지 등록하기
3. 3️⃣ **`exercise/index.html`** 열기: 상단 메뉴를 눌러 새로고침 없이 페이지가 착착 바뀌는지 확인하기

---

## 💡 `Router.js` 라우팅 동작 한 줄 한 줄 풀이

```javascript
export class Router {
  #routes = []; #$target;
  constructor($target) {
    this.#$target = $target;
    // URL 뒤의 # 주소가 바뀔 때마다 renderRoute() 호출!
    window.addEventListener('hashchange', () => this.renderRoute());
  }
  addRoute(path, component) {
    this.#routes.push({ path, component });
    return this;
  }
  renderRoute() {
    const currentPath = window.location.hash.replace('#', '') || '/';
    const route = this.#routes.find(r => r.path === currentPath);
    if (route) {
      this.#$target.innerHTML = '';
      new route.component(this.#$target); // 부모 위치에 페이지 컴포넌트 동적 교체!
    }
  }
}
```

---

## 🔑 자가 점검 체크리스트
- [ ] URL 뒤의 `#` 해시가 바뀔 때 새로고침 없이 페이지가 바뀌나요?
- [ ] 잘못된 경로로 들어갔을 때 예외 처리가 되는지 확인하셨나요?
