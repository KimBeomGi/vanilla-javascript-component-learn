# Step 03: 이벤트 위임 (Event Delegation) 패턴

> **"아파트 세대수 1,000집마다 알림벨을 부착하시겠습니까, 아니면 정문 경비실에 경비원 1명을 두시겠습니까?"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 이벤트 버블링(Bubbling) 현상을 이용해 부모 태그 1개에만 이벤트를 거는 **이벤트 위임** 패턴을 배웁니다.
2. 화면을 다시 그릴 때마다 이벤트 핸들러가 중복 등록되던 **메모리 누수 버그**를 완전히 해결합니다.
3. 부모 클래스에 `addEvent()` 헬퍼 메서드를 만들어 깔끔하게 이벤트를 연결합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/src/core/Component.js`**: `addEvent(eventType, selector, callback)` 메서드 내부에서 `event.target.closest(selector)` 조건문 완성하기
2. 2️⃣ **`exercise/src/components/TodoList.js`**: `setEvent()` 안에서 `this.addEvent()`를 불러서 삭제/체크 이벤트 연결하기
3. 3️⃣ **`exercise/index.html`**: 라이브 서버를 구동하고 할 일 추가/삭제 시 부드럽게 작동하는지 확인하기

---

## 💡 주요 개념 및 보조 설명 (Supplementary Explanations)

### 1️⃣ 이벤트 위임이 필요한 이유와 경비원 비유

#### 📌 주 설명
- 리스트 아이템이 1,000개일 때 개별 `<li>`마다 `addEventListener`를 걸면 브라우저 메모리가 과부하됩니다.
- 부모 태그(`this.$target`) 정문에 경비원 1명을 두고, 이벤트가 위로 보글보글 올라올 때(버블링), `event.target.closest(selector)` 조건으로 내가 원하는 요소인지를 확인하여 가려냅니다.

#### 💡 보조 설명: ❌ 매번 이벤트 등록 vs ⭕ 이벤트 위임 코드 비교
```javascript
// ❌ 개별 등록 방식 (render()가 불릴 때마다 이벤트 핸들러가 계속 중복 등록되어 메모리 누수 발생!)
render() {
  this.$target.innerHTML = `<ul><li class="item">할일 1</li>...</ul>`;
  // 💥 render()가 100번 불리면 addEventListener도 100번 중복 등록됨!
  this.$target.querySelectorAll('.item').forEach($el => {
    $el.addEventListener('click', () => { ... });
  });
}

// ⭕ 이벤트 위임 방식 (생성자 시점에 부모 $target에 단 1번만 이벤트를 등록하여 깔끔 해결!)
addEvent(eventType, selector, callback) {
  this.$target.addEventListener(eventType, (event) => {
    if (!event.target.closest(selector)) return false;
    callback(event);
  });
}
```

---

## 🔑 자가 점검 체크리스트
- [ ] 부모 요소 1개에만 이벤트 리스너가 등록되는지 확인하셨나요?
- [ ] `closest(selector)` 가 클릭된 요소 주변 조상을 탐색한다는 점을 이해하셨나요?
- [ ] 막히면 `solution/` 폴더 파일과 내 코드를 비교해 보세요!
