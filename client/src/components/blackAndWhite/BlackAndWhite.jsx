import React from "react";
import "./blackAndWhite.css";

export default function BlackAndWhite({ theme, darkMode }) {
    return (
        <div onClick={theme} className="theme__toggler fas fa-moon"></div>
    );
}
