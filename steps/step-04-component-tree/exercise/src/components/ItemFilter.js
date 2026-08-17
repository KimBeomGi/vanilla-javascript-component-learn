import Component from '../core/Component.js';

export default class ItemFilter extends Component {
  template() {
    const { isFilter = 0 } = this.props;
    return `
      <div class="filter-group">
        <button class="btn-filter ${isFilter === 0 ? 'active' : ''}" data-is-filter="0">전체보기</button>
        <button class="btn-filter ${isFilter === 1 ? 'active' : ''}" data-is-filter="1">해야 할 일</button>
        <button class="btn-filter ${isFilter === 2 ? 'active' : ''}" data-is-filter="2">완료된 일</button>
      </div>
    `;
  }

  setEvent() {
    const { filterItem } = this.props;
    // TODO 4: addEvent를 사용하여 .btn-filter 클릭 시 filterItem(filterType) 부모 콜백을 호출하세요.
    this.addEvent('click', '.btn-filter', (e) => {
      // ✏️ 1. e.target.dataset.isFilter 값을 읽어 숫자로 변환(Number)하세요.
      // ✏️ 2. filterItem(Number(isFilter)) 를 호출하세요.

    });
  }
}
