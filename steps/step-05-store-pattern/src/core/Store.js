import { observable } from './observer.js';

export class Store {
  #state;
  #mutations;
  #actions;

  constructor({ state, mutations, actions }) {
    this.#state = observable(state);
    this.#mutations = mutations;
    this.#actions = actions;
  }

  get state() {
    return this.#state;
  }

  commit(actionKey, payload) {
    const mutation = this.#mutations[actionKey];
    if (!mutation) {
      console.error(`Mutation ${actionKey} doesn't exist.`);
      return false;
    }
    mutation(this.#state, payload);
  }

  dispatch(actionKey, payload) {
    const action = this.#actions[actionKey];
    if (!action) {
      console.error(`Action ${actionKey} doesn't exist.`);
      return false;
    }
    action({ commit: this.commit.bind(this), state: this.#state }, payload);
  }
}
