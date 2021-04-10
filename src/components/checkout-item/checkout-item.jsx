import React from 'react';
import { useDispatch } from "react-redux";
import { clearItemFromCart, removeCartItem, addItems } from "../../redux/cart/cartSlice";

import './checkout-item.scss';

const CheckoutPageItem = ({cartItem}) => {
    const { imageUrl, name, quantity, price } = cartItem;
    const dispatch = useDispatch();

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(removeCartItem(cartItem))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addItems(cartItem))}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))} >&#10006;</div>
        </div>
    )
}

export default CheckoutPageItem;
