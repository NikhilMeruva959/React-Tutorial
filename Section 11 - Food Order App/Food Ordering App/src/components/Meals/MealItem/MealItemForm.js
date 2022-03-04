import classes from './MealItemForm.module.css';
import React from "react";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
    //ste prop is incremeant
    return <form className={classes.form}>
        <Input label="Amount" input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '19',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
    </form>
}
export default MealItemForm;