# NextJS Introduction

## NEXT.JS 필기

처음 페이지 로딩시 많은 스크립트를 로딩해야함. 그치만 페이지가 로딩됐을 때, react.js가 넘겨받아 잘 작동함.

페이지를 처음 열면 html을 처음으로 보여주고, react.js가 전송됐을 때, react.js앱이 된다. react.js를 프론트엔드 안에서 실행하는 것을 hydration이라 부름.
Next.js는 react.js를 백엔드에서 동작시켜 이 페이지를 미리 만들고, 이게 component들을 render시킴. 유저가 처음 웹사이트를 켜면 초기상태의 component로 미리 생성된 html페이지를 보게 되고, ineraction 일어나면 react.js가 받아서 작동함.
js비활성화하더라도 기본적인 웹페이지틀은 보임.

#### Development ~ production

Development : typescript & ESLint통합, 빠른 Refresh 등 개발자 경험향상을 목표로 하는 기능 제공

Production : 최종 사용자와 애플리케이션 UX최적화. 코드 변환해 성능과 접근성 높이는 목표
-> Next.js컴파일러 : Next.js가 이런 대부분의 코드변환, 기본 인프라를 처리해 production으로의 이동을 도와줌.

#### Compile

개발자에게 더 친숙한 언어로 코드 작성. 브라우저에서 이해하기 전에 js로 컴파일 해야함.

컴파일이란 한 언어로 이루어진 코드를 가져와 다른 언어 혹은 해당 언어의 다른 버전으로 출력하는 프로세스를 의미. Next.js에서의 컴파일은 코드를 편집할 때 개발단계에서 발생하며 production을 위해

#### Minifying

사람의 가독성에 최적화되도록 주석, 공백, 들여쓰기 등의 불필요한 서식 및 주석을 제거하는 프로세스. 파일 크기 줄이고 프로그램 성능 향상시킴.
Next.js에서는 js및 css파일이 production을 위해 자동으로 축소됨.

#### Bundling

어플리케이션은 모듈, 구성요소, 기능으로 분할할 수 있는데, 이러한 내부 모듈과 타사 패키지를 내보내고 가져오면 복잡한 웹이 만들어지게 될 수 있음. 번들링은 사용자가 웹페이지를 방문할 때에 파일에 대한 요청수를 줄이기 위해 웹 종속성을 해결하고 파일(모듈)을 브라우저에 최적화

Code Splitting - Improve the application’s initial load - Only load the required code for an entry point(진입점)

- splitting없는 CSR은 모든 페이지 정보를 가져와 비효율적. 첫 페이지 로딩 더 느려지고, 네트워크 트래픽 자원 더 소모함. 이를 해결해주는 기술로 필요한 페이지 정보만 그때마다 가져와 첫 로딩속도가 빨라 UX적으로 좋고 네트워크 자원면에서도 효율적.

#### Build Time & Run Time

빌드시간은 production용 준비하는 일련 단계에 지정된 이름. 빌드시 Next.js는 최적화된 파일로 변환해 서버에 배포하고 사용자가 사용할 수 있도록 하는데 이에 - 정적으로 생성된 HTML파일, 서버에서 페이지를 렌더링 하기위한 JavaScript코드, 클라이언트에서 페이지를 interactive하게 만드는 JavaScript코드, CSS파일들이 포함됨
런타임(요청시간)은 빌드 및 배포 후 사용자의 요청에 대한 응답으로 애플리케이션이 실행되는 기간을 의미.

#### Client and Server

클라이언트는 요청을 서버에 보내는 사용자의 브라우저를 의미. 이후 서버에서 받은 응답으로 사용자가 interact할 수 있는 인터페이스를 보여줌
서버는 코드를 저장하고, 클라이언트로부터 요청을 수신하고, 이에 응답을 보내고, 계산을 수행하는 data center의 컴퓨터를 의미

#### Rendering

UI에 React로 짠 코드들을 html로 convert(변환)하는데 필수인 작업. 렌더링은 서버 or 클라에서 수행될 수 있고, 빌드시 미리 수행되거나 런타임시 모든 요청에서 발생 가능. Next.js에서는 SSR, SSG, CSR세가지 다 가능

Pre-Rendering : Server-Side Rendering, Static-Side Generation은 결과가 클라이언트로 전송되기 전에 외부데이터를 가져와 React Component들을 HTML로 변환하기 때문에 Pre-Rendering이라고도 한다.

