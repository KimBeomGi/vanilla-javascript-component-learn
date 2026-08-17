import Component from './core/Component.js';
import { store } from './store/index.js';

export default class App extends Component {
  template() {
    return `
      <h1>🎉 Step 05 완성본 정답 (Solution)</h1>
      <p>유저: <strong>${store.state.user}</strong></p>
      <p>카운트: <strong>${store.state.count}</strong></p>
      <button class="btn-inc">+1 증가</button>
      <button class="btn-user">사용자 변경</button>
    `;
  }

  setEvent() {
    this.addEvent('click', '.btn-inc', () => store.dispatch('increase'));
    this.addEvent('click', '.btn-user', () => {
      const names = ['김철수', '이영희', '박민수', '홍길동'];
      store.dispatch('changeUser', names[Math.floor(Math.random() * names.length)]);
    });
  }
}
