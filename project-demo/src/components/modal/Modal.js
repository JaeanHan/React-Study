import Logo from "../header/Logo";
import CustomInput from "../UI/form/CustomInput";
import style from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";
import kakao from "../../images/oauth-kakao.svg";
import google from "../../images/oauth-google.svg";
import tweeter from "../../images/oauth-tweeter.svg";
import line from "../../images/oauth-line.svg";
import facebook from "../../images/oauth-facebook.svg";

const oauthIconSrc = [
  { src: kakao, color: "rgb(247, 227, 23)", key: 1 },
  { src: google, color: "rgb(255, 255, 255)", key: 2 },
  { src: tweeter, color: "rgb(29, 161, 243)", key: 3 },
  { src: line, color: "rgb(0, 195, 0)", key: 4 },
  { src: facebook, color: "rgb(24, 119, 242)", key: 5 },
];

const ModalBackdrop = (props) => {
  const localClickhandler = () => {
    props.onClick(false);
  };
  return (
    <div className={style["modal--overlay"]} onClick={localClickhandler}></div>
  );
};

const LanguageButton = (props) => {
  return (
    <button type="button" className={style["language__button--wrap"]}>
      <span
        width="24px"
        height="24px"
        className={style.language__button__icon}
      ></span>
      한국어 (대한민국)
      <span
        width="24px"
        height="24px"
        className={style.language__button__click}
      ></span>
    </button>
  );
};

const FindPasswordButton = (props) => {
  const onClickHandler = () => {
    alert("아직 준비중 입니다!");
  };
  return (
    <div className={style["find__password--wrap"]}>
      <button
        className={style["find__password--button"]}
        type="button"
        onClick={onClickHandler}
      >
        비밀번호를 잊어버리셨나요?{" "}
      </button>
    </div>
  );
};

const OAuthIcon = (props) => {
  return (
    <li className={style["oauth__item--wrap"]}>
      <button className={style.oauth__item} style={{ background: props.color }}>
        <img src={props.src} />
      </button>
    </li>
  );
};

const SignupModal = (props) => {
  const title = props.title;
  const mode = title === "회원가입";

  const ModalHandler = () => {
    props.onSwitch(mode ? "로그인" : "회원가입");
  };
  return (
    <div className={style.modal}>
      <header>
        <Logo width="198px" height="38.03px" margin="0" />
      </header>
      <h2 className={style.modal__title}>{props.title}</h2>
      <section className={style["modal__form--wrap"]}>
        <div className={style.modal__form}>
          <form className={style.modal__form__main} onSubmit={props.onSubmit}>
            {props.show.map((item) => (
              <CustomInput
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                key={item.key}
                onChange={item.onChange}
                onClear={item.onClear}
                onBlur={item.onBlur}
                value={item.value}
                isValid={item.isValid}
                message={item.message}
                ref={item.ref}
              />
            ))}
            {mode && <LanguageButton />}
            <button className={style["modal__form--button"]}>{title}</button>
          </form>
          {!mode && <FindPasswordButton />}
          <div className={style.modal__switch}>
            {mode ? "이미 가입 하셨나요? " : "계정이 없으신가요? "}
            <button
              type="button"
              className={style["modal__switch--button"]}
              onClick={ModalHandler}
            >
              {mode ? "로그인" : "회원가입"}
            </button>
          </div>
          <hr className={style.modal__line} />
        </div>
        <ul className={style["modal__oauth--wrap"]}>
          {oauthIconSrc.map((item) => (
            <OAuthIcon src={item.src} color={item.color} key={item.key} />
          ))}
        </ul>
        {!mode && (
          <div className={style.modal__tip}>
            TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
            사용해요.
          </div>
        )}
      </section>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={props.onSwitch} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <SignupModal
          title={props.title}
          show={props.show}
          onSwitch={props.onSwitch}
          onSubmit={props.onSubmit}
        />,
        document.querySelector("#overlay--root")
      )}
    </>
  );
};

export default Modal;
