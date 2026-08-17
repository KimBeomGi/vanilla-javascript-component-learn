import Component from '../core/Component.js';
import { store } from '../store/index.js';

export class ProductPage extends Component {
  template() {
    const { products } = store.state;
    return `
      <h2>🛍️ 상품 목록</h2>
      <div class="product-grid">
        ${products.map(p => `
          <div class="product-card" data-id="${p.id}">
            <h3>${p.name}</h3>
            <p class="price">${p.price.toLocaleString()}원</p>
            <button class="btn-add">장바구니 담기</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.btn-add', (e) => {
      const id = Number(e.target.closest('.product-card').dataset.id);
      const product = store.state.products.find(p => p.id === id);
      if (product) store.dispatch('addToCart', product);
    });
  }
}

export class CartPage extends Component {
  template() {
    const { cart } = store.state;
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (cart.length === 0) {
      return `
        <h2>🛒 장바구니</h2>
        <p>장바구니가 비어 있습니다.</p>
        <a href="#/" class="btn-link">상품 둘러보러 가기</a>
      `;
    }

    return `
      <h2>🛒 장바구니 목록</h2>
      <ul class="cart-list">
        ${cart.map(item => `
          <li data-id="${item.id}" class="cart-item">
            <span class="item-name">${item.name}</span>
            <span class="item-price">${(item.price * item.qty).toLocaleString()}원</span>
            <div class="qty-control">
              <button class="btn-dec">-</button>
              <span>${item.qty}개</span>
              <button class="btn-inc">+</button>
            </div>
            <button class="btn-remove">삭제</button>
          </li>
        `).join('')}
      </ul>
      <div class="cart-total">
        <h3>총 결제 금액: <strong>${totalPrice.toLocaleString()}원</strong></h3>
        <button class="btn-clear">장바구니 비우기</button>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.btn-inc', (e) => {
      const id = Number(e.target.closest('li').dataset.id);
      store.dispatch('changeQty', { id, delta: 1 });
    });
    this.addEvent('click', '.btn-dec', (e) => {
      const id = Number(e.target.closest('li').dataset.id);
      store.dispatch('changeQty', { id, delta: -1 });
    });
    this.addEvent('click', '.btn-remove', (e) => {
      const id = Number(e.target.closest('li').dataset.id);
      store.dispatch('removeFromCart', id);
    });
    this.addEvent('click', '.btn-clear', () => {
      store.dispatch('clearCart');
    });
  }
}

export class NotFoundPage extends Component {
  template() { return `<h2>⚠️ 404 페이지를 찾을 수 없습니다.</h2>`; }
}
