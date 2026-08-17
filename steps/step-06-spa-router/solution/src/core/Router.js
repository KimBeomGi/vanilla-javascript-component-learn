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
    // 💡 정답 해설 1: URL 해시 경로 매칭 후 해당 컴포넌트 마운트
    const route = this.#routes.find(r => r.path === currentPath);
    if (route) {
      this.#$target.innerHTML = '';
      new route.component(this.#$target);
    }
  }

  #initEvent() {
    window.addEventListener('hashchange', () => this.renderRoute());
    window.addEventListener('DOMContentLoaded', () => this.renderRoute());
  }
}
