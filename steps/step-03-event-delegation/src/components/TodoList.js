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
    // 1. 할 일 추가 이벤트 (이벤트 위임)
    this.addEvent('submit', '.todo-form', (e) => {
      e.preventDefault();
      const $input = this.$target.querySelector('.todo-input');
      const text = $input.value.trim();
      if (!text) return;

      const newItems = [
        ...this.state.items,
        { id: Date.now(), text, completed: false }
      ];
      this.setState({ items: newItems });
    });

    // 2. 할 일 토글 이벤트 (이벤트 위임)
    this.addEvent('click', '.btn-toggle', (e) => {
      const $li = e.target.closest('li');
      const id = Number($li.dataset.id);
      const newItems = this.state.items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      this.setState({ items: newItems });
    });

    // 3. 할 일 삭제 이벤트 (이벤트 위임)
    this.addEvent('click', '.btn-delete', (e) => {
      const $li = e.target.closest('li');
      const id = Number($li.dataset.id);
      const newItems = this.state.items.filter(item => item.id !== id);
      this.setState({ items: newItems });
    });
  }
}
