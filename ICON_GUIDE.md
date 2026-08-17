# 🎨 바닐라 JS에서 React Icons처럼 `<LuX />` 아이콘 컴포넌트 사용하는 3가지 방법

> **"React에서는 `<LuX size={24} />` 처럼 아이콘을 컴포넌트로 쓰는데, 바닐라 JS에서는 어떻게 구현하나요?"**  
> 바닐라 자바스크립트에서도 React Icons나 Lucide Icons처럼 **아이콘 컴포넌트 함수** 또는 **Custom Element**로 완전히 똑같이 구현할 수 있습니다!

---

## ⭐️ 방법 1: 아이콘 헬퍼 모듈 방식 (가장 추천! 👍)

SVG 코드를 함수로 래핑하여 React Icons의 컴포넌트처럼 호출하는 방식입니다.

### 1단계: `src/components/Icons.js` 모듈 작성

```javascript
/**
 * 바닐라 JS 아이콘 컴포넌트 라이브러리
 */
export const Icons = {
  // ❌ X (닫기) 아이콘
  LuX: ({ size = 24, color = 'currentColor', className = '' } = {}) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-x ${className}">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  `,

  // 🔍 Search (검색) 아이콘
  LuSearch: ({ size = 24, color = 'currentColor', className = '' } = {}) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-search ${className}">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  `,

  // 🛒 ShoppingCart (장바구니) 아이콘
  LuShoppingCart: ({ size = 24, color = 'currentColor', className = '' } = {}) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-cart ${className}">
      <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  `,

  // ❤️ Heart (좋아요) 아이콘
  LuHeart: ({ size = 24, color = 'currentColor', fill = 'none', className = '' } = {}) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-heart ${className}">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  `
};
```

---

### 2단계: 내 컴포넌트 템플릿(`template()`)에서 사용하기

```javascript
import Component from '../core/Component.js';
import { Icons } from './Icons.js';

export default class Header extends Component {
  template() {
    return `
      <header class="header">
        <h1>내 쇼핑몰</h1>
        
        <!-- React의 <LuSearch size={20} />와 완전히 똑같이 사용! -->
        <button class="btn-search">
          ${Icons.LuSearch({ size: 20, color: '#3b82f6' })} 검색
        </button>

        <!-- React의 <LuShoppingCart size={24} /> -->
        <button class="btn-cart">
          ${Icons.LuShoppingCart({ size: 24, color: '#10b981' })}
        </button>

        <!-- React의 <LuX size={18} /> -->
        <button class="btn-close">
          ${Icons.LuX({ size: 18, color: '#ef4444' })}
        </button>
      </header>
    `;
  }
}
```

---

## ⭐️ 방법 2: Web Components 커스텀 태그 방식 (`<icon-x>`)

HTML에 태그 형태 그대로 쓰고 싶을 때는 브라우저 네이티브 Custom Element로 등록할 수 있습니다.

```javascript
// <icon-x size="20" color="red"></icon-x> 태그 등록
customElements.define('icon-x', class extends HTMLElement {
  connectedCallback() {
    const size = this.getAttribute('size') || 24;
    const color = this.getAttribute('color') || 'currentColor';
    this.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
      </svg>
    `;
  }
});
```

이제 템플릿 안에서 진짜 태그 형태로 쓸 수 있습니다:
```html
<button>
  <icon-x size="20" color="red"></icon-x> 닫기
</button>
```

---

## ⭐️ 방법 3: Lucide Icons CDN 자동 렌더링 방식

공식 Lucide Icons CDN 스크립트를 `index.html`에 추가하는 방법입니다.

```html
<!-- index.html 상단에 추가 -->
<script src="https://unpkg.com/lucide@latest"></script>
```

```javascript
// 컴포넌트 template() 에서 i 태그 사용
template() {
  return `<button><i data-lucide="x"></i> 닫기</button>`;
}

// mounted() 라이프사이클에서 아이콘 치환 실행
mounted() {
  lucide.createIcons(); // <i data-lucide="..."> 태그를 SVG로 자동 변환!
}
```

---

## 🎯 요약

React Icons에서 사용하는 방식과 본질적으로 100% 동일합니다.  
우리가 만든 **방법 1 (Icons.js 함수 모듈 방식)**을 사용하면 외부 라이브러리 설치(`npm install`) 없이도 `Icons.LuX({ size: 24 })` 형태로 아주 깨끗하게 아이콘을 불러와서 쓸 수 있습니다!
