# 🌐 [왕초보 전용] 3분 만에 웹 서버 실행하는 방법 (그림 설명 포함)

> **"파일을 클릭해서 열었더니 `CORS error`나 `Failed to load module` 에러가 나나요?"**  
> 자바스크립트 모듈(`import/export`)은 보안 때문에 그냥 파일을 클릭해서 열면 브라우저가 막아버립니다.  
> 따라서 내 컴퓨터 안에 **가짜 인터넷 주소(`http://localhost:5500`)**를 만들어 주는 **웹 서버**를 켜야 합니다!

---

## ⭐️ 방법 1: VS Code [Live Server] 설치하기 (가장 쉬운 추천 방법 👍)

VS Code를 사용하고 계시다면 버튼 몇 번으로 설치하고 실행할 수 있습니다.

### 1단계: 확장 프로그램(Extensions) 탭 클릭
VS Code 왼쪽 사이드바에서 **네모 4개 모양 아이콘** (단축키: `Ctrl + Shift + X`)을 누릅니다.

### 2단계: `Live Server` 검색 및 설치
검색창에 **`Live Server`**를 입력하고, **Ritwick Dey**가 만든 무지개 타워 아이콘 확장 프로그램의 **[설치(Install)]** 버튼을 누릅니다.

```text
[ VS Code 확장 검색 ]
🔍 Live Server  --->  [ Install ] 버튼 클릭!
```

### 3단계: `index.html` 실행하기
1. 왼쪽 파일 탐색기에서 프로젝트 루트의 **`index.html`** 파일에 마우스 우클릭을 합니다.
2. 메뉴에서 **`Open with Live Server`** (단축키: `Alt + L, Alt + O`)를 클릭합니다.
3. 브라우저가 자동으로 켜지면서 `http://127.0.0.1:5500/index.html` 화면이 나타납니다!

---

## ⭐️ 방법 2: VS Code [Live Preview] 설치하기 (VS Code 내부에서 보기)

브라우저 창을 따로 띄우지 않고 VS Code 안에서 바로 화면을 보고 싶을 때 추천합니다.

1. VS Code 확장 탭(`Ctrl + Shift + X`)에서 **`Live Preview`** (Microsoft 공식) 검색 후 설치!
2. `index.html` 우클릭 ➔ **`Live Preview: Show Preview`** 클릭!
3. VS Code 오른쪽에 웹 화면이 바로 뜹니다.

---

## ⭐️ 방법 3: 터미널 명령어 한 줄로 켜기 (npx)

1. VS Code 상단 메뉴 ➔ **[터미널(Terminal)]** ➔ **[새 터미널(New Terminal)]**을 엽니다.
2. 아래 명령어를 치고 `Enter`를 누릅니다:
   ```bash
   npx serve .
   ```
3. 터미널에 뜨는 `http://localhost:3000` 주소를 `Ctrl + 클릭` 하면 브라우저가 열립니다!

---

## ❓ 자주 하는 질문 (FAQ)

> **Q. 웹 서버를 껐다가 다시 켜려면 어떻게 해야 하나요?**  
> VS Code 맨 아래 파란색 상태 바 오른쪽 끝에 있는 **`Go Live`** 버튼을 누르면 켜지고, 클릭하면 꺼집니다!
