import Component from './core/Component.js';
import TodoList from './components/TodoList.js';

export default class App extends Component {
  template() {
    return `
      <h1>⚡ Step 03 - 이벤트 위임(Event Delegation) 예제</h1>
      <main id="todo-container"></main>
    `;
  }

  mounted() {
    const $container = this.$target.querySelector('#todo-container');
    new TodoList($container);
  }
}
