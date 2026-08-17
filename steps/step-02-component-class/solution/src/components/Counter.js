import Component from '../core/Component.js';

export default class Counter extends Component {
  setup() {
    this.state = { count: 0 };
  }

  template() {
    const { count } = this.state;
    return `
      <div class="counter-card">
        <h2>현재 카운트: ${count}</h2>
        <button class="btn-inc">+1 증가</button>
        <button class="btn-dec">-1 감소</button>
        <button class="btn-reset">초기화</button>
      </div>
    `;
  }

  setEvent() {
    const $inc = this.$target.querySelector('.btn-inc');
    const $dec = this.$target.querySelector('.btn-dec');
    const $reset = this.$target.querySelector('.btn-reset');

    if ($inc) {
      $inc.addEventListener('click', () => {
        this.setState({ count: this.state.count + 1 });
      });
    }

    if ($dec) {
      $dec.addEventListener('click', () => {
        this.setState({ count: this.state.count - 1 });
      });
    }

    if ($reset) {
      $reset.addEventListener('click', () => {
        this.setState({ count: 0 });
      });
    }
  }
}
