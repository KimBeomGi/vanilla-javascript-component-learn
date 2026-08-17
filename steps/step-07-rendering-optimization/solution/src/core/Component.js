import { updateElement } from './diff.js';

export default class Component {
  $target;
  props;
  state;
  #renderScheduled = false;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  mounted() {}
  template() { return ''; }

  render() {
    const parser = new DOMParser();
    const virtualDoc = parser.parseFromString(this.template(), 'text/html');
    const newVirtualNode = virtualDoc.body.firstElementChild;
    if (!newVirtualNode) return;

    if (this.$target.firstElementChild) {
      updateElement(this.$target, this.$target.firstElementChild, newVirtualNode);
    } else {
      this.$target.appendChild(newVirtualNode);
    }
    this.mounted();
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (e) => {
      if (!e.target.closest(selector)) return false;
      callback(e);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };

    // 💡 정답 해설 1: 비동기 배치 렌더링 (1프레임 모아서 1회만 렌더링)
    if (!this.#renderScheduled) {
      this.#renderScheduled = true;
      requestAnimationFrame(() => {
        this.render();
        this.#renderScheduled = false;
      });
    }
  }
}
