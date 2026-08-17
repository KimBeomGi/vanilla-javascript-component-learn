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
    this.#mutations[actionKey]?.(this.#state, payload);
  }
  dispatch(actionKey, payload) {
    this.#actions[actionKey]?.({ commit: this.commit.bind(this), state: this.#state }, payload);
  }
}
