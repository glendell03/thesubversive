import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="nav-links">
      <Link className="links" to="/shop">
        SHOP
      </Link>
      <Link className="links" to="/size-guide">
        SIZE GUIDE
      </Link>
      <Link className="links" to="/about-us">
        ABOUT US
      </Link>
      <Link className="links" to="/contact-us">
        CONTACT US
      </Link>
      {
        currentUser ? 
        <div className="links" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="links" to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;
