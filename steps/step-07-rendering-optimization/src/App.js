import Component from './core/Component.js';

export default class App extends Component {
  setup() {
    this.state = {
      count: 0,
      text: '비동기 렌더링 테스트'
    };
  }

  template() {
    const { count, text } = this.state;
    return `
      <div class="card">
        <h1>🚀 Step 07 - Batching & DOM Diffing</h1>
        <p>현재 상태 카운트: <strong>${count}</strong></p>
        <p>텍스트: <strong>${text}</strong></p>
        <button class="btn-batch">연속 setState 100회 호출</button>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.btn-batch', () => {
      console.log('--- setState 100회 동시 호출 시작 ---');
      for (let i = 0; i < 100; i++) {
        this.setState({ count: this.state.count + 1 });
      }
      console.log('--- setState 100회 호출 완료 (콘솔 렌더링 로그 확인) ---');
    });
  }
}
