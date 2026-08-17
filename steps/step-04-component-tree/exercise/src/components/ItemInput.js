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
    this.addEvent('submit', '.item-input-form', (e) => {
      e.preventDefault();
      const $input = this.$target.querySelector('.item-input');
      const text = $input.value.trim();
      if (text) addItem(text);
    });
  }
}
