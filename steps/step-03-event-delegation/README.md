# Step 03: 이벤트 위임 (Event Delegation) 패턴

> **"아파트 세대수 1,000집마다 알림벨을 부착하시겠습니까, 아니면 정문 경비실에 경비원 1명을 두시겠습니까?"**

---

## 🎯 학습 목표 (무엇을 배우나요?)

1. 이벤트 버블링(Bubbling) 현상을 이용해 부모 태그 1개에만 이벤트를 거는 **이벤트 위임** 패턴을 배웁니다.
2. 화면을 다시 그릴 때마다 이벤트 핸들러가 계속 중복 등록되던 **메모리 누수 버그**를 완전히 해결합니다.
3. 부모 클래스에 `addEvent()` 헬퍼 메서드를 만들어 깔끔하게 이벤트를 연결합니다.

---

## 📋 1-2-3 실습 순서 (무엇부터 하나요?)

1. 1️⃣ **`exercise/src/core/Component.js`** 열기: `addEvent(eventType, selector, callback)` 메서드 내부에서 `event.target.closest(selector)` 조건문 완성하기
2. 2️⃣ **`exercise/src/components/TodoList.js`** 열기: `setEvent()` 안에서 `this.addEvent()`를 불러서 삭제/체크 이벤트 연결하기
3. 3️⃣ **`exercise/index.html`** 열기: 할 일을 추가하고 삭제해 보며 이벤트가 부드럽게 잘 터지는지 확인하기

---

## 💡 경비원 비유로 이해하는 이벤트 위임

### 1️⃣ 왜 부모 요소 1개에만 이벤트를 거나요?
- **기존 방식의 문제점**: 리스트 아이템이 1,000개일 때 개별 `<li>`마다 `addEventListener`를 걸면 브라우저 메모리가 터집니다. 게다가 `setState`로 화면을 다시 그리면 예전 이벤트 핸들러가 메모리에 남아 엉킵니다!
- **이벤트 위임 해결책**: 부모 태그(`this.$target`) 정문에 경비원 1명을 두고, 클릭 이벤트가 아래에서 위로 보글보글 올라올 때(버블링), "너 내가 찾는 삭제 버튼(`selector`) 맞니?"(`closest`)를 물어보고 처리합니다!

### 💻 `addEvent` 헬퍼 메서드 코드 한 줄 한 줄 풀이
```javascript
addEvent(eventType, selector, callback) {
  // 부모 태그($target) 정문에 경비원 1명(이벤트 리스너)을 딱 1번만 세웁니다!
  this.$target.addEventListener(eventType, (event) => {
    // 클릭된 요소(event.target) 근처에 내가 찾는 selector가 없으면 거절!
    if (!event.target.closest(selector)) return false;
    // 내가 찾는 요소가 맞으면 지정한 콜백 함수 실행!
    callback(event);
  });
}
```

---

## 🔑 자가 점검 체크리스트
- [ ] 부모 요소 1개에만 이벤트 리스너가 등록되는지 이해하셨나요?
- [ ] `closest(selector)` 가 클릭된 요소 주변 조상을 찾아주는 역할을 한다는 것을 확인하셨나요?
- [ ] 막히면 `solution/` 폴더 파일과 내 코드를 비교해 보세요!
