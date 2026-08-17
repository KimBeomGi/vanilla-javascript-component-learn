import Component from '../core/Component.js';

export default class TodoList extends Component {
  setup() {
    this.state = {
      items: [
        { id: 1, text: '바닐라 JS 공부하기', completed: false },
        { id: 2, text: 'Component 클래스 설계하기', completed: true },
      ]
    };
  }

  template() {
    const { items } = this.state;
    return `
      <div class="todo-app">
        <form class="todo-form">
          <input type="text" class="todo-input" placeholder="할 일을 입력하세요" required />
          <button type="submit">추가</button>
        </form>
        <ul class="todo-list">
          ${items.map(item => `
            <li data-id="${item.id}" class="${item.completed ? 'completed' : ''}">
              <span class="btn-toggle" style="cursor:pointer; text-decoration: ${item.completed ? 'line-through' : 'none'};">
                ${item.completed ? '✅' : '🟦'} ${item.text}
              </span>
              <button class="btn-delete">삭제</button>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('submit', '.todo-form', (e) => {
      e.preventDefault();
      const $input = this.$target.querySelector('.todo-input');
      const text = $input.value.trim();
      if (!text) return;
      this.setState({
        items: [...this.state.items, { id: Date.now(), text, completed: false }]
      });
    });

    this.addEvent('click', '.btn-toggle', (e) => {
      const id = Number(e.target.closest('li').dataset.id);
      const items = this.state.items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      this.setState({ items });
    });

    this.addEvent('click', '.btn-delete', (e) => {
      const id = Number(e.target.closest('li').dataset.id);
      const items = this.state.items.filter(item => item.id !== id);
      this.setState({ items });
    });
  }
}
