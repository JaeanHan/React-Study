import React from "react";
import styles from "./ValidationError.module.css";

function ValdiationError(props) {
  return (
    <div className={styles["back-drop"]} onClick={props.onOkayClick}>
      <div className={styles["error-wrap"]}>
        <h1 className={styles.theme}>Invalid input</h1>
        <p>{props.msg}</p>
        <button
          className={styles.theme}
          type="button"
          onClick={props.onOkayClick}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default ValdiationError;