Client-Side Rendering and Pre-Rendering : 표준 React 어플리케이션에서 브라우저는 UI구성을 위한 JS instruction과 함께 서버로부터 빈 HTML셀을 받는다. 초기 렌더링 작업이 사용자의 디바이스에서 발생하기에 이를 Client-Side Rendering이라고 한다.

- Next.js어플리케이션에서 데이터골라 fetch해오는 React의 useEffect()나 useSWR같은 데이터 fetching훅은 특정 컴포넌트에 대해 클라이언트사이드렌더링을 사용하도록 선택할 수 있다.

대조적으로 Next.js는 기본적으로 모든 페이지를 Pre-Rendering한다. 이는 HTML이 사용자 장치에서 JavaScript로 모두 수행되는 대신 서버에서 미리 생성된다. 실제로 이것은 완전히 클라이언트측 렌더링된 앱의 경우 렌더링 작업이 완료되는 동안 빈페이지가 표시됨.

#### Server-Side Rendering

페이지의 HTML이 서버로의 각 요청마다 생성됨. 페이지를 interactive하게 만들기 위해 생성된 HTML, JSON data, JavaScript Instruction들이 클라이언트로 전송됨.

Client에서 HTML은 빠른 interactive하지 않은 페이지를 표시하는 데 사용되는데, React는 JSON data와 JS instruction을 사용해 컴포넌트를 interactive하게 만듭니다(ex: button - event handler연결) 이 과정을 hydration이라고 부름. Next.js에서는 getServerSideProps를 사용해 SSR페이지를 선택할 수 있다.

Client-side Rendering : 브라우저가 유저가 보는 UI를 만드는 모든 것을 한다는 의미. JS코드를 가져와 보여줌
느리고, js가 비활성화되어있으면 못봄

#### Static Site Generation

런타임에 서버가 필요없음. 대신 배포될 때 빌드시 컨텐츠가 한번 만들어지고 HTML은 CDN에 저장되고, 각 요청에 재사용됨.

---

Network
애플리케이션 코드가 저장되고 실행될 때, 그게 네트워크에 배포되는 것을 아는 것이 좋다. 네트워크는 리소스를 공유하는 연결된 컴퓨터나 서버로 생각할 수 있다. Next.js의 경우 Origin servers, Content Delivery Networks, the Edge가 있다.

Origin Servers

Content Delivery Network

the Edge
next/script는 third-party scripts를 로딩하는걸 단순화해줌

next/image는 image resizing과 optimizing을 단순화해줌

Next.js 지원하는 스타일링 방식 : CSS모듈, Sass, styled-jsx. styled-components는 기본적으로 지원하지 않음

전역 CSS파일은 pages/\_app.js내부에서만 import가능

CSS module이 유용한 이유는 컴포넌트레벨에서 스타일을 지정하기 때문이다.

클래스이름은 텍스트로 X js object의 property로. 실제 클래스네임은 nav아님. NavBar*nav*무작위 =>
다른 컴포넌트에서 nav라는 클래스 이름을 사용할 수 있도록 하고, 이 모듈내에 다른 클래스 이름이 존재하면 모두 무작위 이름으로 작성됨.

request에 mask를 씌우듯 redirect와 rewrite로 API_KEY를 숨길 수 있음.

contact로 들어가면 form으로 가지도록 해주는 redirect기능.

Pattern matcing기능도 지원

SSR => 오직 absolute url만 지원된다 는 오류 봄 front에서만 작동되는 주소라 서버에선 작동X 브라우저에 이미 url이 잇으니 localhost추가해주기

client에서 reactJS가 프론트의 주도권을 다시 가질거임. nextJS가 props의 data를 주고 ( 백엔드에서 받아온 movies정보들) return해서, 그러면 reactJS가 저 props를 가져와 result arr를 뽑아주는 거임.

page가 유저에게 보여지기 전에 prop를 받아오는 function을 만들어 return되는 걸 우리 페이지의 props로 사용하겠다.
이 방식은 로딩은 없되 API load가 느리다면 유저가 아무것도 못보고 오래 기다려야하는 단점이 있음.

NavBar footer, loading을 보여주며 기다리기 vs loading화면 없이 API 전부 로드되길 기다린 후 모두 보여주기

---

- 라이브러리는 메소드를 모아둔것
- 코드를 재사용 메소드
- 메소드를 재사용하는게 객체
- 객체를 효율적으로 관리하는게 디자인 패턴
- 디자인 패턴을 확실히 정해놓은게 프레임워크

---

4.13
Css module => component단위로 스타일적용가능

Javascript비활성화시 뜨는 화면

Pre-rendering 장점 : SEO(검색엔진최적화) 향상. JS없이 application작동은 함. 대신 interactive X.
pre-rendering엔 두가지 있음.

