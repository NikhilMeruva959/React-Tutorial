import React from 'react';
//useState - allows us to define values of state where changes in the value should reflect changes
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

//props allows you to pass in key value pairs
function ExpenseItem(props){
    //add eventlistener like this

    // const [title, setTitle] = useState(props.title); //acturally return an array, 1st value actual value, 2nd is updated value

    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     console.log(title);
    // }
    //return should have one root element hence ()
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>    
        </li>
    );
}
export default ExpenseItem;

