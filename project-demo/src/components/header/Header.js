import { useEffect, useReducer, useRef, useState } from "react";
import Modal from "../modal/Modal";
import HeaderContentButton from "./HeaderContentButton";
import HeaderContentInput from "./HeaderContentInput";
import HeaderContentWrap from "./HeaderContentWrap";
import HeaderWrap from "./HeaderWrap";
import Logo from "./Logo";

const USER_INPUT = "USER_INPUT";
const INPUT_BLUR = "INPUT_BLUR";
const CLEAR = "CLEAR";

const buttonTitles = ["영화", "TV", "책", "웹툰"];

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[.!@#$%^*+=-])(?=.*[0-9]).{10,25}$/;
const emailRegex =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

const nameReducer = (state, action) => {
  const enteredName = action?.value?.trim();
  if (action.type === USER_INPUT && enteredName) {
    return {
      value: enteredName,
      isValid: enteredName.length > 1,
    };
  }
  if (action.type === INPUT_BLUR) {
    return {
      value: state.value ?? "",
      isValid:
        state.value === "" && state.isValid === false
          ? null
          : state.isValid ?? null,
    };
  }
  return { value: "", isValid: null };
};

const emailReducer = (state, action) => {
  const enteredEmail = action?.value?.trim();
  if (action.type === USER_INPUT && enteredEmail) {
    return {
      value: enteredEmail,
      isValid: emailRegex.test(enteredEmail),
    };
  }
  if (action.type === INPUT_BLUR) {
    return {
      value: state.value ?? "",
      isValid:
        state.value === "" && state.isValid === false
          ? null
          : state.isValid ?? null,
    };
  }
  return { value: "", isValid: null };
};

const passwordReducer = (state, action) => {
  const enteredPassword = action?.value?.trim();
  if (action.type === USER_INPUT && enteredPassword) {
    return {
      value: enteredPassword,
      isValid: passwordRegex.test(enteredPassword),
    };
  }
  if (action.type === INPUT_BLUR) {
    return {
      value: state.value ?? "",
      isValid:
        state.value === "" && state.isValid === false
          ? null
          : state.isValid ?? null,
    };
  }
  return { value: "", isValid: null };
};

function Header() {
  const [modal, setModal] = useState(false);
  const [signinState, setSigninState] = useState(false);
  const [signupState, setSignupState] = useState(false);

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

  const { isValid: nameIsValid } = nameState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identidier = setTimeout(() => {
      // console.log("check form validity");
      setSigninState(emailIsValid && passwordIsValid);
      setSignupState(emailIsValid && passwordIsValid && nameIsValid);
    }, 500);

    return () => {
      clearTimeout(identidier);
    };
  }, [emailIsValid, passwordIsValid, nameIsValid]);

  const nameChangeHandler = (e) => {
    dispatchName({
      type: USER_INPUT,
      value: e.target.value,
    });
  };
  const nameClearHandler = () => {
    dispatchName({ type: CLEAR });
  };
  const nameBlurHandler = () => {
    dispatchName({ type: INPUT_BLUR });
  };

  const emailChangeHandler = (e) => {
    dispatchEmail({
      type: USER_INPUT,
      value: e.target.value,
    });
  };
  const emailClearHandler = () => {
    dispatchEmail({ type: CLEAR });
  };
  const emailBlurHandler = () => {
    dispatchEmail({ type: INPUT_BLUR });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: USER_INPUT,
      value: e.target.value,
    });
  };
  const passwordClearHandler = () => {
    dispatchPassword({ type: CLEAR });
  };
  const passwordBlurHandler = () => {
    dispatchPassword({ type: INPUT_BLUR });
  };

  const modalHandler = (mode) => {
    setModal(mode);
    nameClearHandler();
    emailClearHandler();
    passwordClearHandler();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (signupState) {
      //회원 가입 요청 보내기 api/v1/user/join
      alert("회원가입 기능 구현중 입니다!");
      return;
    }

    if (signinState) {
      //로그인 요청 보내기 api/v1/user/login
      alert("로그인 기능 구현중 입니다!");
      return;
    }
  };

  const inputs = [
    {
      placeholder: "이름",
      name: "name",
      type: "text",
      key: 1,
      value: nameState.value,
      onChange: nameChangeHandler,
      onBlur: nameBlurHandler,
      onClear: nameClearHandler,
      isValid: nameIsValid,
      message: "정확하지 않은 이름입니다.",
      ref: nameInputRef,
    },
    {
      placeholder: "이메일",
      name: "email",
      type: "email",
      key: 2,
      value: emailState.value,
      onChange: emailChangeHandler,
      onBlur: emailBlurHandler,
      onClear: emailClearHandler,
      isValid: emailIsValid,
      message: "정확하지 않은 이메일입니다.",
      ref: emailInputRef,
    },
    {
      placeholder: "비밀번호",
      name: "password",
      type: "password",
      key: 3,
      value: passwordState.value,
      onChange: passwordChangeHandler,
      onBlur: passwordBlurHandler,
      onClear: passwordClearHandler,
      isValid: passwordIsValid,
      message:
        "비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 10자리 이상이여야 합니다.",
      ref: passwordInputRef,
    },
  ];

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
        <HeaderContentButton content="로그인" onClick={modalHandler} />
        <HeaderContentButton content="회원가입" onClick={modalHandler} />
      </HeaderContentWrap>
      {modal && (
        <Modal
          title={modal}
          show={
            modal === "로그인" ? inputs.filter((item) => item.key > 1) : inputs
          }
          onSubmit={submitHandler}
          onSwitch={modalHandler}
        />
      )}
    </HeaderWrap>
  );
}

export default Header;
