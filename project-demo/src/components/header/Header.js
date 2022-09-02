import { useEffect, useReducer, useState } from "react";
import HeaderContentButton from "./HeaderContentButton";
import HeaderContentInput from "./HeaderContentInput";
import HeaderContentWrap from "./HeaderContentWrap";
import HeaderWrap from "./HeaderWrap";
import Logo from "./Logo";

const buttonTitles = ["영화", "TV", "책", "웹툰"];

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/;
const emailRegex =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.length > 1 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.length > 1 };
  }
  return { value: "", isValid: null };
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: emailRegex.test(action.value) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: emailRegex.test(state.value) };
  }
  return { value: "", isValid: null };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: passwordRegex.test(action.value) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: passwordRegex.test(state.value) };
  }
  return { value: "", isValid: null };
};

function Header() {
  // const [formStates, setFormStates] = useState < Boolean > false;

  let formState = false;

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // const isValid2 = nameState.isValid;
  // const nameState2 = { ...nameState, isValue: nameIsValid };

  const { isValid: nameIsValid } = nameState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  //useState = re-render 시키는 함수
  //useEffect = rendering후 실행되는 함수
  // handling side-effect == http request
  useEffect(() => {
    const changeFormState = setTimeout(() => {
      // setFormState(nameIsValid && emailIsValid && passwordIsValid);
      formState = nameIsValid && emailIsValid && passwordIsValid;
    }, 500);

    return clearTimeout(changeFormState);
  }, [nameIsValid, emailIsValid, passwordIsValid]);

  const NameChangeHandler = (e) => {
    dispatchName({ type: "USER_INPUT", value: e.target.value });
  };
  const EmailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", value: e.target.value });
  };
  const PasswordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", value: e.target.value });
  };

  const NameBlurHandler = (e) => {
    dispatchName({ type: "INPUT_BLUR" });
  };
  const EmailBlurHandler = (e) => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const PasswordBlurHandler = (e) => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = () => {
    if (formState) {
      //회원 가입 요청 보내기
    }
  };

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
