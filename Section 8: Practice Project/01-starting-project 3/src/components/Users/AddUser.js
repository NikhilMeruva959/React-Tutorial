import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //useRef only usable inside functional components
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  
  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
          title: 'Invalid input',
          message: 'Please enter a valid name and age (non-empty values)!'
      });
      return;
    }
    //+ does string -> int conversion
    if (+enteredUserAge < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (>0)!'
        });
      return;
    }

    // console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);

    // Rarely do, can manipulate DOM like this for resetting value
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    
  };

  return (
    <Wrapper>
      {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* //value={enteredUserName} resets the form because of setEnteredAge(''); and setEnteredUserName(''); */}
          <input
            id="username"
            type="text"
            // The first react reaches and render this bit of code, it will set nameInputRef to the native DOM element
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
