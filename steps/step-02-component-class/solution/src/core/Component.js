/**
 * Component 추상 클래스 [완성본 정답]
 * 모든 컴포넌트가 상속받아 사용하는 붕어빵 틀 뼈대입니다.
 */
export default class Component {
  $target; // 컴포넌트가 부착될 HTML 부모 DOM 요소
  props;   // 부모 컴포넌트가 전달한 데이터 보따리
  state;   // 컴포넌트 자체 내부 상태 데이터

  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    
    // 💡 정답 해설 1: 초기 상태 설정 함수 호출
    this.setup();
    
    // 💡 정답 해설 2: 첫 화면 렌더링 함수 호출
    this.render();
  }

  setup() {}     // 자식 컴포넌트가 오버라이딩(재정의)하여 state 초기값을 지정하는 빈 메서드
  mounted() {}   // DOM 렌더링 직후 자식 컴포넌트를 마운트하는 빈 메서드
  template() { return ''; } // HTML 백틱 템플릿 문자열을 돌려주는 빈 메서드

  render() {
    // 💡 정답 해설 3: 부모 요소 안쪽(innerHTML)을 템플릿 문자열로 변경
    this.$target.innerHTML = this.template();
    
    this.mounted();  // 자식 컴포넌트 부착
    this.setEvent(); // 이벤트 리스너 연결
  }

  setEvent() {}  // 이벤트 등록용 빈 메서드

  setState(newState) {
    // 💡 정답 해설 4: 기존 state와 새로운 newState를 불변성을 지키며 대입 후 render() 자동 호출!
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
