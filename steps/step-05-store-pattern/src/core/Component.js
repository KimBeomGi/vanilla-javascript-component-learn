import { observe } from './observer.js';

export default class Component {
  $target;
  props;
  state;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    // ✨ observe로 render를 감싸주어, render 내부에서 사용하는 observable 상태가 변경되면 자동으로 render 실행!
    observe(() => this.render());
  }

  setup() {}
  mounted() {}
  template() { return ''; }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
