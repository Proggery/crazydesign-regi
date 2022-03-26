import React from "react";
import "./blackAndWhite.css";

export default function BlackAndWhite({
  backgroundTheme,
  darkMode,
  setDarkMode,
}) {
  return (
    <div onClick={backgroundTheme} className="theme__toggler">
      {darkMode ? <i className="moon"></i> : <i className="sun"></i>}
    </div>
  );
}
