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
    // TODO 2: .btn-toggle 클릭 시 toggleItem(id) 부모 콜백을 호출하세요.
    this.addEvent('click', '.btn-toggle', (e) => {
      // ✏️ 1. closest('li').dataset.id 로 id를 추출하세요.
      // ✏️ 2. toggleItem(Number(id)) 를 호출하세요.

    });

    // TODO 3: .btn-delete 클릭 시 deleteItem(id) 부모 콜백을 호출하세요.
    this.addEvent('click', '.btn-delete', (e) => {
      // ✏️ 1. closest('li').dataset.id 로 id를 추출하세요.
      // ✏️ 2. deleteItem(Number(id)) 를 호출하세요.

    });
  }
}
