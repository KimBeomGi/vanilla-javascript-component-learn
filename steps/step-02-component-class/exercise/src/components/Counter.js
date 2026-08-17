import Component from '../core/Component.js';

export default class Counter extends Component {
  setup() {
    // TODO 1: 초기 state = { count: 0 } 상태를 설정해 보세요.
    // ✏️ 작성하기
    
  }

  template() {
    const { count = 0 } = this.state || {};
    // TODO 2: HTML 백틱 템플릿 반환하기
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
    // 💡 참고: 화살표 함수 () => {} 를 써야 this 스코프가 Component 인스턴스로 유지됩니다!
    const $inc = this.$target.querySelector('.btn-inc');
    const $dec = this.$target.querySelector('.btn-dec');

    $inc?.addEventListener('click', () => {
      // ✏️ 작성하기: 증가 코드 (this.setState({ count: this.state.count + 1 }))
    });

    $dec?.addEventListener('click', () => {
      // ✏️ 작성하기: 감소 코드
    });
  }
}
