# Step 02: `Component` 추상 클래스 설계 및 라이프사이클

> **"붕어빵 틀(Component 클래스)을 하나 정교하게 만들어 두면, 언제든 원하는 컴포넌트를 1초 만에 계속 찍어낼 수 있습니다."**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 반복되는 컴포넌트 구조를 캡슐화한 **`Component` 공통 추상 클래스**를 직접 설계합니다.
2. 컴포넌트의 생애 주기인 **라이프사이클 (Lifecycle)** 6단계를 정립합니다.
3. `Component`를 상속받아 카운터 컴포넌트(`Counter.js`)를 완성하고 브라우저에 마운트합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. **`exercise/src/core/Component.js`**: 공통 붕어빵 틀인 `Component` 추상 클래스의 `constructor`, `render()`, `setState()` 뼈대 완성하기
2. **`exercise/src/components/Counter.js`**: `Component`를 상속받아 `setup()`, `template()`, `setEvent()` 작성하기
3. **`exercise/index.html`**: 라이브 서버를 켜고 카운터 버튼이 정상 동작하는지 확인하기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 🔄 `Component` 6단계 라이프사이클 실행 순서

생성자(`new Component()`)가 불려오면 다음 6단계가 순서대로 실행됩니다:

1. **`constructor($target, props)`**: 컴포넌트 생성 시 부착 위치(`$target`)와 부모 보따리(`props`) 수령
2. **`setup()`**: 초기 상태(`this.state`) 데이터 세팅
3. **`template()`**: 상태 기반의 HTML 템플릿 문자열 반환
4. **`render()`**: `this.$target.innerHTML = this.template()` 으로 DOM에 짠! 출력
5. **`mounted()`**: 화면 출력 직후 자식 컴포넌트를 부착할 시점
6. **`setEvent()`**: 버튼 클릭 등 사용자의 반응을 수신할 이벤트를 연결
7. **`setState(newState)`**: 상태가 바뀌면 `render()`를 자동으로 다시 실행

---

### 💻 `Component` 추상 클래스 코드 상세 보조 해설

```javascript
export default class Component {
  $target; props; state; // 클래스 안에서 사용할 멤버 변수 선언

  constructor($target, props = {}) {
    this.$target = $target; // 1. 내가 그려질 HTML 부모 위치 기억하기
    this.props = props;     // 2. 부모가 넘겨준 데이터 보따리 기억하기
    this.setup();           // 3. 초기 state 세팅 실행
    this.render();          // 4. 화면에 그리기 시작!
  }

  setup() {}     // 자식 클래스가 오버라이딩(재정의)해서 쓸 초기화 빈 함수
  mounted() {}   // 자식 클래스가 오버라이딩해서 쓸 자식 부착용 빈 함수
  template() { return ''; } // 자식이 HTML 조립해서 돌려줄 빈 함수

  render() {
    this.$target.innerHTML = this.template(); // 화면에 HTML 대입!
    this.mounted();                           // 자식 부착!
    this.setEvent();                          // 이벤트 연결!
  }

  setEvent() {}  // 자식이 이벤트 등록용으로 쓸 빈 함수

  setState(newState) {
    // 💡 보조 설명: state를 직접 수정하지 않고 전개 연산자(...)로 불변성을 지키며 대입!
    this.state = { ...this.state, ...newState }; 
    this.render(); // 데이터가 변경되었으므로 화면 자동 재렌더링!
  }
}
```

---

### 💡 보조 설명: ❌ 잘못된 상태 수정 vs ⭕ 올바른 setState 사용 예시

```javascript
// ❌ 잘못된 예시 (state를 직접 수정하면 렌더링이 불리지 않아 화면이 바뀌지 않음!)
this.state.count = 10; // 💥 화면은 여전히 0으로 남아 있음!

// ⭕ 올바른 예시 (setState를 호출해야 데이터도 갱신되고 render()도 불림!)
this.setState({ count: 10 }); // 핑퐁! 화면이 10으로 자동 갱신됨!
```

---

## 🔑 자가 점검 체크리스트
- [ ] `constructor` 내부에서 `this.setup()`과 `this.render()`가 불려오나요?
- [ ] `Counter.js` 가 `extends Component` 로 상속받아 구현되었나요?
- [ ] 막히면 `solution/` 폴더 파일과 내 코드를 비교해 보세요!