Static Generation : build time에 HTML을 생성. 이 HTML은 각 요청마다 재사용.
Server-side Rendering : 각 요청마다 HTML을 만들어내는 방식.

CDN이란? Content Delivery Network : 지리적으로 분산된 여러 개의 서버. 유저와 가까운 곳에서 전송함으로써 전송 속도 빠르게.
ATM이라 생각하면 좋다. 은행에서 기다릴 필요 없이 빠르고 효율적으로 현금을 찾을 수 있음.
지연시간을 줄이는 게 목적.

Next.js란? React에서 SSR을 지원하기 위한 프레임워크?

SPA는 하나의 페이지로 모든 것을 조작하는 웹페이지이다. 서버의 필요한 데이터가 있을 때에만 요청하고 기존 JS파일 내의 DOM조작으로 UI를 부분부분 변경.
SPA(single page app)는 기본적으로 CSR사용해 동작.

Static Generation이 더 빠름. 근데 유저 요청에 pre-render를 할 수 없을 땐 좋지 않음. 페이지가 자주 업데이트되는 데이터를 보여주거나 모든 요청에 페이지 컨텐츠를 바꾸는 경우.

getStaticProps : server-side에서만 실행됨. DB queary같은 코드도 작성 가능.
페이지에서만 허용. <= 페이지가 렌더링되기 이전에 react에 필요한 모든 데이터가 있어야 함.

요청시간에 데이터를 가져와야 하는 경우에는 SSR or pre-rendering을 건너뛰면 됨.

빌드시간이 아닌 요청시간에 데이터를 가져와야 하는 경우 Server-Side Rendering사용 가능.

getServerSideProps : 요청시간에 데이터를 가져와야만 하는 페이지를 pre-render할때만 사용해야한다. Time to First Byte 느릴것이다. Static보다. 서버가 모든 요청에 대해 계산해야하고, CDN에서 결과를 캐시할 수 없어서..

CSR은 데이터를 미리 렌더링할 필요가 없는 경우 사용 가능. 외부 데이터 필요없는 페이지의 부분을 정적으로 생성한다. 이후 페이지가 로드되면 JS로 클라이언트에서 외부데이터를 가져오고 나머지를 채움. [SEO관련없는 페이지의 경우]

Next.js뒤의 팀은 데이터를 가져오는 SWR라는 리액트 훅을 만듬. 클라이언트에서 데이터를 가져올 때 추천. 캐싱, revalidation, focus tracking, refetching on interval 등등에 사용됨.

---

## SSR적용방안!

일단 CSR방식은 useEffect를 사용해 컴포넌트가 마운트 됐을 때 데이터를 가져오고, 가저ㅕ온 데이터를 화면에 뿌려주는 방식으로 사용.
페이지 진입시 useState에서 선언한 변수에 초깃값을 담거나 아무것도 담지 않을텐데, 이 때문에 UX를 고려해 데이터를 다 받아올 때까지 따로 로딩창을 만들어주고는 했다.

해당 문서에 출력되는 데이터들이 항상 고정된 형식과 내용이라면 요청마다 HTML문서를 만들어서 반환하는 방식은 비효율적이다. 따라서 첫 요청에 대해 static HTML문서를 생성후 재활용하는 방식이 SG방식이고 이는 서버에서 미리 처리한 완성된 HTML문서를 반환하기 때문에 SEO적용에 용이하다.
getStaticProps라는 비동기 함수 선언, axios요청, props return.

SSR은 getServerSideProps라는 비동기함수를 export. getStaticProps와 비슷한 형태인데, 인자를 하나 받는다. params에 접근하는데 이는 라우터로 전달된 즉 경로에 접근해 파라미터에 담긴 값들에 또다시 접근 가능. 클릭된 id정보를 가져옴.
다이나믹 라우트의 예시임. 근데, SSR에서도 SG를 적용해 상세 페이지를 미리 정적 생성하고 싶을 수 있는데 이때 사용하는 비동기함수가 getStaticPaths이다.

Q :`pages/products/[id].js`경로의 product page를 동적으로 만들고 싶다. ([id]는 특정 product ID를 의미) 이를 구현하는 올바른 방법은?
A : getStaticPaths를 사용해 product ID들의 배열을 가져오고 getStaticProps를 사용해 각 product의 데이터를 가져온다.

Develop : next.js로 코드 작성. Hot reloading기능을 쓰려고 Next.js 개발서버사용.
Preview : github branch에 변경사항 푸시. URL통해 사용가능한 미리보기 배포 만듬. 피드백을 위해 이 미리보기 URL을 다른사람과 공유 가능. 코드 검토 + 배포미리보기 가능
Ship : We’ve merged the pull request to main to ship to production.

