import { useState } from "react";
import "./App.css";
import Manager from "./components/Manage/Manager";
import RegisterForm from "./components/UserRegister/RegisterForm";
import ValdiationError from "./components/Validation/ValidationError";

let msg;

function App() {
  const user = [{ name: "test", age: 23 }];
  const [userList, setUserList] = useState(user);
  const [isInvalid, setIsInvalid] = useState(false);

  const onSubmitHandler = (user) => {
    if (user.name.trim().length > 0 && user.age > 0) {
      setUserList((prevState) => [user, ...prevState]);
      return;
    }

    msg =
      user.name.trim().length > 0
        ? "age must be greater than 0"
        : "name must not be black";
    setIsInvalid(true);
  };

  const onOkayClickHandler = () => {
    setIsInvalid(false);
  };
  

  return (
    <div className="App">
      <RegisterForm onSubmit={onSubmitHandler}  />
      <Manager users={userList} />
      {isInvalid && (
        <ValdiationError msg={msg} onOkayClick={onOkayClickHandler} />
      )}
    </div>
  );
}

export default App;
