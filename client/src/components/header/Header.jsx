import React from "react";
import "./header.css";
import { Link } from "react-scroll";
import Share from "../share/Share";

export default function Header(props) {
  const personalData = {
    name: "Höller Gergő",
    profession: "junior full stack fejlesztő vagyok",
  };
  return (
    <section className="header" id="header">
      <div className="content">
        <h3>{personalData.name}</h3>
        <p>{personalData.profession}</p>
        <Link to="portfolio" className="btn">
          elkészített projektek
        </Link>
      </div>

      <Share />
    </section>
  );
}
