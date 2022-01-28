import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.arr.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList arr={filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
