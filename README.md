# 📭[KODA] 설문조사 웹 어플리케이션 
<br>
<img src="https://user-images.githubusercontent.com/93697790/210754031-b80985e9-1b2d-4a35-ba1c-902ef7b8a663.png" width="1440" alt="no-img">
<br>

## 👉 [KODA 노션](https://grey-crawdad-d3a.notion.site/b39e3ce30a8a4790b37b6d7fed732932)

## BPS Form – Survey Tool 프로젝트

 Survey Tool 프로젝트로 서비스 설문조사 툴을 이용함에 따라 발생할 수 있는 개인정보 보호 이슈를 방지하고 고객 정보 및 응답 데이터를 자산화하기 위해 **내부 서베이 툴**을 구현했습니다.

**유저 플로우** : 매니저 로그인 👉 템플릿 선택 👉 에디터 제작 👉 설문지 전송 👉 응답자 설문지 응답 👉 통계 확인

### 프로젝트 기간

- 프로젝트 구현 : 22.9.19 ~ 22.10.13


---

### FE

<table>
  <tr>
    <td>
      <a href="https://github.com/Joeunji0119">
            <img src="https://avatars.githubusercontent.com/u/95282989?v=4" width="100px"/>
        </a>
    </td>
    <td>
      <a href="https://github.com/CodyMan0">
          	<img src="https://ca.slack-edge.com/TH0U6FBTN-U03JHMEQ02X-6cffc3092879-512" width="100px" />
        </a>
    </td>
  </tr>
  <tr>
    <td><b>조은지</b></td>
    <td><b>이주영🔰</b></td>
  </tr>
  <tr>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
  </tr>
</table>

