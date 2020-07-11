import React from "react";
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import "./cart-icon.styles.scss";
import { ShoppingOutlined } from "@ant-design/icons";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden} >
    <ShoppingOutlined className="btn-links" id="btn-links" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
