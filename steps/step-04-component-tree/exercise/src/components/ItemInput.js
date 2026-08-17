import Component from '../core/Component.js';

export default class ItemInput extends Component {
  template() {
    return `
      <form class="item-input-form">
        <input type="text" class="item-input" placeholder="새 할 일을 입력하세요" required />
        <button type="submit">추가</button>
      </form>
    `;
  }

  setEvent() {
    const { addItem } = this.props;
    // TODO 1: addEvent를 사용하여 .item-input-form submit 시 e.preventDefault() 후 addItem(text) 콜백을 호출하세요.
    this.addEvent('submit', '.item-input-form', (e) => {
      e.preventDefault();
      // ✏️ 1. .item-input 요소에서 입력된 텍스트를 읽어오세요.
      // ✏️ 2. 텍스트가 존재하면 addItem(text) 콜백을 호출하세요.

    });
  }
}
