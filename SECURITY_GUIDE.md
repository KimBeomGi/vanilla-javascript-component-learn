# 🛡️ [나도 가능!] XSS 보안 방어 및 HTML 이스케이프 가이드 (`SECURITY_GUIDE.md`)

> **"사용자가 입력한 댓글이나 텍스트를 `innerHTML`에 그대로 넣으면 해킹(XSS 공격)에 노출됩니다! 바닐라 JS 컴포넌트에서 안전하게 보안을 지키는 필수 가이드입니다."**

---

## 🚨 XSS (Cross-Site Scripting) 취약점이란?

사용자가 폼(Form) 입력창에 악의적인 자바스크립트 코드(예: `<img src=x onerror="alert('해킹')">`)를 입력하고, 컴포넌트가 이를 `$target.innerHTML`로 그대로 출력할 때 브라우저가 해당 악성 코드를 실행해 버리는 해킹 기법입니다.

---

## 🛡️ 1단계: HTML 이스케이프 (Escape) 헬퍼 함수

특수문자(`<`, `>`, `&`, `"`, `'`)를 안전한 HTML 엔티티 문자로 변환합니다.

### `src/core/utils.js`
```javascript
export const escapeHTML = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};
```

---

## 💻 2단계: 컴포넌트 템플릿에서 안전하게 사용하기

```javascript
import Component from '../core/Component.js';
import { escapeHTML } from '../core/utils.js';

export default class CommentList extends Component {
  template() {
    const { comments } = this.props;

    return `
      <ul class="comment-list">
        ${comments.map(c => `
          <li>
            <!-- ⭕ escapeHTML()로 감싸서 악성 스크립트 실행 방지! -->
            <strong>${escapeHTML(c.author)}</strong>: ${escapeHTML(c.text)}
          </li>
        `).join('')}
      </ul>
    `;
  }
}
```

---

## 🎯 결론
- `innerHTML`을 사용하는 선언적 바닐라 JS 컴포넌트 라이브러리에서는 **사용자가 입력한 동적 텍스트를 출력할 때 반드시 `escapeHTML()`로 감싸는 습관**이 중요합니다.
- 이렇게 조치하면 프레임워크(React)의 JSX 자동 이스케이프와 100% 동일한 보안 안정성을 확보할 수 있습니다!
