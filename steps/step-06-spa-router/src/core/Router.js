export class Router {
  #routes = [];
  #$target;

  constructor($target) {
    this.#$target = $target;
    this.#initEvent();
  }

  /**
   * 라우트 등록 (path: 경로, component: 페이지 컴포넌트 클래스)
   */
  addRoute(path, component) {
    this.#routes.push({ path, component });
    return this; // 체이닝 지원
  }

  /**
   * 현재 path에 일치하는 컴포넌트 렌더링
   */
  renderRoute() {
    const currentPath = window.location.hash.replace('#', '') || '/';
    const route = this.#routes.find(r => r.path === currentPath) || this.#routes.find(r => r.path === '*');

    if (route) {
      this.#$target.innerHTML = '';
      new route.component(this.#$target);
    }
  }

  /**
   * 경로 이동 헬퍼
   */
  navigate(path) {
    window.location.hash = path;
  }

  #initEvent() {
    // hashchange 및 load시 라우팅 렌더링
    window.addEventListener('hashchange', () => this.renderRoute());
    window.addEventListener('DOMContentLoaded', () => this.renderRoute());
  }
}
