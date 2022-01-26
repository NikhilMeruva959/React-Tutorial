import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
//props allows you to pass in key value pairs
function ExpenseItem(props){

    //return should have one root element hence ()
    return (
        <div className='expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>    
    )
}
export default ExpenseItem;

