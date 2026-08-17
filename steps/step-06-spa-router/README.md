# Step 06: SPA (Single Page Application) 클라이언트 사이드 라우터

> **"페이지 이동 시마다 브라우저가 깜빡이는 F5 새로고침 없이, URL에 맞춰 화면 컴포넌트만 1초 만에 교체하는 SPA 라우터를 만듭니다."**

---

## 🔗 [누적 연결] 이전 Step 05와의 비교 및 발전 과정

- **이전 Step 05에서 한 것**: `Store.js`를 만들어 데이터가 변경되면 화면이 자동으로 재렌더링되는 단일 화면 앱을 완성했습니다.
- **겪었던 한계**: 하지만 화면이 단 1개뿐이어서, 쇼핑몰의 상품 목록 화면과 장바구니 화면 간을 전환하려면 브라우저 새로고침(F5)을 하거나 HTML 파일을 따로 불러와야 해서 애플리케이션의 메모리 상태가 모두 날아갔습니다.
- **이번 Step 06에서의 발전**:
  - 브라우저 주소창의 `#` (해시) 변경을 감지하는 **`Router.js` 라우터 엔진**을 만듭니다.
  - 이제 새로고침 없이 URL 주소(`#/`, `#/cart`)에 따라 해당 페이지 컴포넌트만 1초 만에 동적으로 갈아끼우는 **싱글 페이지 애플리케이션(SPA)**으로 대전환합니다!

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 화면 전체가 하얗게 깜빡이는 옛날 방식(MPA)과 깜빡임 없는 싱글 페이지 앱(SPA)의 차이를 배웁니다.
2. `hashchange` 이벤트와 `window.location.hash`로 URL 주소 변경을 감지합니다.
3. 주소(`/#`, `#/cart`)에 따라 해당 페이지 컴포넌트를 들아와 화면에 띄우는 **`Router.js`**를 완성합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. **`exercise/src/core/Router.js`**: `renderRoute()` 내부에서 `window.location.hash` 주소를 매칭하는 코드 작성하기
2. **`exercise/src/App.js`**: `mounted()` 안에서 `new Router()` 인스턴스를 만들고 `.addRoute()`로 페이지 등록하기
3. **`exercise/index.html`**: 상단 메뉴를 눌러 새로고침 없이 페이지가 착착 바뀌는지 확인하기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 🧭 클라이언트 사이드 라우팅 동작 원리

#### 📌 주 설명
- 브라우저는 기본적으로 `<a href="/cart.html">` 링크를 누르면 웹서버에 새 HTML 파일을 요청하여 브라우저가 하얗게 깜빡이는 F5 새로고침을 일으킵니다.
- SPA 라우터는 `#` (해시) 변경을 감지하여 자바스크립트가 기존 화면을 지우고 `new CartPage($app)` 컴포넌트만 1초 만에 갈아끼웁니다.

#### 💡 보조 설명: `Router.js` 라우팅 코드 한 줄 한 줄 풀이
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
