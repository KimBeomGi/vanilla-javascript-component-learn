import Component from './core/Component.js';

export default class App extends Component {
  setup() { this.state = { count: 0 }; }
  template() {
    return `
      <div class="card">
        <h1>🎉 Step 07 Batching 완성본 (Solution)</h1>
        <p>상태 Count: <strong>${this.state.count}</strong></p>
        <button class="btn-batch">연속 setState 100회 호출</button>
      </div>
    `;
  }
  setEvent() {
    this.addEvent('click', '.btn-batch', () => {
      console.log('--- setState 100회 동시 호출 ---');
      for (let i = 0; i < 100; i++) this.setState({ count: this.state.count + 1 });
    });
  }
}