[프론트 깃허브로](https://github.com/kolonDT/202209_wecode_fr)

### BE

<table>
  <tr>
    <td>
    	 <a href="https://github.com/Mjj4682">
          <img src="https://avatars.githubusercontent.com/u/105341553?v=4" width="100px"/>
        </a>
    </td>
     <td>
    	 <a href="https://github.com/sockwon">
          <img src="https://avatars.githubusercontent.com/u/88824305?v=4" width="100px"/>
      </a>
    </td>
  </tr>
  <tr>
    <td><b>문정진</b></td>
    <td><b>이석원</b></td>
  </tr>
  <tr>
    <td><b>Back-End</b></td>
    <td><b>Back-End</b></td>
  </tr>
</table>

[백앤드 깃허브](https://github.com/kolonDT/202209_wecode_en)
<br>
<br>

## 🧰 Front-end 기술 Tools 기술 스택

<div align=left>
  <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/>&nbsp;
  <img src="https://img.shields.io/badge/React.js-58c3cc?style=flat-square&logo=React&logoColor=white"/>&nbsp;
  <img src="https://img.shields.io/badge/React.js-58c3cc?style=flat-square&logo=React&logoColor=white"/>&nbsp;
  <img src="https://img.shields.io/badge/CRA-58c3cc?style=flat-square&logo=Create-React-App&logoColor=white"/>&nbsp;
  <img src="https://img.shields.io/badge/React Router Dom-gray?style=flat-square&logo=React-Router&logoColor=F6BB43"/>&nbsp;
  <img src="https://img.shields.io/badge/eslint-000066?style=flat-square&logo=eslint&logoColor=white"/>&nbsp;
  <img src="https://img.shields.io/badge/prettier-00CC00?style=flat-square&logo=eslint&logoColor=white"/>&nbsp;
  <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp;
  <img src="https://img.shields.io/badge/Notion-1c1c1c?style=flat-square&logo=Notion&logoColor=white"/> &nbsp;
  <img src="https://img.shields.io/badge/Slack-553830?style=flat-square&logo=Slack&logoColor=white"/> &nbsp;
  <img src="https://img.shields.io/badge/Gather-8B00F?style=flat-square&logo=Gather&logoColor=white"/>&nbsp;
</div>
<br>
<br>

## 코다 주요 기능

- **로그인** 🤝
  - 관리자 직급에게 아이디와 비밀번호 권한을 부여하여 일반 로그인 가능
- **서베이 확인하기**✅
  - 로그인 후 메인 페이지로 이동, 전체 서베이를 최신순으로 조회 가능
  - 각 서베이 응답자 수 조회 가능
  - 전체 / 대기중 / 진행중 / 완료 카테고리 별로 투표글을 필터링 조회 가능
  - 필터와 함께 서베이 제목으로 서치 가능
  - 진행중인 서베이 강제 종료 가능 (해당 서베이 종료 날짜를 앞당겨 종료 처리,  조회 가능)
  - 서베이 삭제 가능 (데이터 삭제 기능)
- **서베이 만들기**💬
  - 새로운 설문지 혹은 템플릿을 제공하여 설문지 제작 가능
  - 선택 항목 중 필요한 항목을 사용하여 설문지 커스텀 기능
  - 필수적인 정보는 유효성 검사를 통해 사용자에게 알려주는 기능
  - 중복 여부와 익명 여부 랜딩 페이지를 커스텀할 수 있도록 관리자 기능
- **커스텀 랜딩 페이지 지정하기**🆓
  - 유료 서비스 중 하나인 랜딩 페이지 url 기능을 무료로 사용 가능 
- **서베이 공유하기**📖
  - 서베이 제목 클릭시 응답자 설문이 담긴 링크 확인 가능
  - 링크 복사 기능
- **통계 확인하기**👤
  - 서베이 제목 / 응답자 수 / 상태 확인 가능
  - 응답자 정보 (이름, 핸드폰 번호) 확인 가능
  - 서베이 각 항목 응답률 확인 가능
<br>  

  
## 🔧 **기술적 의사결정**

| 사용 기술 | 기술 결정 이유 |
| --- | --- |
| **`react-hook-form`** | react-hook-form vs SurveyJs<br><br>설문지를 JSON 형식으로 백앤드와 주고 받아야했습니다.survey.js를 활용하면 JSON 형식으로 데이터를 쉽게 만들 수 있고 UI로도 보여줄 수도 있었지만, 비용이 든다는 문제가 있었습니다. 또한 최소 10개 이상의 input이 있는 설문지 제작 페이지에서 렌더링 이슈를 문제를 해결해야 했습니다. 따라서 비제어 컴포넌트 방식을 구현된 react-hook-form을 활용하여 렌더링 이슈와 설문지를 JSON 형식으로 만들기로 했습니다. |
| **`recharts`** | nivo vs Recharts<br><br>내부에서 상업용으로 쓰일 수 있기 때문에 최대한 오픈 소스를 사용하고자 했습니다.이에 차트 라이브러리인 nivo 와 Recharts 고민했고, nivo는combined charts를 제공해주지 않는다는 점을 고려해 가장 많이 쓰이는 Recharts를 사용하기로 결정했습니다. |
| **`Axios`** | Axios vs JS Fetch API<br><br>response timeout (fetch에는 없는 기능) 처리 방법이 존재 Promise 기반으로 만들어졌기 때문에 데이터를 다루기 편리합니다. 브라우저 호환이 fetch보다 뛰어나기 때문에 웹을 염두한 코다 서비스에 적합하다고 생각했습니다. |
| **`Styled components`** | CSS-in-JS vs CSS-in-CSS<br><br>css를 파일 분리 없이 유지 보수 할 수 있는점이 장점이라 생각했습니다. props나 state에 따른 동적 스타일링이 가능합니다. 그 중 점유율이 높은 styled components를 사용하기로 결정했습니다. |

---

## 기여한 부분

### 로그인, 메인 페이지, 링크 페이지, 통계 페이지, 공통 모달


#### 로그인

<img src="https://blog.kakaocdn.net/dn/RfO5u/btrO90qoqOd/2e9QYTSYRKlsFzcvmBrMTK/img.gif" width="600px">

```jsx
export const QUESTION_ARRAY = (sortIndex, formId, ...args) => {
  return {
    1: (
      <MultipleSingle
        sortIndex={sortIndex}
        question={args[0]}
        option={args[1]}
        onRemove={args[2]}
        formId={formId}
      />
    ),

    2: (
      <MultipleMultiple
       ...
      />
    ),

    3: (
      <ShortDescription
      ...
      />
    ),
```
id, password 값을 state 하나로 객체에 담아서 관리했고 이 값들을 body에 담아보냈습니다. 후에 response 값에서 adminToken이 있을 경우 token을 로컬스토리지에 저장했습니다. form 태그를 사용했기 때문에 submit이 동작했을 때 새로고침되지 않기 위해 `e.preventDefault`를 사용했습니다.

`disabled` 속성을 사용해 각각 아이디, 비밀번호 4글자 이상 입력할 시 버튼이 활성화 되도록 했습니다.

<br>
<br>

#### 메인 페이지 전체 기능
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FG93WZ%2FbtrPcWgcC2Z%2FCppWWrG8MtTdqQNk34kQK1%2Fimg.gif" width="600px"> <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbp02sg%2FbtrPdcQPJja%2FmJKos45WmvTZA4ZGorAZg1%2Fimg.gif" width="600px">
  

```jsx
const [optionIndexes, setOptionIndexes] = useState(Object.keys(option));
//객관식 문항수를 상위 컴포넌트로부터 option이라는 props로 받고 있다.

const addOptionIndexes = () => {
    setOptionIndexes([...optionIndexes, optionIndexes.length.toString()]);
  };
...

{optionIndexes.map(idx => (
       <Choice key={idx}>
        ...}
```

해당 서베이 타이틀을 클릭하면 링크 페이지 (응답자가 설문을 기입하는 링크를 보여주고 복사 가능)로 이동할 수 있게 했습니다.
결과 버튼을 누르면 통계 페이지, 강제 종료 버튼을 누르면 진행중인 상태를 완료로 바꾸고, 휴지통 버튼을 누르면 데이터 베이스에서 삭제 되는 delete method를 사용했습니다.

<br>
<br>

#### 메인 페이지 필터 * 서치 기능


```jsx
const [optionIndexes, setOptionIndexes] = useState(Object.keys(option));
//객관식 문항수를 상위 컴포넌트로부터 option이라는 props로 받고 있다.

const addOptionIndexes = () => {
    setOptionIndexes([...optionIndexes, optionIndexes.length.toString()]);
  };
...

{optionIndexes.map(idx => (
       <Choice key={idx}>
        ...}
```

<br>
<br>


#### 메인 페이지 필터 모달 구현


```jsx
const [optionIndexes, setOptionIndexes] = useState(Object.keys(option));
//객관식 문항수를 상위 컴포넌트로부터 option이라는 props로 받고 있다.

const addOptionIndexes = () => {
    setOptionIndexes([...optionIndexes, optionIndexes.length.toString()]);
  };
...

{optionIndexes.map(idx => (
       <Choice key={idx}>
        ...}
```


스프레드 문법을 이용하여 `outside` 함수를 만들었습니다. useRef를 사용해서 `modalRef`로 관리해 모달이 켜져있을 때만 전체를 바라볼 수 있게끔 만들어 모달을 제외한 공간을 클릭했을 때 모달이 꺼지도록 만들었습니다.


<br>
<br>


#### 메인 페이지 페이지 네이션 넘버링


```jsx
const [optionIndexes, setOptionIndexes] = useState(Object.keys(option));
//객관식 문항수를 상위 컴포넌트로부터 option이라는 props로 받고 있다.

const addOptionIndexes = () => {
    setOptionIndexes([...optionIndexes, optionIndexes.length.toString()]);
  };
...

{optionIndexes.map(idx => (
       <Choice key={idx}>
        ...}
```

`[1,2,3,4,5]` `[6,7,8,9,10]` 처럼 5개씩 잘라서 보여주었고 첫번째 페이지, 마지막 페이지에선 넘어가지 못하게 구현했습니다. 각 번호를 배열 형태로 state에 담았고 또 5개씩 잘라서 보여줘야했기 때문에 이를 인덱스로 관리해서 보여주기 위해 5개씩 자른 배열을 state에 담아 관리했습니다.

<br>
<br>


#### 링크 페이지, 메인 페이지에서 받았던 url 복사 기능 

<img src="https://blog.kakaocdn.net/dn/27g2W/btrPbuyMJiG/pTA2ZydYSXSCjxwmTk17L0/img.gif"
width="600px">

```jsx
  //생성
  //최상위 컴포넌트 Editor.js
 <MakeSurvey onSubmit={methods.handleSubmit(onSubmit)}>

  //상위 컴포넌트 SurveyEditor.js
  <TitleInput
    placeholder="제목을 입력하세요"
    {...register('surveyName', {
    shouldSelect: true,
    required: {
      value: 'title',
      message: `제목은 필수!`,
               },
     })}
    />
```

서버와 연결을 줄이기 위해 서버와 연결하는 대신 메인 페이지에서 받은 id 값과 해당 url 데이터 값을 `Link to` 로 state 에 담아 객체로 Link 와 해당 타이틀(name)을 넘겼습니다. Link 페이지에선 state 를 받기 위해 `Location`을 사용해 해당 타이틀과 링크를 가져왔습니다.

복사 기능 관련해서, 비동기적으로 작동하며 promise 객체를 반환하는 `ClipBoard API`를 사용했습니다. https 보다 보안이 약한 http에서는 보안상의 이유로 클립보드에 접근할 수 없어 도커에 배포된 환경에선 복사 기능을 사용할 수 없어 아쉬웠습니다. 공식 문서를 잘 살펴보고 구현해야한다는 교훈을 얻을 수 있었던 작업이었습니다.

 


<br>
<br>


```jsx
//삭제
const methods = useForm({ shouldUnregister: true });
```

여기서 많이 해맸었습니다. 선택 항목을 삭제했음에도 불구하고 보내지는 폼에서는 적용이 되지 않는 어려움을 마주했습니다. 하루 종일 다양한 방법을 시도했고 결과적으로 Usehook-Form 공식문서를 통해 shouldUnregister:true를 정의하면 마지막 onsubmit 될때 register된 상태인 input의 form만 생성된다는 것을 알았습니다.

<br>
<br>


#### 폼 데이터 안에서 이미지 보내는 기능 

<img src="https://user-images.githubusercontent.com/93697790/196628841-66341773-fa1b-4cbe-8eca-4b641e28f03d.gif"
width="600px">

<br>
<br>

#### 에디터 및 고객 폼 데이터 유효성 검사 기능 

<img src="https://user-images.githubusercontent.com/93697790/197449820-0fc53a72-70dc-4525-a4e9-8a1438ee7a42.gif"
width="600px">

```jsx
<ErrorMessage
  errors={errors}
  name="surveyName"
  render={({ message }) => (
    <ErrorM>
      <Icon>
        <MdInfo />
      </Icon>
      {message}
    </ErrorM>
  )}
/>
```
ErrorMessage라는 react-hook-form안에 있는 컴포넌트를 import하여 설정해서 커스텀해주었습니다. name은 해당 register된 이름과 동일하게 설정해주어야 원하는 동작을 하였고 message 또한 미리 설정해주어야 에러 객체가 있을때 message가 보여졌습니다.


<br>
<br>

#### 고객 페이지 폼데이터 생성 기능 

<img src="https://user-images.githubusercontent.com/93697790/197450258-3042aeb2-3bc0-48f1-b489-21d15804292c.gif" width="600px">

고객 페이지 폼데이터 또한 관리자 에디터 페이지와 마찬가지로 동일하게 useForm 라이브러리를 사용하여 생성 및 삭제해주었습니다. 


