import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    let expensesContent = <p>No Expenses!!!</p>

   {/* //&& will perform the statement to the right if first condition is met */}
   if(props.arr.length > 0){
      expensesContent = 
   }
   return(
       <ul className="expenses-list">
           props.arr.map((expense) => (
         <ExpenseItem
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />
       ));
       </ul>

   );
};

export default ExpensesList;