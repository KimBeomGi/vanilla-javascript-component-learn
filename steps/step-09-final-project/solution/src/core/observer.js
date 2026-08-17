let currentObserver = null;
export const observe = fn => { currentObserver = fn; fn(); currentObserver = null; };
export const observable = obj => {
  const observers = new Set();
  return new Proxy(obj, {
    get(target, name) {
      if (currentObserver) observers.add(currentObserver);
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      target[name] = value;
      observers.forEach(fn => fn());
      return true;
    }
  });
};
