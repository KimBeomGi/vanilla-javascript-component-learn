import Component from './core/Component.js';
import { store } from './store/index.js';

export default class App extends Component {
  template() {
    return `
      <h1>🏪 Step 05 - Store [실습용]</h1>
      <p>유저: <strong>${store.state.user}</strong></p>
      <p>카운트: <strong>${store.state.count}</strong></p>
      <button class="btn-inc">+1</button>
    `;
  }
  setEvent() {
    this.addEvent('click', '.btn-inc', () => store.dispatch('increase'));
  }
}
