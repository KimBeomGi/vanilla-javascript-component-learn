# 🎠 [나도 가능!] 중첩 컴포넌트 & Web Components `<slot>` 가이드 (`SLOT_COMPOUND_GUIDE.md`)

> **"React/Vue처럼 `<CarouselWrapper><CarouselTrack><CarouselItem/></CarouselTrack></CarouselWrapper>` 처럼 컴포넌트 안에 컴포넌트를 중첩해서 조립할 수 있나요?"**  
> 네, 100% 가능합니다! 브라우저 표준 Web Components의 **`<slot>` API**와 바닐라 JS 컴포넌트의 **중첩 마운트 패턴** 2가지를 명쾌하게 해설합니다.

---

## 🎨 방식 1: Web Components 표준 `<slot>` API (추천 👍)

React의 `props.children` 이나 Vue의 `<slot/>`과 100% 동일하게, 커스텀 태그 자식으로 들어온 태그들을 자동으로 합성(Composition)해주는 브라우저 표준 기능입니다.

### 1. HTML 작성 (자유롭게 중첩!)
```html
<carousel-wrapper>
  <carousel-track>
    <carousel-item>🖼️ 슬라이드 1</carousel-item>
    <carousel-item>🖼️ 슬라이드 2</carousel-item>
    <carousel-item>🖼️ 슬라이드 3</carousel-item>
  </carousel-track>
</carousel-wrapper>
```

### 2. 자식 태그를 받아들이는 `<slot>` 슬롯 정의

#### A. `<carousel-wrapper>` 정의
```javascript
class CarouselWrapper extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .wrapper { border: 2px solid #3b82f6; padding: 1rem; border-radius: 12px; }
      </style>
      <div class="wrapper">
        <!-- 💡 외부에서 들어온 자식 태그(<carousel-track>)가 쏙 들어가는 구역! -->
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('carousel-wrapper', CarouselWrapper);
```

#### B. `<carousel-track>` 정의
```javascript
class CarouselTrack extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .track { display: flex; gap: 1rem; overflow-x: auto; }
      </style>
      <div class="track">
        <!-- 💡 외부에서 들어온 자식 태그들(<carousel-item>)이 들어가는 구역! -->
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('carousel-track', CarouselTrack);
```

#### C. `<carousel-item>` 정의
```javascript
class CarouselItem extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .item { min-width: 150px; padding: 1rem; background: #e0f2fe; border-radius: 8px; text-align: center; }
      </style>
      <div class="item">
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('carousel-item', CarouselItem);
```

---

## 🧱 방식 2: 바닐라 JS Component 클래스의 `mounted()` 중첩 마운트

브라우저 표준 커스텀 태그를 쓰지 않고, 우리가 직접 만든 `Component` 클래스 구조에서 부모가 자식을 조립하는 방법입니다.

```javascript
import Component from '../core/Component.js';

export default class CarouselWrapper extends Component {
  template() {
    return `
      <div class="carousel-wrapper">
        <!-- 자식 트랙 컴포넌트 마운트 위치 -->
        <div data-component="carousel-track"></div>
      </div>
    `;
  }

  mounted() {
    // 자식 컴포넌트 마운트
    const $trackSlot = this.$target.querySelector('[data-component="carousel-track"]');
    new CarouselTrack($trackSlot, { items: this.props.items });
  }
}
```

---

## 🎯 결론
- **`<CarouselWrapper><CarouselTrack><CarouselItem/></CarouselTrack></CarouselWrapper>`** 형태의 중첩 조립 구조는 브라우저 표준 Web Components의 **`<slot></slot>`** 태그를 활용하면 100% 깔끔하게 동작합니다!
- 이 방식은 디자인 시스템, 캐러셀 슬라이더, 카드로 감싸는 래퍼 컴포넌트 등을 만들 때 가장 유용합니다.
