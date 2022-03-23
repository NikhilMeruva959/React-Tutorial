import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCardState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotAmount = state.totalAmount + action.item.price * action.item.amount;

        //return true if item curr is same id of item we are adding
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        //returns existingCartItem with the index
        //will be null if not there
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            //copy existing items
            updatedItems = [...state.items];
            //take old item and overide it with updatedItem
            updatedItems[existingCartItemIndex] = updatedItem;
        } else{
            // concat doesn't add to array, it return new array
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotAmount,
        }
    }
    if(action.type === 'REMOVE'){

        //return true if item curr is same id of item we are adding
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        //returns existingCartItem with the index
        //will be null if not there
        const existingCartItem = state.items[existingCartItemIndex];
        //Simply remove one item of type
        const updatedTotAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        if(existingCartItem.amount===1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else{
            const updatedItem = {...existingCartItem, amount:existingCartItem.amount-1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotAmount,
        };
    }
    return defaultCardState;
};

const CartProvider = (props) => {
    //The useReducer Hook is similar to the useState Hook.
    // It allows for custom state logic.
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