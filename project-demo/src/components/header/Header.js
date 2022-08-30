import HeaderContentButton from "./HeaderContentButton";
import HeaderContentInput from "./HeaderContentInput";
import HeaderContentWrap from "./HeaderContentWrap";
import HeaderWrap from "./HeaderWrap";
import Logo from "./Logo";

const buttonTitles = ["영화", "TV", "책", "웹툰"];

function Header() {
  return (
    <HeaderWrap>
      <HeaderContentWrap>
        <li>
          <Logo width="151px" height="29px" margin="15px" />
        </li>
        {buttonTitles.map((item) => (
          <HeaderContentButton content={item} key={item} />
        ))}
        <li style={{ margin: "0 0 0 auto" }}>
          <HeaderContentInput />
        </li>
        <HeaderContentButton content="로그인" />
        <HeaderContentButton content="회원가입" />
      </HeaderContentWrap>
    </HeaderWrap>
  );
}

export default Header;
