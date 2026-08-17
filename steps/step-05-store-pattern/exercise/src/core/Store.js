import { observable } from './observer.js';

export class Store {
  #state; #mutations; #actions;
  constructor({ state, mutations, actions }) {
    this.#state = observable(state);
    this.#mutations = mutations;
    this.#actions = actions;
  }
  get state() { return this.#state; }
  commit(actionKey, payload) {
    // TODO 1: #mutations에서 actionKey에 해당하는 변이 함수를 호출하세요.
    // this.#mutations[actionKey]?.(this.#state, payload);
  }
  dispatch(actionKey, payload) {
    // TODO 2: #actions에서 actionKey에 해당하는 액션 함수를 호출하세요.
    // this.#actions[actionKey]?.({ commit: this.commit.bind(this), state: this.#state }, payload);
  }
}
