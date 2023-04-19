import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser.jsx";
import UserList from "./components/Users/UserList.jsx";

function App() {
  const [userList, setUserList] = useState([]);

  const AddUserHandlerData = (enterUserName, enterAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: enterUserName, age: enterAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={AddUserHandlerData} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
