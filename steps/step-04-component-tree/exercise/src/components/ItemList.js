import Component from '../core/Component.js';

export default class ItemList extends Component {
  template() {
    const { items = [] } = this.props;
    if (items.length === 0) return `<p>항목이 없습니다.</p>`;
    return `
      <ul class="item-list">
        ${items.map(item => `
          <li data-id="${item.id}">
            <span class="btn-toggle" style="cursor:pointer; text-decoration:${item.completed ? 'line-through' : 'none'};">
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
    // TODO: addEvent를 사용하여 .btn-toggle 및 .btn-delete 클릭 시 콜백을 호출하세요.
    // this.addEvent('click', '.btn-toggle', e => toggleItem?.(Number(e.target.closest('li').dataset.id)));
    // this.addEvent('click', '.btn-delete', e => deleteItem?.(Number(e.target.closest('li').dataset.id)));
  }
}
