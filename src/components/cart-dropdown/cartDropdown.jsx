import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cartItem";

import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectState, toggleCartHidden } from "../../redux/cart/cartSlice";
import "./cartDropdown.scss";

const CartDropdown = ({history}) => {
  const dispatch = useDispatch();
  const cartState = useSelector(selectState);
  const cartItems = cartState.cart.cartItems;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
          {
             cartItems.length? (
              cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
              :(
                <span className="empty-message">Your cart is empty</span>
              )
          }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
        }}>
         GO TO CHECKOUT 
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
