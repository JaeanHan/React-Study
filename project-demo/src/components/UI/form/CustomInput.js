import { forwardRef } from "react";
import style from "./CustomInput.module.css";

import valid from "../../../images/input-state-ok.svg";
import notValid from "../../../images/input-state-no.svg";

const ErrorMessage = (props) => {
  return <p className={style.error__message}>{props.message}</p>;
};

const CustomInput = forwardRef((props, ref) => {
  return (
    <div className={style["input--wrap"]}>
      <label className={style.input__label}>
        <div className={style["input__main--wrap"]}>
          <input
            type={props.type}
            className={style.input__main}
            autoComplete="off"
            placeholder={props.placeholder}
            name={props.name}
            value={props.value || ""}
            onChange={props.onChange}
            onBlur={props.onBlur}
            ref={ref}
          />
        </div>
        {props.value && (
          <div className={style["input__clear--wrap"]} onClick={props.onClear}>
            <span className={style.input__clear}></span>
          </div>
        )}
        {props.isValid != null && (
          <div className={style["input__validation--wrap"]}>
            <span
              className={style.input__validation}
              style={{
                background: `url(${
                  props.isValid ? valid : notValid
                }) center center / cover no-repeat`,
              }}
            ></span>
          </div>
        )}
      </label>
      {props.isValid != null && !props.isValid && (
        <ErrorMessage message={props.message} />
      )}
    </div>
  );
});

export default CustomInput;
