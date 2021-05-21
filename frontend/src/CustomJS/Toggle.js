import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function toggle(props) {
  return (
    <DarkModeToggle
      onChange={props.setIsDarkMode}
      checked={props.isDarkMode}
      size={window.innerWidth <= 285 ? 40 : 60}
      className="nav_toggle"
    />
  );
}
