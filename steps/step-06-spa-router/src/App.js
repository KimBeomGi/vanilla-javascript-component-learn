import Component from './core/Component.js';
import { Router } from './core/Router.js';
import { HomePage, AboutPage, NotFoundPage } from './pages/Pages.js';

export default class App extends Component {
  template() {
    return `
      <header>
        <h1>🧭 Step 06 - SPA Router 예제</h1>
        <nav>
          <a href="#/">홈</a> |
          <a href="#/about">소개</a> |
          <a href="#/unknown">404 테스트</a>
        </nav>
      </header>
      <main id="router-view" style="margin-top: 1rem; border: 1px solid #ddd; padding: 1.5rem; border-radius: 8px;"></main>
    `;
  }

  mounted() {
    const $view = this.$target.querySelector('#router-view');
    const router = new Router($view);
    router
      .addRoute('/', HomePage)
      .addRoute('/about', AboutPage)
      .addRoute('*', NotFoundPage);

    router.renderRoute();
  }
}
