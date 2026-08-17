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

  /**
   * ✨ Diffing 알고리즘이 적용된 렌더링 함수
   */
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
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }

  /**
   * ✨ requestAnimationFrame / Microtask 큐를 이용한 Batching 렌더링
   */
  setState(newState) {
    this.state = { ...this.state, ...newState };

    if (!this.#renderScheduled) {
      this.#renderScheduled = true;
      // 다음 애니메이션 프레임 직전에 렌더링 1회 일괄 처리
      requestAnimationFrame(() => {
        console.log('🚀 Batching 렌더링 실행!');
        this.render();
        this.#renderScheduled = false;
      });
    }
  }
}
