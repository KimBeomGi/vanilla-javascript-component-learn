import { observable } from './observer.js';

export class Store {
  #state;
  #mutations;
  #actions;

  constructor({ state, mutations = {}, actions = {} }) {
    this.#state = observable(state);
    this.#mutations = mutations;
    this.#actions = actions;
  }

  get state() {
    return this.#state;
  }

  commit(actionKey, payload) {
    // TODO 3: #mutations[actionKey] 함수에 (this.#state, payload)를 넘겨 동기 변이를 수행하세요.
    // ✏️ 작성하기

  }

  dispatch(actionKey, payload) {
    // TODO 4: #actions[actionKey] 비동기 함수를 호출하세요.
    // ✏️ 작성하기

  }
}
