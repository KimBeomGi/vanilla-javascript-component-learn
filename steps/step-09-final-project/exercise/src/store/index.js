import { Store } from '../core/Store.js';

export const store = new Store({
  state: {
    products: [
      { id: 1, name: '🍦 프리미엄 바닐라 아이스크림', price: 5000 },
      { id: 2, name: '🍰 딸기 생크림 케이크', price: 12000 },
      { id: 3, name: '☕ 아메리카노 헤이즐넛', price: 4500 },
      { id: 4, name: '🥐 크로플 디저트', price: 6500 }
    ],
    cart: [] // { id, name, price, qty }
  },
  mutations: {
    // TODO 1: ADD_TO_CART 장바구니 상품 추가 뮤테이션을 완성하세요.
    ADD_TO_CART(state, product) {
      // ✏️ 1. state.cart 에 이미 존재하는 상품이면 qty를 1 증가시키세요.
      // ✏️ 2. 신규 상품이면 { ...product, qty: 1 } 객체를 배열에 추가하세요.

    },
    // TODO 2: CHANGE_QTY 장바구니 수량 조절(+1, -1) 뮤테이션을 완성하세요.
    CHANGE_QTY(state, { id, delta }) {
      // ✏️ map을 이용해 해당 id 항목의 수량(qty)을 delta 만큼 변경하세요 (qty가 1 미만이 되지 않도록 처리).

    },
    // TODO 3: REMOVE_FROM_CART 장바구니 개별 항목 삭제 뮤테이션을 완성하세요.
    REMOVE_FROM_CART(state, id) {
      // ✏️ filter를 이용해 해당 id 항목을 장바구니에서 삭제하세요.

    },
    CLEAR_CART(state) {
      state.cart = [];
    }
  },
  actions: {
    addToCart({ commit }, product) { commit('ADD_TO_CART', product); },
    changeQty({ commit }, payload) { commit('CHANGE_QTY', payload); },
    removeFromCart({ commit }, id) { commit('REMOVE_FROM_CART', id); },
    clearCart({ commit }) { commit('CLEAR_CART'); }
  }
});
