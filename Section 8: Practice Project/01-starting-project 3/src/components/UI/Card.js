import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
    // Both CSS Styling for className is being used because of template literal
    return(
    <div className={`${classes.card} ${props.cssClass}`}>{props.children}</div>
    );
};
export default Card;