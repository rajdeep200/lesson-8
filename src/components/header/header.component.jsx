import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase-utils/firebase";
import CartIcon from "../cart-icon/cartIcon";
import CartDropdown from "../cart-dropdown/cartDropdown";

import "./header.styles.scss";
import { selectState } from "../../redux/cart/cartSlice";


const Header = ({ currentUser }) => {
  
  const hiddenValue = useSelector(selectState);
  const isHidden = hiddenValue.cart.hidden;

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});


export default connect(mapStateToProps)(Header);

