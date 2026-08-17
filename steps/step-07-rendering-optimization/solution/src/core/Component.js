import { updateElement } from './diff.js';

export default class Component {
  $target; props; state;
  #renderScheduled = false;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {} mounted() {} template() { return ''; }

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
    if (!this.#renderScheduled) {
      this.#renderScheduled = true;
      requestAnimationFrame(() => {
        console.log('🚀 Batching 렌더링 실행!');
        this.render();
        this.#renderScheduled = false;
      });
    }
  }
}
