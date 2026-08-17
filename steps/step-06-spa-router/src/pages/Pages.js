import Component from '../core/Component.js';

export class HomePage extends Component {
  template() {
    return `
      <div class="page">
        <h2>🏠 메인 홈 페이지</h2>
        <p>바닐라 자바스크립트 해시 라우터로 전환된 홈 화면입니다.</p>
      </div>
    `;
  }
}

export class AboutPage extends Component {
  template() {
    return `
      <div class="page">
        <h2>ℹ️ 소개 페이지</h2>
        <p>프런트엔드 프레임워크의 원리를 바닐라 JS로 공부하는 공간입니다.</p>
      </div>
    `;
  }
}

export class NotFoundPage extends Component {
  template() {
    return `
      <div class="page">
        <h2>⚠️ 404 Page Not Found</h2>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </div>
    `;
  }
}
