import React from "react";
import "./header.css";
import { Link } from "react-scroll";
import { ContentData } from "../../config/homeConfig";
import Share from "../share/Share";

export default function Header(props) {
  return (
    <section className="header" id="header">
      <div className="content">
        <h3>{ContentData.personalData.name}</h3>
        <p>{ContentData.personalData.profession}</p>
        <Link to="portfolio" className="btn">
          elkészített projektek
        </Link>
      </div>

      <Share />
      
    </section>
  );
}
