import React from "react";
import { Link } from "react-router-dom";

import { animated, useSpring } from "react-spring";

const NavLinks = ({ show }) => {
  const { left } = useSpring({
    from: { left: "-100%" },
    left: show ? "0" : "-100%",
  });


  return (
    <animated.div style={{ left: left }} className="nav-links" id="nav-links">
      <Link className="links" to="/">
        HOME
      </Link>
      <Link className="links" to="/shop">
        SHOP
      </Link>
      <Link className="links" to="/size-guide">
        SIZE GUIDE
      </Link>
      <Link className="links" to="/about-us">
        ABOUT US
      </Link>
    </animated.div>
  );
};

export default NavLinks;
