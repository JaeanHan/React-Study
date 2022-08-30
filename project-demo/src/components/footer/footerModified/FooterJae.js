import FooterHeader from "./FooterHeader";
import FooterWrap from "./FooterWrap";
import FooterMain from "./FooterMain";
import FooterAddress from "./FooterAddress";
import FooterUtil from "./FooterUtil";

const hits = "669,628,846";
/*
  hits 조차 사실 app.js까지 끌어올릴 수 있음
  하지만 useContext를 통해 가져올 것이기 때문에
  일단 그냥 여기둠

  부모 클래스 : display flex줄 클래스 === wrapper
  아래의 FooterMain도 FooterMainWrap이 되어야함

  아래의 components에 hover하면 각 component에 대한 간략한 설명이 뜸

  추가적으로 클린코드의 개념으로
  함수는 반드시 하나의 기능만 담당하여야한다는 개념을 토대로
  기능별로 함수를 다 나눠놓음 (components)

  사실 이거를 제대로 만들어서 변수명 규칙, 클래스명 규칙, 구조등
  이번 프로젝트의 리액트 가이드라인으로 만들면 좋겠다 했는데
  지금 너무 힘듬 ㅈㅈ


  개인적으로 리팩토링이 반드시 필요한 코드이지만 이런 흐름의 구조는 어떤지
  할 만 한지 생각해 보시면 될 것 같습니당
*/

/**
 *
 * @returns complete footer component
 *
 * 힘들어서 중간에 멈춤
 */

const FooterJae = () => {
  return (
    <FooterWrap>
      <FooterHeader hits={hits} />
      <FooterMain>
        <FooterAddress />
        <FooterUtil />
      </FooterMain>
    </FooterWrap>
  );
};

export default FooterJae;
