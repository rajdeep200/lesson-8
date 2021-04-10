import React from "react";
import { selectState } from "../../redux/cart/cartSlice";
import { useSelector } from "react-redux";

import CheckoutPageItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripeButton";

import "./checkout.scss";

const CheckoutPage = () => {
  const cartState = useSelector(selectState);
  const cartItems = cartState.cart.cartItems;
  const cartPriceTotal = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 0)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
          cartItems.map( cartItem => (
              <CheckoutPageItem key={cartItem.id} cartItem={cartItem} />
          ))
      }
      <div className="total">
        <span>TOTAL: ${cartPriceTotal}</span>
      </div>
      <StripeCheckoutButton price={cartPriceTotal}/>
    </div>
  );
};

export default CheckoutPage;
