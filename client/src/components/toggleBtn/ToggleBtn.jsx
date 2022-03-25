import React from "react";
import "./toggleBtn.css";

export default function ToggleBtn(props) {
  return (
    <div
      onClick={props.sidebarToggle}
      id="toggle__btn"
      className={props.sidebarActive ? "active" : ""}
    >
    <div className="toggle__line__frame">
      <div className="toggle__line"></div>
      <div className="toggle__line"></div>
      <div className="toggle__line"></div>
    </div>
    </div>
  );
}
