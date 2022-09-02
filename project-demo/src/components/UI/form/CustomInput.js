import style from "./CustomInput.module.css";

const CustomInput = (props) => {
  return (
    <div className={style["input--wrap"]}>
      <label className={style.input__label}>
        <div>
          <input
            className={style.input__main}
            autoComplete="off"
            placeholder={props.placeholder}
          />
        </div>
        <div>
          <span className={style.input__clear}></span>
        </div>
        <div>
          <span className={style.input__check}></span>
        </div>
      </label>
    </div>
  );
};

export default CustomInput;
