import React from "react";
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    //Since for is a reserved word in JavaScript, React elements use htmlFor instead.
    //The htmlFor property sets or returns the value of the for attribute of a label.

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} /> 
            {
            /* // ...props.input ensures all key value pairs are added as props */
            // Ex. {type: 'text'}
            }
        </div>
    );
});

export default Input;