import Component from '../core/Component.js';

export default class ItemFilter extends Component {
  template() {
    const { isFilter = 0 } = this.props;
    return `
      <div>
        <button class="btn-filter" data-is-filter="0">전체보기</button>
        <button class="btn-filter" data-is-filter="1">해야할 일</button>
        <button class="btn-filter" data-is-filter="2">완료된 일</button>
      </div>
    `;
  }
  setEvent() {
    const { filterItem } = this.props;
    // TODO: addEvent를 사용하여 .btn-filter 클릭 시 filterItem 콜백을 호출하세요.
    // this.addEvent('click', '.btn-filter', e => filterItem?.(Number(e.target.dataset.isFilter)));
  }
}
