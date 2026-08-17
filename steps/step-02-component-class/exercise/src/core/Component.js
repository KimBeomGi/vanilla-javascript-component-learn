/**
 * Component 추상 클래스 [실습용]
 */
export default class Component {
  $target;
  props;
  state;

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    // TODO 1: setup() 함수를 호출하세요.
    this.setup();
    
    // TODO 2: render() 함수를 호출하세요.
    this.render();
  }

  setup() {}
  mounted() {}
  template() { return ''; }

  render() {
    // TODO 3: this.$target.innerHTML 에 this.template()의 반환값을 할당하세요.
    // this.$target.innerHTML = ...
    
    this.mounted();
    this.setEvent();
  }

  setEvent() {}

  setState(newState) {
    // TODO 4: this.state를 새로운 상태와 기존 상태를 불변성을 유지하며 병합하고 this.render()를 호출하세요.
    // this.state = { ...this.state, ...newState };
    // this.render();
  }
}
