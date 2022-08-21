import React from "react";
import ManageItems from "./ManageItems";
import styles from "./Manager.module.css";

function Manager(props) {
  return (
    <ul className={styles["manager-wrap"]}>
      {props.users.map((item) => (
        <ManageItems
          name={item.name}
          age={item.age}
          key={item.name + item.age}
        />
      ))}
    </ul>
  );
}

export default Manager;
