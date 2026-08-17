/**
 * Step 03: 이벤트 위임 기능이 개선된 Component 추상 클래스
 */
export default class Component {
  $target;
  props;
  state;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent(); // ✨ 생성자 시점에 딱 1회만 이벤트 등록!
    this.render();
  }

  setup() {}
  mounted() {}
  template() { return ''; }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}

  /**
   * ✨ 이벤트 위임 헬퍼 메서드
   * @param {string} eventType - 이벤트 종류 ('click', 'keyup' 등)
   * @param {string} selector - 타겟 요소 CSS 선택자 (예: '.btn-delete')
   * @param {function} callback - 이벤트 핸들러
   */
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      // event.target이 selector에 해당하거나 selector의 하위 요소인 경우
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
