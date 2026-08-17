# 🎨 [나도 가능!] 바닐라 JS 컴포넌트에서 Tailwind CSS 사용 가이드 (`TAILWIND_GUIDE.md`)

> **"별도의 Node.js 설치나 빌드 과정 없이, 바닐라 JS 컴포넌트에서 Tailwind CSS 유틸리티 클래스를 1초 만에 사용하는 가이드입니다."**

---

## ⚡ 1. 가장 빠른 방법: Tailwind CDN 연동 (추천 👍)

`index.html` 파일의 `<head>` 태그 안에 스크립트 1줄만 넣으면 즉시 사용할 수 있습니다.

### `index.html`
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Tailwind JS Component App</title>
  <!-- 💡 Tailwind Play CDN 1줄 추가! -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./src/main.js"></script>
</body>
</html>
```

---

## 💻 2. 내 컴포넌트 `template()`에서 사용하기

컴포넌트 클래스의 `template()` 메서드 내부에서 Tailwind 유틸리티 클래스를 그대로 사용하시면 됩니다.

```javascript
import Component from '../core/Component.js';

export default class Card extends Component {
  template() {
    const { title, content } = this.props;

    return `
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 hover:shadow-lg transition">
        <h2 class="text-xl font-bold text-gray-900 mb-2">${title}</h2>
        <p class="text-gray-600">${content}</p>
        <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          자세히 보기
        </button>
      </div>
    `;
  }
}
```

---

## ⚠️ 3. Web Components (Shadow DOM) 사용 시 주의사항

- **Step 01 ~ 07 (일반 Component 클래스)**: CDN만 넣으면 100% 스타일이 잘 적용됩니다!
- **Step 08 (Shadow DOM 적용 컴포넌트)**: Shadow DOM은 스타일 캡슐화 특성 때문에 바깥 `<head>`의 Tailwind CDN 스타일을 블록합니다. Shadow DOM 안에서 쓰려면 Shadow DOM 템플릿 내부에 `<link rel="stylesheet">`를 포함하거나 일반 DOM Custom Element로 사용하세요.

---

## 🎯 결론
바닐라 JS 컴포넌트 프로젝트에서도 **Tailwind CSS를 사용하는 데 0.001%의 문제나 제약도 없습니다.** CDN 1줄만 넣고 편하게 예쁜 스타일을 입혀보세요!
