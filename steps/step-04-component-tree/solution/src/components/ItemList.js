import Component from '../core/Component.js';

export default class ItemList extends Component {
  template() {
    const { items = [] } = this.props;
    if (items.length === 0) return `<p>등록된 항목이 없습니다.</p>`;

    return `
      <ul class="item-list">
        ${items.map(item => `
          <li data-id="${item.id}" class="${item.completed ? 'completed' : ''}">
            <span class="btn-toggle" style="cursor:pointer; text-decoration: ${item.completed ? 'line-through' : 'none'};">
              ${item.completed ? '✅' : '⬜'} ${item.text}
            </span>
            <button class="btn-delete">삭제</button>
          </li>
        `).join('')}
      </ul>
    `;
  }

  setEvent() {
    const { toggleItem, deleteItem } = this.props;
    // 💡 정답 해설 2: 완료 토글 버튼 클릭 시 부모 콜백 호출
    this.addEvent('click', '.btn-toggle', (e) => {
      const id = Number(e.target.closest('li').dataset.id);
      toggleItem(id);
    });

    // 💡 정답 해설 3: 삭제 버튼 클릭 시 부모 콜백 호출
    this.addEvent('click', '.btn-delete', (e) => {
      const id = Number(e.target.closest('li').dataset.id);
      deleteItem(id);
    });
  }
}
