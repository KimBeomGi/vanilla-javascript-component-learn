# Step 02: `Component` 추상 클래스 설계 및 라이프사이클

> **"붕어빵 틀(Component 클래스)을 하나 정교하게 만들어 두면, 언제든 원하는 컴포넌트를 1초 만에 계속 찍어낼 수 있습니다."**

---

## 🎯 학습 목표

1. 반복되는 컴포넌트 구조를 캡슐화한 **`Component` 공통 추상 클래스**를 직접 설계합니다.
2. 컴포넌트의 생애 주기인 **라이프사이클 (Lifecycle)** 순서를 정립합니다.
3. `Component` 클래스를 상속받아 카운터 컴포넌트(`Counter.js`)를 완성하고 브라우저에 마운트합니다.

---

## 🔄 `Component` 라이프사이클 실행 순서

생성자(`constructor`)가 실행되면 아래 5단계가 순서대로 작동합니다:

1. **`setup()`**: 컴포넌트 초기 상태(`this.state`) 세팅
2. **`template()`**: 상태 기반의 HTML 템플릿 문자열 반환
3. **`render()`**: `this.$target.innerHTML = this.template()` 으로 DOM에 출력
4. **`mounted()`**: 화면 출력 직후 자식 컴포넌트를 부착할 시점
5. **`setEvent()`**: 컴포넌트 내의 버튼 클릭 등 이벤트 바인딩

```javascript
class Component {
  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
    this.setEvent();
  }
}
```

---

## 📂 실습 미션 지침

### 1️⃣ `exercise/src/core/Component.js` 완성하기
- `constructor` 내부에서 `this.setup()`과 `this.render()` 호출
- `render()` 메서드 내부에서 `$target.innerHTML = this.template()` 대입
- `setState(newState)` 메서드 내부에서 상태 병합 및 `this.render()` 재호출

### 2️⃣ `exercise/src/components/Counter.js` 완성하기
- `setup()`에서 `this.state = { count: 0 }` 선언
- `template()`에서 카운터 HTML 문자열 반환
- `setEvent()`에서 `+1`, `-1` 버튼 클릭 시 `this.setState()` 호출

---

## 🔑 자가 점검 팁
- `Counter` 클래스가 `Component` 클래스를 `extends` 키워드로 상속받고 있는지 확인하세요.
- 막히면 `solution/index.html`을 라이브 서버로 열어 정답과 비교해 보세요!
