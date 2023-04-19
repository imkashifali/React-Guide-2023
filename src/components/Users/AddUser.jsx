import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorMode from "../UI/ErrorMode";
import Wrapper from "../helper/Wrapper";
const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [errorNow, setErrorNow] = useState();

  const userEnterHandler = (event) => {
    setEnterUserName(event.target.value);
  };
  const userEnterAgeHandler = (event) => {
    setEnterAge(event.target.value);
  };
  const addUserHandle = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setErrorNow({
        title: "Invalid UserName",
        message: "Please enter Valid Input(non empty value)",
      });
      return;
    }
    if (+enterAge < 1) {
      setErrorNow({
        title: "Invalid Age",
        message: "Please enter Valid Age(> 0)",
      });
      return;
    }

    props.onAddUser(enterUserName, enterAge);
    setEnterAge("");
    setEnterUserName("");
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
          <input
            id='UserName'
            type='text'
            onChange={userEnterHandler}
            value={enterUserName}
          />
          <label htmlFor='UserName'>Age(Years)</label>
          <input
            id='UserName'
            type='number'
            onChange={userEnterAgeHandler}
            value={enterAge}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
