export default class Component {
  $target; props; state;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent(); // 생성자 시점에 1회 등록
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
   * TODO: 이벤트 위임 헬퍼 메서드를 완성하세요.
   */
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      // ✏️ event.target이 selector 요소를 포함/매칭(closest)하는지 확인하고 callback(event)를 호출하도록 작성해 보세요.
      // if (!event.target.closest(selector)) return false;
      // callback(event);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
