import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const onChangeFilter = (props) => {
    // let expensesContent = <p>No Expenses!!!</p>

   //&& will perform the statement to the right if first condition is met
   if(props.arr.length === 0){
        return <h2 className="expenses-list__fallback">No Expenses Found!!!</h2>;
        
    }
   return(
       <ul className="expenses-list">
           {props.arr.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
       ))}
       </ul>

   );
};

export default onChangeFilter;