# 🧩 [나도 가능!] 실무 UI 컴포넌트 4대 핵심 패턴 가이드 (`UI_PATTERNS.md`)

> **"실제 웹 앱에서 가장 많이 쓰이는 4가지 필수 UI (모달, 토스트 알림, 무한 스크롤, 다크 모드)를 바닐라 JS 컴포넌트로 구현하는 실무 패턴집입니다."**

---

## 🏢 1. 모달 (Modal / Dialog) 컴포넌트 패턴

웹사이트의 알림창, 팝업, 상세 보기 등에서 쓰이는 모달 컴포넌트입니다.

```javascript
import Component from '../core/Component.js';

export default class Modal extends Component {
  setup() {
    this.state = { isOpen: false, title: '', content: '' };
  }

  template() {
    const { isOpen, title, content } = this.state;
    if (!isOpen) return ''; // 닫혀있을 땐 비어있는 문자열 반환

    return `
      <div class="modal-backdrop">
        <div class="modal-content">
          <header class="modal-header">
            <h3>${title}</h3>
            <button class="btn-close">✖</button>
          </header>
          <div class="modal-body">${content}</div>
        </div>
      </div>
    `;
  }

  setEvent() {
    // 1. X 버튼이나 밖 배경 클릭 시 모달 닫기
    this.addEvent('click', '.btn-close', () => this.close());
    this.addEvent('click', '.modal-backdrop', (e) => {
      if (e.target.classList.contains('modal-backdrop')) this.close();
    });
  }

  open(title, content) {
    this.setState({ isOpen: true, title, content });
  }

  close() {
    this.setState({ isOpen: false });
  }
}
```

---

## 🍞 2. 토스트 알림 (Toast Notification) 컴포넌트 패턴

화면 구석에 3초 동안 떠 있다가 스르륵 사라지는 알림 메시지입니다.

```javascript
import Component from '../core/Component.js';

export default class Toast extends Component {
  setup() {
    this.state = { messages: [] };
  }

  template() {
    const { messages } = this.state;
    return `
      <div class="toast-container">
        ${messages.map(m => `<div class="toast-item toast-${m.type}">${m.text}</div>`).join('')}
      </div>
    `;
  }

  show(text, type = 'info') {
    const id = Date.now();
    const newMsg = { id, text, type };
    
    this.setState({ messages: [...this.state.messages, newMsg] });

    // 3초 후 해당 토스트 자동 제거!
    setTimeout(() => {
      this.setState({
        messages: this.state.messages.filter(m => m.id !== id)
      });
    }, 3000);
  }
}
```

---

## 📜 3. 무한 스크롤 (Infinite Scroll) 컴포넌트 패턴

브라우저 네이티브 **`IntersectionObserver`** API를 이용해 스크롤이 맨 아래에 도달했을 때 자동으로 데이터를 더 불러옵니다.

```javascript
import Component from '../core/Component.js';

export default class InfiniteList extends Component {
  setup() {
    this.state = { items: [1, 2, 3, 4, 5], page: 1 };
  }

  template() {
    const { items } = this.state;
    return `
      <ul class="item-list">
        ${items.map(i => `<li>아이템 #${i}</li>`).join('')}
      </ul>
      <div id="scroll-sentinel" style="height: 20px;">⏳ 로딩 중...</div>
    `;
  }

  mounted() {
    // 하단 sentinel 요소 감시
    const $sentinel = this.$target.querySelector('#scroll-sentinel');
    if (!$sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.loadMore();
      }
    });
    observer.observe($sentinel);
  }

  loadMore() {
    const nextPage = this.state.page + 1;
    const newItems = Array.from({ length: 5 }, (_, i) => this.state.items.length + i + 1);
    
    this.setState({
      page: nextPage,
      items: [...this.state.items, ...newItems]
    });
  }
}
```

---

## 🌙 4. 다크 모드 (Dark Mode / Theme Switcher) 컴포넌트 패턴

CSS 변수와 `localStorage`를 연동하여 웹사이트 테마를 전환합니다.

```javascript
import Component from '../core/Component.js';

export default class ThemeToggle extends Component {
  setup() {
    const savedTheme = localStorage.getItem('THEME') || 'light';
    this.state = { theme: savedTheme };
    this.applyTheme(savedTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('THEME', theme);
  }

  template() {
    const isDark = this.state.theme === 'dark';
    return `
      <button class="btn-theme">
        ${isDark ? '☀️ 라이트 모드로 전환' : '🌙 다크 모드로 전환'}
      </button>
    `;
  }

  setEvent() {
    this.addEvent('click', '.btn-theme', () => {
      const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
      this.applyTheme(nextTheme);
      this.setState({ theme: nextTheme });
    });
  }
}
```

---

## 🎯 결론
모달, 토스트, 무한 스크롤, 다크 모드는 현업 개발자들이 매일 다루는 UI입니다.  
이 4가지 패턴을 내 바닐라 JS 컴포넌트로 만들 줄 안다면, 실무 웹 프로젝트에서 마주치는 그 어떤 UI 요구사항도 막힘없이 완벽히 구현해낼 수 있습니다!
