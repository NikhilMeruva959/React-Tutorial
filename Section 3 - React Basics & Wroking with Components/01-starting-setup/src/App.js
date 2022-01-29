import React, {useState} from 'react';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  //dummyExpenses is dumy values
  const [expenses, setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
    
    // Not good practice
    // setExpenses([expense, ...expenses]);
    
    // console.log('In App.js');
    // console.log(expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses arr = {expenses}></Expenses>
    </div>
  );

  // Alternative using JSX for return
  /*
    return React.createElement(
      'div',
      {},
      React.createElement('h2', {}, "Let's get started!"),
      React.createElement(Expenses, {arr = expenses} )
    );
  */
}

export default App;
