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
    // 💡 정답 해설 1: 폼 제출(submit) 이벤트 위임 처리
    this.addEvent('submit', '.todo-form', (e) => {
      e.preventDefault(); // 폼 기본 제출(페이지 새로고침) 방지
      const $input = this.$target.querySelector('.todo-input');
      const text = $input.value.trim();
      if (!text) return;

      // 불변성을 지키며 기존 items 배열에 새 할 일 추가 후 setState 렌더링!
      this.setState({
        items: [...this.state.items, { id: Date.now(), text, completed: false }]
      });
    });

    // 💡 정답 해설 2: 할 일 완료 토글(click) 이벤트 위임 처리
    this.addEvent('click', '.btn-toggle', (e) => {
      // closest('li')로 클릭된 요소의 상위 li 태그에서 data-id 추출
      const id = Number(e.target.closest('li').dataset.id);
      
      // map을 이용해 선택한 항목의 completed 상태만 반전(!completed)
      const items = this.state.items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      this.setState({ items });
    });

    // 💡 정답 해설 3: 할 일 삭제(click) 이벤트 위임 처리
    this.addEvent('click', '.btn-delete', (e) => {
      const id = Number(e.target.closest('li').dataset.id);
      
      // filter를 이용해 삭제 대상 id만 제외한 새 배열 생성
      const items = this.state.items.filter(item => item.id !== id);
      this.setState({ items });
    });
  }
}
