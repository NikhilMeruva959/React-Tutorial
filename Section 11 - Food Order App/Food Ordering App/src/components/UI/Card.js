import React from "react";
import classes from './Card.module.css';

// Reusable Component
const Card = (props) => {
    return(
        <div className={classes.card}>{props.children}</div>
    );
}

export default Card;