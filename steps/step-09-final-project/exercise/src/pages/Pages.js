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
    // TODO 2: .btn-add 클릭 시 선택한 상품을 store.dispatch('addToCart', product) 에 전달하세요.
    this.addEvent('click', '.btn-add', (e) => {
      // ✏️ 1. e.target.closest('.product-card').dataset.id 로 선택한 상품 id를 읽으세요.
      // ✏️ 2. store.state.products 에서 해당 상품을 찾아 store.dispatch('addToCart', product) 를 호출하세요.

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
        <button class="btn-clear">전체 비우기</button>
      </div>
    `;
  }

  setEvent() {
    // TODO 3: 수량 감소(.btn-dec) 클릭 시 store.dispatch('changeQty', { id, delta: -1 }) 호출하기
    this.addEvent('click', '.btn-dec', (e) => {
      // ✏️ 작성하기

    });

    // TODO 4: 수량 증가(.btn-inc) 클릭 시 store.dispatch('changeQty', { id, delta: 1 }) 호출하기
    this.addEvent('click', '.btn-inc', (e) => {
      // ✏️ 작성하기

    });

    // TODO 5: 삭제(.btn-remove) 클릭 시 store.dispatch('removeFromCart', id) 호출하기
    this.addEvent('click', '.btn-remove', (e) => {
      // ✏️ 작성하기

    });

    // TODO 6: 비우기(.btn-clear) 클릭 시 store.dispatch('clearCart') 호출하기
    this.addEvent('click', '.btn-clear', () => {
      // ✏️ 작성하기

    });
  }
}
