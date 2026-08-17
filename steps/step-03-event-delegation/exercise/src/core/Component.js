export default class Component {
  $target;
  props;
  state;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent(); // 생성자 시점에 이벤트 1회만 등록
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
   * TODO 1: 이벤트 위임 헬퍼 메서드 addEvent를 완성하세요.
   */
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      // ✏️ 1. event.target.closest(selector) 로 매칭 여부를 검사하세요.
      // ✏️ 2. 매칭 요소가 없으면 return false 로 차단하세요.
      // ✏️ 3. 매칭되면 callback(event) 를 호출하세요.

    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
