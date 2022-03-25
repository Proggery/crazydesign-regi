import React, { useState } from "react";
import "./home.css";

import Sidebar from "../../components/sidebar/Sidebar.jsx";
import BlackAndWhite from "../../components/blackAndWhite/BlackAndWhite.jsx";
import ToggleBtn from "../../components/toggleBtn/ToggleBtn.jsx";
import Header from "../../components/header/Header.jsx";
import About from "../../components/about/About.jsx";
import Services from "../../components/services/Services.jsx";
import Portfolio from "../../components/portfolio/Portfolio.jsx";
import Contact from "../../components/contact/Contact.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Skills from "../../components/skills/Skills";

export default function Home({ theme, darkMode }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className={`home__frame ${darkMode ? "dark-mode" : ""}`}>
      <Sidebar
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />

      <ToggleBtn sidebarToggle={sidebarToggle} sidebarActive={sidebarActive} />
      <BlackAndWhite theme={theme} />

      <Header />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
