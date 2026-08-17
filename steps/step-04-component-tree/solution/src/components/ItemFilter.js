import Component from '../core/Component.js';

export default class ItemFilter extends Component {
  template() {
    const { isFilter } = this.props;
    return `
      <div class="filter-buttons">
        <button class="btn-filter ${isFilter === 0 ? 'active' : ''}" data-is-filter="0">전체보기</button>
        <button class="btn-filter ${isFilter === 1 ? 'active' : ''}" data-is-filter="1">해야할 일</button>
        <button class="btn-filter ${isFilter === 2 ? 'active' : ''}" data-is-filter="2">완료된 일</button>
      </div>
    `;
  }

  setEvent() {
    const { filterItem } = this.props;
    this.addEvent('click', '.btn-filter', (e) => {
      filterItem(Number(e.target.dataset.isFilter));
    });
  }
}
