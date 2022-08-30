import style from "./HeaderContentInput.module.css";
import { useState } from "react";

function HeaderContentInput() {
  const [enteredKeyword, setEnteredKeyword] = useState("");
  const onChangeHandler = (e) => {
    setEnteredKeyword(e.target.value);
  };

  return (
    <div className={style.input__wrap}>
      <form action="#">
        <label className={style.input__label}>
          <input
            type="text"
            autoComplete="off"
            name="searchKeyward"
            placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
            value={enteredKeyword}
            onChange={onChangeHandler}
          />
          {enteredKeyword !== "" && (
            <div className={style.input__clear}>
              <span className={style.input__clear__button}></span>
            </div>
          )}
        </label>
      </form>
    </div>
  );
}
export default HeaderContentInput;
