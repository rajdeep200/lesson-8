import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectState } from "../../redux/cart/cartSlice";
import "./cartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(selectState);
  const cartItems = cartState.cart.cartItems;
  const itemCount = cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  );

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
