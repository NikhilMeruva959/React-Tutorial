import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";


const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.includes("@")};
  }
  if(action.type === 'INPUT_BLUR'){
    // state.value gets last snapshot
    return {value: state.value, isValid: state.value.includes("@")};
  }
  return { value: '', isValid: false};
};


const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6};
  }
  if(action.type === 'INPUT_BLUR'){
    // state.value gets last snapshot
    return {value: state.value, isValid: state.value.trim().length > 6};
  }

  return { value: '', isValid: false};
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const authCtx = useContext(AuthContext);

  // If no dependicies, then infinite loop
  useEffect(() => {
    console.log("EFFECT RUNNING");

    //Since component is removed from the DOM
    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  // Object destructiong to pull out certain properties
  // From emailState, we are extracting and pulling out isValid and storing in a constant emailIsValid
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        // instead of emailState.isValid and passwordState.isValid
        emailIsValid && passwordIsValid
      );
    }, 500);

    // Cleanup function that will run before useEffect executs this function in time
    // Except for the 1st time, this cleanup function will run
    // Also will run whenever the component unmounts from DOM
    return () => {
      console.log('CLEANUP');
      // clearTimeout(identifier) will clear timer set before this, so new timer will be set
      // the above will run once, so say i keep typing, it will continously reset the timer
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  // will run if emailIsValid, passwordIsValid chnage

  //this effect will only run once when the component is rendered

  // After every login component execution, it will rerun this useEffect() when either enteredEmail, enteredPassword change

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});

  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
