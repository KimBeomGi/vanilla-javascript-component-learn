# 🌐 비동기 API 통신 및 데이터 동기화 지침서 (`API_GUIDE.md`)

> **"실제 웹 앱은 백엔드 서버에서 데이터를 불러와야 합니다. 로딩 화면(Spinner), 에러 처리, LocalStorage 동기화를 바닐라 JS 컴포넌트에서 구현하는 완벽한 가이드입니다."**

---

## 📡 1. 비동기 데이터 렌더링 3단계 패턴

컴포넌트가 백엔드 API에서 데이터를 불러올 때는 **`loading` ➔ `success` / `error`** 3가지 상태 변화를 거칩니다.

```javascript
import Component from '../core/Component.js';

export default class UserList extends Component {
  setup() {
    // 1. 초기 상태 설정
    this.state = {
      isLoading: true,
      isError: false,
      users: []
    };
    
    // 2. 비동기 데이터 요청 실행
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('서버 응답 오류');
      
      const data = await response.json();
      
      // 3. 성공 시 상태 업데이트 ➔ 자동 Re-render!
      this.setState({
        users: data,
        isLoading: false
      });
    } catch (err) {
      console.error(err);
      this.setState({
        isLoading: false,
        isError: true
      });
    }
  }

  template() {
    const { isLoading, isError, users } = this.state;

    // A. 로딩 중 화면
    if (isLoading) {
      return `<div class="spinner">⏳ 데이터를 불러오는 중입니다...</div>`;
    }

    // B. 에러 발생 화면
    if (isError) {
      return `<div class="error-msg">⚠️ 데이터를 불러오는데 실패했습니다.</div>`;
    }

    // C. 성공 시 데이터 출력 화면
    return `
      <ul class="user-list">
        ${users.map(u => `<li>👤 ${u.name} (${u.email})</li>`).join('')}
      </ul>
    `;
  }
}
```

---

## 💾 2. LocalStorage 자동 동기화 (새로고침해도 상태 유지)

브라우저를 새로고침해도 장바구니나 설정값이 사라지지 않도록 `Store`나 `Component` 상태를 `localStorage`와 연동하는 방법입니다.

### 헬퍼 모듈 (`src/core/storage.js`)

```javascript
export const storage = {
  get(key, defaultValue) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage Save Error:', e);
    }
  }
};
```

### Store 연동 예시

```javascript
import { Store } from '../core/Store.js';
import { storage } from './storage.js';

export const store = new Store({
  // 1. 초기 상태를 LocalStorage에서 불러옴
  state: {
    cart: storage.get('MY_CART', [])
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.cart = [...state.cart, item];
      // 2. 상태가 바뀔 때마다 LocalStorage에 저장!
      storage.set('MY_CART', state.cart);
    }
  }
});
```

---

## 🎯 핵심 요약
- `setup()`에서 `async/await` 함수를 호출하고, 결과를 받으면 `setState()`를 실행하면 깔끔하게 로딩 ➔ 화면 표시 흐름이 만들어집니다.
- `localStorage` 동기화 헬퍼를 추가하면 새로고침해도 데이터가 지속되는 완성도 높은 실전 웹앱이 됩니다!
