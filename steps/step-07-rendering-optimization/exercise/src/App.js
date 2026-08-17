import Component from './core/Component.js';

export default class App extends Component {
  setup() { this.state = { count: 0 }; }
  template() {
    return `
      <div>
        <h1>🚀 Step 07 - Batching [실습용]</h1>
        <p>Count: ${this.state.count}</p>
        <button class="btn">setState 100회 호출</button>
      </div>
    `;
  }
  setEvent() {
    this.addEvent('click', '.btn', () => {
      for (let i = 0; i < 100; i++) this.setState({ count: this.state.count + 1 });
    });
  }
}
