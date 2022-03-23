import classes from './MealItemForm.module.css';
import React, {useRef, useState} from "react";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [amoutIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    
    };

    //ste prop is incremeant
    return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label="Amount" 
            input={{
            id: 'amount_' + props.id, //Creates a unique ID for each input
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }}/>
        <button>+ Add</button>
        {!amoutIsValid && <p>Please enter valid amount (1-5)</p>}
    </form>
    );
}
export default MealItemForm;