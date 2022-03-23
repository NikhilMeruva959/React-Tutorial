import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCardButton.module.css';
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
    const cartCtx = useContext(CartContext);

    //Reduce alows you to transform array into single value
    //This is numCartItems which displays in cart Icon
    const numCartItems = cartCtx.items.reduce((currNumber, item)=>{
        return currNumber+item.amount;
    }, 0);

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numCartItems}</span>
        </button>

    );
}
export default HeaderCardButton; 