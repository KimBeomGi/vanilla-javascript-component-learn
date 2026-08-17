# 📝 폼 데이터 처리 및 검증 지침서 (`FORM_GUIDE.md`)

> **"로그인, 회원가입, 댓글 입력 등 실무 웹 애플리케이션의 80%는 폼(Form) 처리입니다. 바닐라 JS 컴포넌트에서 양방향 바인딩, 실시간 유효성 검사, 버튼 활성화/비활성화를 처리하는 완벽한 가이드입니다."**

---

## 📋 1. 실시간 Input 검증 컴포넌트 패턴

사용자가 입력하는 값을 실시간 검증(Validation)하고 에러 메시지를 띄우는 컴포넌트 구조입니다.

```javascript
import Component from '../core/Component.js';

export default class LoginForm extends Component {
  setup() {
    this.state = {
      email: '',
      password: '',
      errors: { email: '', password: '' }
    };
  }

  template() {
    const { email, password, errors } = this.state;
    const isValid = !errors.email && !errors.password && email && password;

    return `
      <form class="login-form">
        <div class="field">
          <label>이메일</label>
          <input type="email" class="input-email" value="${email}" placeholder="example@email.com" />
          ${errors.email ? `<p class="error">${errors.email}</p>` : ''}
        </div>

        <div class="field">
          <label>비밀번호 (6자 이상)</label>
          <input type="password" class="input-password" value="${password}" placeholder="******" />
          ${errors.password ? `<p class="error">${errors.password}</p>` : ''}
        </div>

        <button type="submit" ${!isValid ? 'disabled' : ''}>로그인</button>
      </form>
    `;
  }

  setEvent() {
    // 1. 실시간 입력 이벤트 바인딩
    this.addEvent('input', '.input-email', (e) => {
      const email = e.target.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const error = !emailRegex.test(email) ? '올바른 이메일 형식이 아닙니다.' : '';

      this.setState({
        email,
        errors: { ...this.state.errors, email: error }
      });
    });

    this.addEvent('input', '.input-password', (e) => {
      const password = e.target.value;
      const error = password.length < 6 ? '비밀번호는 6자 이상이어야 합니다.' : '';

      this.setState({
        password,
        errors: { ...this.state.errors, password: error }
      });
    });

    // 2. 폼 제출 이벤트
    this.addEvent('submit', '.login-form', (e) => {
      e.preventDefault();
      alert(`로그인 성공! 이메일: ${this.state.email}`);
    });
  }
}
```

---

## 🎯 폼 처리 핵심 체크포인트
1. `e.preventDefault()`로 폼 제출 시 브라우저가 새로고침되는 기본 동작을 막습니다.
2. 입력값(`value`)의 유효성을 체크하여 `state.errors` 객체에 담아두면, `template()`에서 깔끔하게 에러 문구를 그려줄 수 있습니다.
3. 조건부 속성 `${!isValid ? 'disabled' : ''}`을 활용해 유효한 경우에만 제출 버튼이 활성화되도록 제어합니다.
