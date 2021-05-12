import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function toggle(props) {
  return (
    <DarkModeToggle
      onChange={props.setIsDarkMode}
      checked={props.isDarkMode}
      size={60}
    />
  );
};
