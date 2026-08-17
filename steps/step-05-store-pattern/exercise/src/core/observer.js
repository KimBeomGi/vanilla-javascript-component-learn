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
      // TODO 1: currentObserver가 존재하는 경우 observers Set에 등록하세요.
      // if (currentObserver) observers.add(currentObserver);
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      target[name] = value;
      
      // TODO 2: observers에 등록된 모든 구독 함수(fn)를 실행하세요!
      // observers.forEach(fn => fn());
      return true;
    }
  });
};
