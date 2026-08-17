import Component from '../core/Component.js';

export class HomePage extends Component {
  template() { return `<h2>🏠 메인 홈 (실습용)</h2>`; }
}
export class AboutPage extends Component {
  template() { return `<h2>ℹ️ 소개 페이지 (실습용)</h2>`; }
}
export class NotFoundPage extends Component {
  template() { return `<h2>⚠️ 404 Not Found</h2>`; }
}
