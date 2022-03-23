import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCardState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotAmount
        }
    }
    return defaultCardState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCardState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item:item});
    };

    const removeItemToCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id:id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler, 
        removeItem: removeItemToCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};
export default CartProvider;