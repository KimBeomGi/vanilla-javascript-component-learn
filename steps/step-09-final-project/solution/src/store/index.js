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
    ADD_TO_CART(state, product) {
      const existIndex = state.cart.findIndex(item => item.id === product.id);
      if (existIndex > -1) {
        state.cart[existIndex].qty += 1;
        state.cart = [...state.cart];
      } else {
        state.cart = [...state.cart, { ...product, qty: 1 }];
      }
    },
    CHANGE_QTY(state, { id, delta }) {
      state.cart = state.cart.map(item => {
        if (item.id === id) {
          const nextQty = item.qty + delta;
          return nextQty > 0 ? { ...item, qty: nextQty } : item;
        }
        return item;
      });
    },
    REMOVE_FROM_CART(state, id) {
      state.cart = state.cart.filter(item => item.id !== id);
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
