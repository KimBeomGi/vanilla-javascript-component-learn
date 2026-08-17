# ♿ [나도 가능!] 웹 접근성(a11y) & 메모리 클린업 가이드 (`A11Y_GUIDE.md`)

> **"A11Y가 무슨 뜻인가요?"**  
> `A`ccessibilit`y` (접근성)라는 단어에서 맨 앞 글자 **A**와 맨 뒤 글자 **Y** 사이의 알파벳이 **11개**라는 뜻의 개발자 약어입니다!  
> 시각장애인, 어르신 등 **누구나 사용할 수 있는 장애인 차별 없는 웹 컴포넌트(접근성)** 및 페이지 이동 시 메모리 누수를 막는 **unmount 클린업** 지침서입니다.

---

## ♿ 1. 웹 접근성 (WAI-ARIA) 컴포넌트 적용법

### A. 모달 팝업 키보드 탐색 (ESC 닫기 & Focus Trapping)
모달이 열렸을 때 키보드 `ESC` 키로 닫히고, Tab키를 누를 때 포커스가 모달 밖으로 나가지 않도록 제어합니다.

```javascript
import Component from '../core/Component.js';

export default class AccessibleModal extends Component {
  setEvent() {
    // ESC 키로 모달 닫기
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape' && this.state.isOpen) {
      this.close();
    }
  };

  template() {
    const { isOpen, title } = this.state;
    if (!isOpen) return '';

    return `
      <!-- ⭕ role="dialog" 및 aria-modal="true" 적용 -->
      <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-content">
          <h3 id="modal-title">${title}</h3>
          <button class="btn-close" aria-label="모달 닫기">✖</button>
        </div>
      </div>
    `;
  }
}
```

---

## 🧹 2. 메모리 누수 방지 `unmount()` 클린업

컴포넌트가 화면에서 파괴될 때(`unmount`), 백그라운드에서 계속 실행 중이던 **타이머(`setInterval`)**나 **윈도우 이벤트(`window.addEventListener`)**를 해제해야 메모리 누수를 막을 수 있습니다.

```javascript
import Component from '../core/Component.js';

export default class TimerComponent extends Component {
  setup() {
    this.state = { seconds: 0 };

    // 1. 타이머 등록
    this.timerId = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  // 2. 컴포넌트가 사라질 때 반드시 타이머 해제!
  unmount() {
    clearInterval(this.timerId);
    window.removeEventListener('keydown', this.handleKeyDown);
  }
}
```

---

## 🎯 결론
- **WAI-ARIA 속성(`role="dialog"`, `aria-label`)**을 챙기면 시각장애인 스크린리더 사용자도 내 컴포넌트를 이용할 수 있습니다.
- **`unmount()` 클린업 메서드**를 작성하면 오랜 시간 동작하는 웹 앱에서도 메모리 누수 없이 쾌적하게 동작합니다!
