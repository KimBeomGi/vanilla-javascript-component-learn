# 🐘 기존 PHP, Django, Spring Boot 레거시 프로젝트에 바닐라 JS 컴포넌트 이식 가이드 (`LEGACY_INTEGRATION_GUIDE.md`)

> **"회사 실무 프로젝트가 PHP, Django, Spring Boot (JSP/Thymeleaf), Node.js 기반으로 되어 있나요?"**  
> 전체 사이트를 React로 리팩토링할 필요 없이, 백엔드가 무엇이든 HTML 페이지의 특정 구역(`div`)에 바닐라 JS 컴포넌트를 위젯처럼 부분 이식(Micro-Frontend)하는 실무 기술 지침서입니다.

---

## 🤔 Why? 왜 PHP 모듈 대신 자바스크립트 컴포넌트로 바꿔야 할까요?

| 비교 항목 | 기존 PHP 모듈 방식 (`include 'mod.php'`) | 바닐라 JS 컴포넌트 방식 (`new Component()`) |
| :--- | :--- | :--- |
| **화면 갱신** | 버튼 누를 때마다 **전체 페이지 새로고침(F5)** | 새로고침 없이 **해당 부위만 실시간 재렌더링** |
| **서버 부하** | 간단한 클릭에도 PHP 서버가 HTML 전체 재생성 | 브라우저(클라이언트) 메모리에서 빠르게 처리 |
| **상태 유지** | 입력 폼 값이나 스크롤 위치가 자꾸 초기화됨 | 컴포넌트 `state` 덕분에 입력값과 UI가 완벽 유지 |
| **이식성** | 백엔드 템플릿(PHP/JSP/Django) 언어에 종속됨 | 백엔드가 **Spring Boot, Django, PHP, Node.js, Rails** 무엇이든 **100% 동일 동작** |

---

## 🛠️ 실무 적용 3단계 패턴

### 1단계: PHP 파일(`index.php`)에 마운트 슬롯(Target) 만들기

PHP 서버에서 가지고 있는 데이터(회원 정보, 게시글 ID 등)를 HTML **`data-*` 속성** 또는 **`JSON`**으로 JS 컴포넌트에 넘겨줍니다.

```php
<!-- index.php -->
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>회사 실무 PHP 프로젝트</title>
  <!-- 1. 내 JS 컴포넌트 모듈 불러오기 -->
  <script type="module" src="/assets/js/main.js"></script>
</head>
<body>
  <!-- 기존 PHP 헤더 -->
  <?php include_once './includes/header.php'; ?>

  <main>
    <h2><?php echo $article['title']; ?></h2>

    <!-- 2. 바닐라 JS 컴포넌트가 들어갈 마운트 슬롯 지정 (data- 속성으로 PHP 데이터 전달) -->
    <div id="comment-widget-slot" 
         data-post-id="<?php echo $article['id']; ?>"
         data-user-id="<?php echo $session_user['id']; ?>"
         data-user-name="<?php echo htmlspecialchars($session_user['name']); ?>">
    </div>
  </main>
</body>
</html>
```

---

### 2단계: 자바스크립트 엔트리(`main.js`)에서 마운트하기

```javascript
// /assets/js/main.js
import CommentWidget from './components/CommentWidget.js';

// DOM 준비 완료 시 PHP 마운트 슬롯에 컴포넌트 부착
document.addEventListener('DOMContentLoaded', () => {
  const $slot = document.querySelector('#comment-widget-slot');
  if (!$slot) return; // 해당 페이지에 슬롯이 없으면 실행 안함

  // PHP가 전달한 dataset 데이터 읽기
  const props = {
    postId: Number($slot.dataset.postId),
    userId: Number($slot.dataset.userId),
    userName: $slot.dataset.userName
  };

  // 컴포넌트 마운트!
  new CommentWidget($slot, props);
});
```

---

### 3단계: 컴포넌트 구현 (`CommentWidget.js`)

```javascript
import Component from './core/Component.js';

export default class CommentWidget extends Component {
  setup() {
    this.state = {
      comments: [],
      newCommentText: ''
    };
    this.fetchComments();
  }

  async fetchComments() {
    // PHP API엔드포인트로 비동기 댓글 목록 요청
    const res = await fetch(`/api/get_comments.php?post_id=${this.props.postId}`);
    const data = await res.json();
    this.setState({ comments: data });
  }

  template() {
    const { userName } = this.props;
    const { comments, newCommentText } = this.state;

    return `
      <div class="comment-box">
        <h3>💬 댓글 목록 (${comments.length})</h3>
        <ul>
          ${comments.map(c => `<li><strong>${c.writer}</strong>: ${c.content}</li>`).join('')}
        </ul>
        <form class="comment-form">
          <input type="text" class="input-comment" value="${newCommentText}" placeholder="${userName}님, 댓글을 입력하세요" />
          <button type="submit">등록</button>
        </form>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('submit', '.comment-form', async (e) => {
      e.preventDefault();
      const $input = this.$target.querySelector('.input-comment');
      const content = $input.value.trim();
      if (!content) return;

      // PHP DB로 댓글 저장 요청 (AJAX)
      await fetch('/api/add_comment.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: this.props.postId,
          userId: this.props.userId,
          content
        })
      });

      this.fetchComments(); // 댓글 목록 재갱신
    });
  }
}
```

---

## 🤝 4. 기존 jQuery 코드와의 공존 (이벤트 통신)

기존 프로젝트의 jQuery 이벤트와 내가 만든 JS 컴포넌트 간에 서로 신호를 주고받는 방법입니다.

### 1) jQuery에서 JS 컴포넌트로 신호 보내기 (Custom Event)
```javascript
// 기존 jQuery 코드에서 이벤트 발생
$('#legacy-btn').on('click', function() {
  window.dispatchEvent(new CustomEvent('legacy-event', { detail: { count: 5 } }));
});

// JS 컴포넌트 setEvent()에서 수신
window.addEventListener('legacy-event', (e) => {
  this.setState({ count: e.detail.count });
});
```

---

## 🎯 결론
- 회사 실무 PHP 레거시 프로젝트라도 **전체를 갈아엎을 필요가 전혀 없습니다.**
- 페이지의 특정 구역(`div#slot`)에 만들어 둔 바닐라 JS 컴포넌트를 붙이면, **새로고침 없는 쾌적한 2026년형 현대적 UI**로 즉시 업그레이드됩니다!