CSR 방식의 SPA 에서 SSR을 Next를 이용해 적용하는 법을 간단하게 살펴보았다. Next는 SSR을 다시 SSR과 SSG 라는 개념으로 pre-rendering을 지원하고 있고 크게 두 가지 방식을 어떻게 구현하는지와 어떤 차이가 있는지 살펴보았다.
최종 정리하면 다음과 같다.

굳이 SEO 적용 또는 데이터 pre-rendering이 필요 없다면 CSR 방식
정적 문서로 충분한 화면이면서 빠른 HTML 문서 반환이 필요하다면 SSG 방식
매 요청마다 달라지는 화면이면서 서버 사이드로 이를 렌더링 하고자 한다면 SSR 방식
이 외에도 NEXT가 가지고 있는 기능은 다양하다.

React 에서는 별도의 npm library인 react-helmet을 설치해서 SPA의 meta 태그들을 수정하는 반면, NEXT는 \_document.js 에서 기본설정 후 각 컴포넌트에서 필요한 메타 태그들을 직접 수정할 수도 있고, pages 폴더 내부의 파일들은 기본적으로 코드 스플리팅이 적용되어 렌더링된다. 또한 CSR/SSR/SSG 외에도 ISR(Incremental Static Regeneration)에 대한 개념도 있고 Serverless 방식과 유사한 API 서버 활용 등 제대로 그 쓰임을 익힌다면 개발 시 유용하게 사용할 기능이 다양하다.

---

## 번외) 왜 CSS-in-JS를 사용할까?

위에 작성된 내용과 종합하여 정리하면 아래와 같다.
component로 만들어 재사용
중복되는 className 해결 (Global namespace)
자바스크립트에서 쓰이는 상수, props, 함수 공유하기
상속에 의한 영향이 없도록 격리 (Isolation)
미사용 코드 처리 (Dead Code Elimination)
어떤 글을 보면 CSS-in-JS로 ‘디자이너와 협업을 더 원활하게 할 수 있다’고 되어있다. 하지만 개인적으로 CSS-in-JS는 단순히 개발자들이 더 편하게 쓰기 위해 생긴 것이지, 디자이너와 협업을 위해 만들어진 것이 아닌 것 같다. 디자이너에게 가서 CSS-in-JS를 보여주면 어떻게 사용하는지 모르는 사람이 대부분일 것이라 생각한다.
또한, className을 짓지 않아도 된다는 장점이 있다고 하지만, 결국 사용해야 할 이름을 지어야 하는 건 똑같다. 하지만 scope가 있어서 다른 곳에서 중복으로 이름을 사용가능한 장점은 있다.

---

### 5.11

next.js에서 /movies/all url만들고 싶으면 pages에 movies폴더를 만들어 all.js파일을 만들어주면 된다.
그럼 /movies링크를 만들고 싶다면? movies.js를 만들지 말고, movies폴더 안에 index.js를 만들어주면 /movies로 맵핑됨.

[id].js로 dynamic url만들 수 있는데, 이는 const router = useRouter();의 router를 콘솔에 찍어보면 query부분에 id property에 “movies/*” url의 *부분이 담겨있는 것을 확인할 수 있다.

### 5.12

시크릿모드로 접속시 에러 발생. pre-render되기 때문에 server에서 미리 렌더되는데 이 때, router.query.params가 서버에서 아직 배열이 아니라서
const [title, id] = router.query.params || [];
이렇게 바꿔주면 에러가 사라짐. CSR만 해준거임.
그래서
소스코드에서 영화제목 텍스트를 찾을 수 없음. getServerSideProps를 사용하면 request와 영화제목 정보를 얻을 수 있음!!

유저에게 로딩 절대 안보여주고 SEO에 아주 최저고하되게 만들고 싶다면 getServerSideProps를 사용하면 된다~
API로 fetch해오는 목적이 아니라 데이터를 좀 더 빠르게 가져오기 위함.

이전에는 Detail컴포넌트 내부에서 router 사용했음
하지만 컴포넌트 내부에 있는 router는 Client-Side에서만 실행됨.
만일 URL에 들어있는 영화제목을 사용해 구글 SEO에 최적화하고, 유저가 접속하기 전에 탭 제목을 바꾸고 싶고, 기본적으로 이 페이지를 pre-render하고 싶다면 Server-Side에서 정보를 얻기위해 getSSP실행하면 됨.
