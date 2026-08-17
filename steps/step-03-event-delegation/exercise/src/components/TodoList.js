import Component from '../core/Component.js';

export default class TodoList extends Component {
  setup() {
    this.state = {
      items: [
        { id: 1, text: '이벤트 위임 학습하기', completed: false },
        { id: 2, text: 'Component 클래스 이해하기', completed: true }
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
    // TODO 1: addEvent를 사용하여 폼 제출 시 새 할 일 항목 추가하기
    this.addEvent('submit', '.todo-form', (e) => {
      e.preventDefault();
      // ✏️ 1. .todo-input 요소에서 텍스트를 읽어오세요.
      // ✏️ 2. text가 비어있지 않으면 this.state.items 에 새 객체 { id: Date.now(), text, completed: false } 를 추가하여 setState()를 부르세요.
      
    });

    // TODO 2: addEvent를 사용하여 .btn-toggle 클릭 시 완료 여부(completed) 토글하기
    this.addEvent('click', '.btn-toggle', (e) => {
      // ✏️ 1. e.target.closest('li').dataset.id 로 클릭된 li 태그의 data-id 값을 가져오세요.
      // ✏️ 2. items.map() 을 돌려 id가 일치하는 항목의 completed 값을 반전(!item.completed)시킨 새 배열로 setState()를 부르세요.

    });

    // TODO 3: addEvent를 사용하여 .btn-delete 클릭 시 해당 항목 삭제하기
    this.addEvent('click', '.btn-delete', (e) => {
      // ✏️ 1. e.target.closest('li').dataset.id 로 클릭된 li 태그의 data-id 값을 가져오세요.
      // ✏️ 2. items.filter() 를 돌려 해당 id를 제외한 새 배열로 setState()를 부르세요.

    });
  }
}
