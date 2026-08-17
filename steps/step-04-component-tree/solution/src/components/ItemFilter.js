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
    // 💡 정답 해설 4: 필터 버튼 클릭 시 부모 콜백 호출
    this.addEvent('click', '.btn-filter', (e) => {
      const isFilter = Number(e.target.dataset.isFilter);
      filterItem(isFilter);
    });
  }
}
