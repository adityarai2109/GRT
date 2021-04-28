import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default (props) => {
  return (
    <DarkModeToggle
      onChange={props.setIsDarkMode}
      checked={props.isDarkMode}
      size={80}
    />
  );
};
