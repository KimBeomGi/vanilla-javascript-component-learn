import Component from './core/Component.js';
import ItemInput from './components/ItemInput.js';
import ItemList from './components/ItemList.js';
import ItemFilter from './components/ItemFilter.js';

export default class App extends Component {
  setup() {
    this.state = {
      isFilter: 0,
      items: [
        { id: 1, text: '컴포넌트 분화 이해하기', completed: true },
        { id: 2, text: 'Props와 Callback 구현하기', completed: false },
      ]
    };
  }

  template() {
    return `
      <h1>🌴 Step 04 - 컴포넌트 분화 [실습용]</h1>
      <div data-component="item-input"></div>
      <div data-component="item-list"></div>
      <div data-component="item-filter"></div>
    `;
  }

  mounted() {
    const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this;

    const $itemInput = this.$target.querySelector('[data-component="item-input"]');
    const $itemList = this.$target.querySelector('[data-component="item-list"]');
    const $itemFilter = this.$target.querySelector('[data-component="item-filter"]');

    // TODO 1: new ItemInput($itemInput, { addItem: addItem.bind(this) }) 마운트를 완성하세요.
    new ItemInput($itemInput, {
      addItem: addItem.bind(this)
    });

    // TODO 2: new ItemList($itemList, ...) 마운트 및 props 전달을 완성하세요.
    // ✏️ 작성하기

    // TODO 3: new ItemFilter($itemFilter, ...) 마운트를 완성하세요.
    // ✏️ 작성하기
  }

  get filteredItems() {
    const { isFilter, items } = this.state;
    return items.filter(item => {
      if (isFilter === 1) return !item.completed;
      if (isFilter === 2) return item.completed;
      return true;
    });
  }

  addItem(text) {
    const newItems = [...this.state.items, { id: Date.now(), text, completed: false }];
    this.setState({ items: newItems });
  }

  deleteItem(id) {
    const newItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItems });
  }

  toggleItem(id) {
    const newItems = this.state.items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    this.setState({ items: newItems });
  }

  filterItem(isFilter) {
    this.setState({ isFilter });
  }
}
