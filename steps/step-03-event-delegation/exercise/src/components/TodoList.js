import Component from '../core/Component.js';

export default class TodoList extends Component {
  setup() {
    this.state = {
      items: [
        { id: 1, text: '이벤트 위임 학습하기', completed: false }
      ]
    };
  }

  template() {
    const { items } = this.state;
    return `
      <div class="todo-app">
        <form class="todo-form">
          <input type="text" class="todo-input" placeholder="할 일 입력" required />
          <button type="submit">추가</button>
        </form>
        <ul class="todo-list">
          ${items.map(item => `
            <li data-id="${item.id}">
              <span class="btn-toggle">${item.text}</span>
              <button class="btn-delete">삭제</button>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  setEvent() {
    // TODO 1: addEvent를 사용하여 form submit 이벤트를 위임 처리하세요.
    this.addEvent('submit', '.todo-form', (e) => {
      e.preventDefault();
      // ✏️ 작성하기
      
    });

    // TODO 2: addEvent를 사용하여 .btn-delete 클릭 삭제 이벤트를 위임 처리하세요.
    this.addEvent('click', '.btn-delete', (e) => {
      // ✏️ 작성하기
    });
  }
}
