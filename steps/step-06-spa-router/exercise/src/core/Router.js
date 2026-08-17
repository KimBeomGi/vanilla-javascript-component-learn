export class Router {
  #routes = [];
  #$target;

  constructor($target) {
    this.#$target = $target;
    this.#initEvent();
  }

  addRoute(path, component) {
    this.#routes.push({ path, component });
    return this;
  }

  renderRoute() {
    const currentPath = window.location.hash.replace('#', '') || '/';
    // TODO 1: currentPath와 일치하는 route 객체를 찾아 컴포넌트를 마운트하세요.
    // ✏️ 1. const route = this.#routes.find(r => r.path === currentPath) 로 경로를 매칭하세요.
    // ✏️ 2. 매칭 성공 시 this.#$target.innerHTML = '' 초기화 후 new route.component(this.#$target) 을 마운트하세요.

  }

  #initEvent() {
    window.addEventListener('hashchange', () => this.renderRoute());
    window.addEventListener('DOMContentLoaded', () => this.renderRoute());
  }
}
