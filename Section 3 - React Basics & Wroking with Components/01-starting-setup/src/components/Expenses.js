import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem.js';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter.js';

function Expenses(props){
   const [filteredYear, setFilteredYear] = useState('2022');

   const filterChangeHandler = (selectedYear) => {
      // console.log('Expenses.js');
      // console.log(selectedYear);
      setFilteredYear(selectedYear);
   };

   return(   
   <div>
      <Card className="expenses">
         {/* //selected={filteredYear} is setting 2022 as default in ExpenseFilter.js */}
         <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
         <ExpenseItem
         title = {props.arr[0].title}
         amount = {props.arr[0].amount}
         date = {props.arr[0].date}></ExpenseItem>
         <ExpenseItem
         title = {props.arr[1].title}
         amount = {props.arr[1].amount}
         date = {props.arr[1].date}></ExpenseItem>
         <ExpenseItem
         title = {props.arr[2].title}
         amount = {props.arr[2].amount}
         date = {props.arr[2].date}></ExpenseItem>
         <ExpenseItem
         title = {props.arr[3].title}
         amount = {props.arr[3].amount}
         date = {props.arr[3].date}></ExpenseItem>
      </Card> 
   </div>
   );  
}
export default Expenses;