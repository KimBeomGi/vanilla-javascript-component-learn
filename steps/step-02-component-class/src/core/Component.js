/**
 * 바닐라 자바스크립트 컴포넌트의 최상위 추상 클래스
 */
export default class Component {
  $target; // 컴포넌트가 렌더링될 부모 DOM 요소
  props;   // 부모 컴포넌트로부터 전달받은 데이터/콜백
  state;   // 컴포넌트 자체 상태 데이터

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
  }

  /**
   * 컴포넌트 생성 시 최초 1회 실행 (초기 state 설정)
   */
  setup() {}

  /**
   * 렌더링 후 DOM이 마운트되었을 때 실행 (자식 컴포넌트 생성 등)
   */
  mounted() {}

  /**
   * UI HTML 문자열을 반환하는 함수 (하위 클래스에서 필수로 구현)
   */
  template() {
    return '';
  }

  /**
   * 실제 DOM을 렌더링하는 함수
   */
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
    this.setEvent(); // ⚠️ re-render 시 매번 이벤트를 등록하는 구조 (Step 03에서 개선 예정)
  }

  /**
   * 컴포넌트 내 이벤트 바인딩
   */
  setEvent() {}

  /**
   * 상태를 변경하고 자동으로 렌더링을 다시 수행
   */
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
