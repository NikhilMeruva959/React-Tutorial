import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) =>{
    setEnteredUserName = event.target.value;
  }

  const ageChangeHandler = (event) =>{
    setEnteredAge = event.target.value;
  } 

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
  };

  return (
    <Card cssClass={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
