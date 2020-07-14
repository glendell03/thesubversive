import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CloseOutlined } from "@ant-design/icons";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

const CartDropdown = ({ toggleCartHidden, cartItems }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <div className="cart-dropdown-container">
      <div className="close-btn" onClick={toggleCartHidden}>
        <CloseOutlined />
      </div>

      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
