/**
 * Component 추상 클래스 [실습용]
 * TODO 주석을 따라 공통 붕어빵 틀 라이프사이클 엔진을 직접 완성해 보세요!
 */
export default class Component {
  $target;
  props;
  state;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    // TODO 1: this.setup() 함수를 호출하여 초기 상태를 준비하세요.
    // ✏️ 작성하기

    // TODO 2: this.render() 함수를 호출하여 첫 화면을 그리세요.
    // ✏️ 작성하기
  }

  setup() {}
  mounted() {}
  template() { return ''; }

  render() {
    // TODO 3: this.$target.innerHTML 에 this.template()의 HTML 문자열을 할당하세요.
    // ✏️ 작성하기

    this.mounted();
    this.setEvent();
  }

  setEvent() {}

  setState(newState) {
    // TODO 4: this.state를 전개 연산자로 복사 병합하고, this.render()를 호출하여 화면을 자동 갱신하세요.
    // ✏️ 작성하기
    
  }
}
