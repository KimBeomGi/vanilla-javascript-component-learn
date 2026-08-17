import Component from './core/Component.js';
import { store } from './store/index.js';

export default class App extends Component {
  template() {
    return `
      <h1>🏪 Step 05 - Store & Observer 패턴 예제</h1>
      <div class="user-box">
        <p>현재 사용자: <strong>${store.state.user}</strong></p>
        <button class="btn-change-user">사용자 변경</button>
      </div>
      <hr />
      <div class="counter-box">
        <h2>중앙 카운트: ${store.state.count}</h2>
        <button class="btn-inc">+1 증가</button>
        <button class="btn-dec">-1 감소</button>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.btn-inc', () => store.dispatch('increase'));
    this.addEvent('click', '.btn-dec', () => store.dispatch('decrease'));
    this.addEvent('click', '.btn-change-user', () => {
      const names = ['김철수', '이영희', '박민수', '홍길동'];
      const nextUser = names[Math.floor(Math.random() * names.length)];
      store.dispatch('changeUser', nextUser);
    });
  }
}
