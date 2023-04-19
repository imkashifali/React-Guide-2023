import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorMode from "../UI/ErrorMode";
import Wrapper from "../helper/Wrapper";
const AddUser = (props) => {
  const [errorNow, setErrorNow] = useState();

  const userNameRef = useRef();
  const userAgeRef = useRef();

  const addUserHandle = (event) => {
    event.preventDefault();
    const userNameNow = userNameRef.current.value;
    const userAgeNow = userAgeRef.current.value;

    if (userNameNow.trim().length === 0 || userAgeNow.trim().length === 0) {
      setErrorNow({
        title: "Invalid UserName",
        message: "Please enter Valid Input(non empty value)",
      });
      return;
    }
    if (+userAgeNow < 1) {
      setErrorNow({
        title: "Invalid Age",
        message: "Please enter Valid Age(> 0)",
      });
      return;
    }

    props.onAddUser(userNameNow, userAgeNow);
    userNameRef.current.value = "";
    userAgeRef.current.value = "";
  };
  const errorHandlerNow = () => {
    setErrorNow(null);
  };
  return (
    <Wrapper>
      {errorNow && (
        <ErrorMode
          title={errorNow.title}
          message={errorNow.message}
          onConfirm={errorHandlerNow}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandle}>
          <label htmlFor='UserName'>UserName</label>
          <input id='UserName' type='text' ref={userNameRef} />
          <label htmlFor='UserName'>Age(Years)</label>
          <input id='UserName' type='number' ref={userAgeRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
