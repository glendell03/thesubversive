import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <button
    {...otherProps}
    className={` ${inverted ? "inverted" : ""} custom-button`}
  >
    {children}
  </button>
);

export default CustomButton;
