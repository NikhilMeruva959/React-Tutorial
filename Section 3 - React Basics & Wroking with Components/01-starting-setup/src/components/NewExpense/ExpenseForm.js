import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  //document.getElementById('').addEventListener('click', (event) => {})
  // Eventlistner, click event, get event object when change occurs
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // ...userInput is taking an object, pulls all key value pairs, and adds to new object
    // ...userInput makes sure other values like: enteredAmount: '' and enteredDate: '' arent thrown away and apart of new state
    // However depends on the previous state, bad practice
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });

    //Need anonmys arrow function- will automatically be executed by react and will recieve prev state snapshot for that state your calling that function
    //React guarntees the snapshot will be latest with this way
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
  };

  //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //So expenseData will go to NewExpense.js becuase of props.onSaveExpenseData(expenseData);
    // child to parent passing information relationship
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(""); 
  };

  return (
    // onSubmit={} to submit form
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Twoway Binding: value = {enteredDate} allows to reset value once done with form */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
