import Component from './core/Component.js';
import Counter from './components/Counter.js';

export default class App extends Component {
  template() {
    return `
      <header>
        <h1>🍦 Step 02 - Component 추상 클래스 예제</h1>
      </header>
      <main id="counter-app"></main>
    `;
  }

  mounted() {
    const $counter = this.$target.querySelector('#counter-app');
    new Counter($counter);
  }
}
