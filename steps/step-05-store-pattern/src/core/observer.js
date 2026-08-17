/**
 * 옵저버 패턴 핵심 모듈
 */
let currentObserver = null;

export const observe = fn => {
  currentObserver = fn;
  fn(); // 최초 1회 실행하며 get 트랩을 발생시켜 구독 등록
  currentObserver = null;
};

export const observable = obj => {
  const observers = new Set();

  return new Proxy(obj, {
    get(target, name) {
      if (currentObserver) {
        observers.add(currentObserver);
      }
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      if (JSON.stringify(target[name]) === JSON.stringify(value)) return true;

      target[name] = value;
      // 상태 변경 시 모든 구독자 실행
      observers.forEach(fn => fn());
      return true;
    }
  });
};
