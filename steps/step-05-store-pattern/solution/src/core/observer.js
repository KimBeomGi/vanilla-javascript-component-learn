let currentObserver = null;

export const observe = fn => {
  currentObserver = fn;
  fn(); // 컴포넌트 render()를 즉시 실행해 state 조회를 유도!
  currentObserver = null;
};

export const observable = obj => {
  const observers = new Set(); // 구독 컴포넌트 명단 목록

  return new Proxy(obj, {
    get(target, name) {
      // 💡 정답 해설 1: 상태 조회 시 감시자(currentObserver)가 있으면 구독 명단에 추가!
      if (currentObserver) observers.add(currentObserver);
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      if (JSON.stringify(target[name]) === JSON.stringify(value)) return true;

      target[name] = value;
      // 💡 정답 해설 2: 상태 변경 시 명단에 등록된 모든 컴포넌트 자동 재렌더링!
      observers.forEach(fn => fn());
      return true;
    }
  });
};
