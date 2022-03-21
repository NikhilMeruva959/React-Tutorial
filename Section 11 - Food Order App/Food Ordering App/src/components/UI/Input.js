import React from "react";
import classes from './Input.module.css';

// Ex. {type: 'text'}
const Input = React.forwardRef((props, ref) => {
    //Since for is a reserved word in JavaScript, React elements use htmlFor instead.
    //For in Javascript: htmlFor attribute is used to get the HTML for the given HTML elements.
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} /> 
            {/* // ...props.input ensures all key value pairs are added as props */}
        </div>
    );
});

export default Input;