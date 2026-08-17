export class Router {
  #routes = []; #$target;
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
    // TODO: currentPath와 일치하는 route 객체를 찾아 컴포넌트를 new route.component(this.#$target) 으로 인스턴스화하세요.
    // const route = this.#routes.find(r => r.path === currentPath) || this.#routes.find(r => r.path === '*');
    // if (route) {
    //   this.#$target.innerHTML = '';
    //   new route.component(this.#$target);
    // }
  }
  #initEvent() {
    window.addEventListener('hashchange', () => this.renderRoute());
    window.addEventListener('DOMContentLoaded', () => this.renderRoute());
  }
}
