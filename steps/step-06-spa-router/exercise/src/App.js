import Component from './core/Component.js';
import { Router } from './core/Router.js';
import { HomePage, AboutPage, NotFoundPage } from './pages/Pages.js';

export default class App extends Component {
  template() {
    return `
      <h1>🧭 Step 06 - Router [실습용]</h1>
      <nav><a href="#/">홈</a> | <a href="#/about">소개</a></nav>
      <main id="router-view"></main>
    `;
  }
  mounted() {
    const $view = this.$target.querySelector('#router-view');
    const router = new Router($view);
    router.addRoute('/', HomePage).addRoute('/about', AboutPage).addRoute('*', NotFoundPage);
    router.renderRoute();
  }
}
