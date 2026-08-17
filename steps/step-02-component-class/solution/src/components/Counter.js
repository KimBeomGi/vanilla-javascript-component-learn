import Component from '../core/Component.js';

export default class Counter extends Component {
  setup() {
    // 💡 정답 해설 1: 초기 상태 설정
    this.state = { count: 0 };
  }

  template() {
    const { count } = this.state;
    // 💡 정답 해설 2: 현재 count 데이터를 바인딩한 HTML 백틱 문자열 반환
    return `
      <div class="counter-card">
        <h2>카운트: ${count}</h2>
        <button class="btn-inc">+1</button>
        <button class="btn-dec">-1</button>
      </div>
    `;
  }

  setEvent() {
    // 💡 정답 해설 3: 버튼 선택 후 클릭 이벤트 바인딩
    const $inc = this.$target.querySelector('.btn-inc');
    const $dec = this.$target.querySelector('.btn-dec');

    // 💡 화살표 함수 () => {} 를 사용해야 이 내부의 this가 Counter 인스턴스를 유지합니다!
    $inc?.addEventListener('click', () => {
      this.setState({ count: this.state.count + 1 });
    });

    $dec?.addEventListener('click', () => {
      this.setState({ count: this.state.count - 1 });
    });
  }
}
