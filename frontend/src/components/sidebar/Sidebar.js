import React from "react";
import "./sidebar.css";
import SidebarProfile from "./sidebarProfile/SidebarProfile";
import Navbar from "./navbar/Navbar";
import Logo from "./logo/Logo";

export default function Sidebar({sidebarActive, setSidebarActive}) {
    return (
        <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
            <SidebarProfile />
            <Navbar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
            <Logo />
        </div>
    );
}
