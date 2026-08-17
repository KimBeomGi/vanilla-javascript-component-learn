import Component from './core/Component.js';
import { Router } from './core/Router.js';
import { store } from './store/index.js';
import { ProductPage, CartPage, NotFoundPage } from './pages/Pages.js';

export default class App extends Component {
  template() {
    const totalCount = store.state.cart.reduce((sum, item) => sum + item.qty, 0);
    return `
      <header class="app-header">
        <h1>🏬 바닐라 JS 미니 커머스 SPA</h1>
        <nav class="app-nav">
          <a href="#/">상품 목록</a>
          <a href="#/cart" class="cart-link">
            장바구니 <span class="badge">${totalCount}</span>
          </a>
        </nav>
      </header>
      <main id="router-view" class="app-main"></main>
    `;
  }

  mounted() {
    const $view = this.$target.querySelector('#router-view');
    const router = new Router($view);
    router
      .addRoute('/', ProductPage)
      .addRoute('/cart', CartPage)
      .addRoute('*', NotFoundPage);
    router.renderRoute();
  }
}
