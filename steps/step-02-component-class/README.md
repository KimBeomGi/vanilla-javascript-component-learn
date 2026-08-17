# Step 02: `Component` 추상 클래스 설계 및 라이프사이클

> **"붕어빵 틀(Component 클래스)을 하나 정교하게 만들어 두면, 언제든 원하는 컴포넌트를 1초 만에 계속 찍어낼 수 있습니다."**

---

## 📋 1-2-3 실습 순서 (무엇부터 작성하나요?)

아래 순서대로 작성하시면 의존성 에러 없이 완벽하게 완성할 수 있습니다!

1. 1️⃣ **`exercise/src/core/Component.js`**: 공통 붕어빵 틀인 `Component` 추상 클래스의 `constructor`, `render()`, `setState()` 뼈대를 먼저 완성하세요!
2. 2️⃣ **`exercise/src/components/Counter.js`**: `Component`를 상속받아 `setup()`, `template()`, `setEvent()`를 완성하세요!
3. 3️⃣ **`exercise/index.html`**: 브라우저에서 라이브 서버를 켜고 카운터 버튼이 정상 동작하는지 확인하세요!

---

## 🎯 학습 목표

1. 반복되는 컴포넌트 구조를 캡슐화한 **`Component` 공통 추상 클래스**를 직접 설계합니다.
2. 컴포넌트의 생애 주기인 **라이프사이클 (Lifecycle)** 순서를 정립합니다.
3. `Component` 클래스를 상속받아 카운터 컴포넌트(`Counter.js`)를 완성하고 브라우저에 마운트합니다.

---

## 🔄 `Component` 라이프사이클 실행 순서

1. **`setup()`**: 컴포넌트 초기 상태(`this.state`) 세팅
2. **`template()`**: 상태 기반의 HTML 템플릿 문자열 반환
3. **`render()`**: `this.$target.innerHTML = this.template()` 으로 DOM에 출력
4. **`mounted()`**: 화면 출력 직후 자식 컴포넌트를 부착할 시점
5. **`setEvent()`**: 컴포넌트 내의 버튼 클릭 등 이벤트 바인딩
