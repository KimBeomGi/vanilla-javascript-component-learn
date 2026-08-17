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
   * 💡 정답 해설 1: 이벤트 위임 헬퍼 메서드
   */
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      // closest(selector)로 클릭된 요소 조상 중 selector 태그 매칭 검사
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
