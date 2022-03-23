import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCardButton.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;


    //Reduce alows you to transform array into single value
    //This is numCartItems which displays in cart Icon
    const numCartItems = items.reduce((currNumber, item)=>{
        return currNumber+item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }

        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numCartItems}</span>
        </button>

    );
}
export default HeaderCardButton; 