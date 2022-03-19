# 견적요청서 확인 페이지
👉 [사이트 바로가기](https://project-capa.herokuapp.com/) <br>
👉 [회고록 바로가기](https://velog.io/@suyeon-hong/%EC%9B%90%ED%8B%B0%EB%93%9C%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9%EC%BD%94%EC%8A%A4-2%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0-1)

<br>


### 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/2week_RequestAQuoteDashboard.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start // json-server 실행
$ yarn start:dev // localhost 실행
```
<br>

### 🔥 프로젝트 과정 소개
| [코딩 컨벤션 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) | [깃허브 작성 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) |
|--|--|
|![1](https://user-images.githubusercontent.com/78653426/152985098-26a0af22-9186-4d1b-b302-ef5246f85b29.png)|![3](https://user-images.githubusercontent.com/78653426/152985107-45acb775-a967-4e8d-a0d9-271171369fed.png)|
|![2](https://user-images.githubusercontent.com/78653426/152985104-7c2ac57a-1491-4d2f-90cf-3d1ae24c6799.png)|![4](https://user-images.githubusercontent.com/78653426/152985109-90d48190-b379-481d-aa1f-66ed1f86e581.png)|


<br>

### 📝 기능 목록 명세
- base, domain 컴포넌트 각자 작업 진행
- 이후부터 팀원이 모두 모여 실시간 페어프로그래밍 진행
#### ✔ 김지영
- 프로젝트 기초 세팅
- Heroku 배포
- `Dropdown`, `Dropdowns` 컴포넌트 구현

#### ✔ 고병표
 - `Card` 컴포넌트 구현

#### ✔ 유제호
- `Header`, 반응형 구현
- 체크리스트 상태값에 따라 카드 필터링 로직 구현

#### ✔ 홍수연
- `Button`, `Toggle`, `EmptyBox` 컴포넌트 구현
- 모바일 UI 적용

<br>

### 📈 디렉토리 구조
```
.
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── index.html
│   ├── robots.txt
│   └── static
├── config-overrides.js
├── package.json
├── public
│   ├── index.html
│   └── robots.txt
├── server
│   ├── db.json
│   └── index.js
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── index.tsx
│   ├── models
│   ├── pages
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
│   ├── styles
│   └── utils
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```
