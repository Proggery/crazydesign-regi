import React, { useState } from "react";
import "./home.css";

import Sidebar from "../../components/sidebar/Sidebar";
import BlackAndWhite from "../../components/blackAndWhite/BlackAndWhite";
import ToggleBtn from "../../components/toggleBtn/ToggleBtn";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

export default function Home({ theme, darkMode }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className={`home__frame ${darkMode ? "dark-mode" : ""}`}>
      <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />

      <ToggleBtn sidebarToggle={sidebarToggle} sidebarActive={sidebarActive} />
      <BlackAndWhite theme={theme} />

      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
