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
    // 💡 정답 해설 3: 중앙 상태를 변경하는 동기 뮤테이션 함수 호출
    if (this.#mutations[actionKey]) {
      this.#mutations[actionKey](this.#state, payload);
    }
  }

  dispatch(actionKey, payload) {
    // 💡 정답 해설 4: 비동기 비즈니스 로직 처리 액션 함수 호출
    if (this.#actions[actionKey]) {
      this.#actions[actionKey]({ commit: this.commit.bind(this), state: this.#state }, payload);
    }
  }
}
