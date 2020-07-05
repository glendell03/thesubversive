import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { Squash as Hamburger } from "hamburger-react";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { auth } from "../../firebase/firebase.utils";
import NavLinks from "./nav-links";

const Header = ({ currentUser }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav role="navigation">
      <div className="header">
        <div className="burger-menu" id="burger-menu">
          <Hamburger
            rounded
            size={20}
            toggled={menuActive}
            toggle={setMenuActive}
          />
        </div>
        <div
          className="isClicked"
          onClick={() => setMenuActive(false)}
        >
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
          <NavLinks show={menuActive} />
          <div className="btn-links-container" id="btn-links-container">
            <SearchOutlined className="btn-links" id="btn-links" />
            {currentUser ? (
              <div onClick={() => auth.signOut()}>
                <UserDeleteOutlined className="btn-links" id="btn-links" />
              </div>
            ) : (
              <Link to="/signin">
                <UserOutlined className="btn-links" id="btn-links" />
              </Link>
            )}
            <ShoppingOutlined className="btn-links" id="btn-links" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
