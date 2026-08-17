import { Store } from '../core/Store.js';

export const store = new Store({
  state: { count: 0, user: '홍길동' },
  mutations: {
    SET_COUNT(state, payload) { state.count = payload; },
    SET_USER(state, payload) { state.user = payload; }
  },
  actions: {
    increase({ commit, state }) { commit('SET_COUNT', state.count + 1); },
    changeUser({ commit }, name) { commit('SET_USER', name); }
  }
});
