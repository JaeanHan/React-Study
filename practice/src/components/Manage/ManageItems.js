import React from "react";
import styles from "./ManagerItems.module.css";

function ManageItems(props) {
  //   console.log(props);
  return (
    <li>
      <div className={styles.item}>
        <span>{props.name}</span>
        <span>({props.age} years old)</span>
      </div>
    </li>
  );
}

export default ManageItems;
