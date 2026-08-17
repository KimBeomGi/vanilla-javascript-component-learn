let currentObserver = null;

export const observe = fn => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

export const observable = obj => {
  const observers = new Set();

  return new Proxy(obj, {
    get(target, name) {
      // TODO 1: currentObserver가 존재하면 observers Set에 등록하고 target[name]을 반환하세요.
      // ✏️ 작성하기

      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      if (JSON.stringify(target[name]) === JSON.stringify(value)) return true;

      target[name] = value;
      // TODO 2: observers Set에 등록된 모든 구독 함수(fn)를 순회 호출(forEach)하세요!
      // ✏️ 작성하기

      return true;
    }
  });
};
