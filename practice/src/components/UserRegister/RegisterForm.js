import React, { useState } from "react";
import styles from "./RegisterForm.module.css";

function RegisterForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const updateUser = (e) => {
    e.preventDefault();

    const userInfo = {
      name: username,
      age: +age,
    };

    props.onSubmit(userInfo);
    setUsername("");
    setAge("");
  };

  return (
    <form className={styles["register-wrap"]} onSubmit={updateUser}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default RegisterForm;
