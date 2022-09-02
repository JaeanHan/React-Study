import HeaderContentInput from "../header/HeaderContentInput";
import Logo from "../header/Logo";
import CustomInput from "../UI/form/CustomInput";
import style from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={style["modal--wrap"]}>
      <div className={style.modal}>
        <header>
          <Logo width="198px" height="38.03px" margin="0" />
        </header>
        <h2 className={style.modal__title}>{props.title}회원가입</h2>
        <section className={style["modal__form--wrap"]}>
          <div className={style.modal__form}>
            <form className={style.modal__form__main}>
              <CustomInput placeholder="이름" />
            </form>
            {/* <div>
              <div>
                이미 가입 하셨나요?
                <button>로그인</button>
              </div>
              <hr />
              <ul style={{ display: "flex" }}>
                <li>
                  <button>1</button>
                </li>
                <li>
                  <button>2</button>
                </li>
                <li>
                  <button>3</button>
                </li>
                <li>
                  <button>4</button>
                </li>
                <li>
                  <button>5</button>
                </li>
              </ul>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
