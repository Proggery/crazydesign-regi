import React from 'react';
import "./navbar.css";
import { Link } from "react-scroll";

export default function Navbar({sidebarActive, setSidebarActive}) {
    return (
        <nav className="navbar">
            <Link to="header" onClick={() => setSidebarActive(false)}>
                <i className="fas fa-home"></i>
            </Link>
            <Link to="about" onClick={() => setSidebarActive(false)}>bemutatkozás</Link>
            <Link to="services" onClick={() => setSidebarActive(false)}>több infó</Link>
            <Link to="portfolio" onClick={() => setSidebarActive(false)}>projektek</Link>
            <Link to="contact" onClick={() => setSidebarActive(false)}>elérhetőség</Link>
        </nav>
    );
}
