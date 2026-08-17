import Component from '../core/Component.js';

export class HomePage extends Component {
  template() { return `<h2>🏠 메인 홈 페이지 (완성본)</h2><p>해시 라우터 정상 전환 완료!</p>`; }
}
export class AboutPage extends Component {
  template() { return `<h2>ℹ️ 소개 페이지 (완성본)</h2><p>바닐라 자바스크립트 학습용 SPA</p>`; }
}
export class NotFoundPage extends Component {
  template() { return `<h2>⚠️ 404 Not Found</h2>`; }
}
