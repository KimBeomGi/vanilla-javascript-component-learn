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

    // TODO: #renderScheduled 플래그와 requestAnimationFrame을 이용해 렌더링을 1회만 예약 처리하세요.
    if (!this.#renderScheduled) {
      this.#renderScheduled = true;
      requestAnimationFrame(() => {
        this.render();
        this.#renderScheduled = false;
      });
    }
  }
}
