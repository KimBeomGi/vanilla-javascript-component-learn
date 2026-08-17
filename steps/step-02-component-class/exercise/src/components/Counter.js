import Component from '../core/Component.js';

export default class Counter extends Component {
  setup() {
    // TODO 1: 초기 state = { count: 0 } 을 설정해 보세요.
    // this.state = { count: 0 };
  }

  template() {
    const { count = 0 } = this.state || {};
    // TODO 2: HTML 템플릿 반환
    return `
      <div class="counter-card">
        <h2>카운트: ${count}</h2>
        <button class="btn-inc">+1</button>
        <button class="btn-dec">-1</button>
      </div>
    `;
  }

  setEvent() {
    // TODO 3: 버튼 클릭 시 setState를 호출하도록 이벤트 핸들러를 작성하세요.
    const $inc = this.$target.querySelector('.btn-inc');
    const $dec = this.$target.querySelector('.btn-dec');

    $inc?.addEventListener('click', () => {
      // ✏️ 작성해보기: this.setState({ count: this.state.count + 1 });
    });

    $dec?.addEventListener('click', () => {
      // ✏️ 작성해보기
    });
  }
}
