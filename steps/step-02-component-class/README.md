# Step 02: `Component` 추상 클래스 설계 및 라이프사이클

> **"붕어빵 틀(Component 클래스)을 하나 정교하게 만들어 두면, 언제든 원하는 컴포넌트를 1초 만에 계속 찍어낼 수 있습니다."**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 컴포넌트를 만들 때 매번 똑같이 쓰는 코드를 모아둔 **공통 붕어빵 틀(`Component` 추상 클래스)**을 만듭니다.
2. 컴포넌트가 태어나서 화면에 그려지기까지의 순서인 **라이프사이클 (Lifecycle)**을 배웁니다.
3. `Component`를 상속받아서 카운터 컴포넌트(`Counter.js`)를 완성하고 브라우저 화면에 띄웁니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/src/core/Component.js`** 열기: 공통 붕어빵 틀인 `Component` 클래스의 `constructor`, `render()`, `setState()` 뼈대 완성하기
2. 2️⃣ **`exercise/src/components/Counter.js`** 열기: `Component`를 상속받아 `setup()`, `template()`, `setEvent()` 작성하기
3. 3️⃣ **`exercise/index.html`** 열기: 라이브 서버로 구동하여 카운터 버튼을 눌러보기

---

## 🔄 `Component` 6단계 라이프사이클 실행 순서

생성자(`new Component()`)가 실행되면 아래 순서대로 착착착 실행됩니다:

1. **`constructor($target, props)`**: 부착할 위치 주소(`$target`)를 들고 생성됨
2. **`setup()`**: 컴포넌트 태어나자마자 초기 상태(`this.state`) 세팅
3. **`template()`**: 상태 기반의 HTML 문자열 조립 반환
4. **`render()`**: `this.$target.innerHTML = this.template()` 으로 화면에 짠! 출력
5. **`mounted()`**: 화면에 렌더링 직후 자식 컴포넌트 부착 시점
6. **`setEvent()`**: 버튼 클릭 등 사용자 반응 수신할 이벤트 바인딩
7. **`setState(newState)`**: 상태가 바뀌면 `render()`를 자동으로 다시 실행

---

## 💻 `Component` 추상 클래스 한 줄 한 줄 코드 풀이

```javascript
export default class Component {
  $target; props; state; // 클래스 안에서 쓸 변수 선언

  constructor($target, props = {}) {
    this.$target = $target; // 1. 내가 그려질 HTML 부모 위치 기억하기
    this.props = props;     // 2. 부모가 넘겨준 데이터 보따리 기억하기
    this.setup();           // 3. 초기 state 세팅 실행
    this.render();          // 4. 화면에 그리기 시작!
  }

  setup() {}     // 자식이 오버라이딩(재정의)해서 쓸 초기화 함수
  mounted() {}   // 자식이 오버라이딩해서 쓸 자식 부착용 함수
  template() { return ''; } // 자식이 HTML 조립해서 돌려줄 함수

  render() {
    this.$target.innerHTML = this.template(); // 화면에 HTML 대입!
    this.mounted();                           // 자식 부착!
    this.setEvent();                          // 이벤트 연결!
  }

  setEvent() {}  // 자식이 이벤트 등록용으로 쓸 함수

  setState(newState) {
    this.state = { ...this.state, ...newState }; // 안전한 상태 갱신
    this.render();                               // 화면 자동 재렌더링!
  }
}
```

---

## 🔑 자가 점검 체크리스트
- [ ] `constructor` 안에서 `this.setup()`과 `this.render()`가 불려오는지 확인하셨나요?
- [ ] `Counter.js` 가 `extends Component` 로 붕어빵 틀을 상속받았나요?
- [ ] 막히면 `solution/` 폴더의 완벽 정답 파일과 내 코드를 비교해 보세요!
