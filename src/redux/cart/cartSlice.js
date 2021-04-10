import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
    hidden: true,
    cartItems : []
}

const slice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        toggleCartHidden: state => {
            const hiddenValue = state.hidden;
            state.hidden = !hiddenValue
        },
        addItems: (state, action) => {
            state.cartItems = addItemToCart(state.cartItems, action.payload)
        },
        clearItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter( cartItem => cartItem.id !== action.payload.id)
        },
        removeCartItem: (state, action) => {
            state.cartItems = removeItemFromCart(state.cartItems, action.payload);
        }
    }
})

export const { toggleCartHidden, addItems, clearItemFromCart, removeCartItem } = slice.actions;
export const selectState = (state) => state;
export default slice.reducer;