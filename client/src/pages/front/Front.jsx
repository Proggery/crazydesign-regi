import React from "react";
import { Link } from "react-router-dom";
import "./front.css";
import BlackAndWhite from "../../components/blackAndWhite/BlackAndWhite.jsx";
import TextWriter from "../../components/textWriter/TextWriter";
import { HungarianIcon, DeutschIcon, EnglishIcon } from "../../config/images";

function Front({ theme, darkMode }) {
  return (
    <div className={`frontpage__content ${darkMode ? "dark-mode" : ""}`}>
      <BlackAndWhite theme={theme} />
      <div className="frontpage__text">
        <div className="frontpage__title">CrazyDesign...</div>
        <TextWriter />
      </div>
      <div className="language">
        <Link to="/home">
          <img className="frontpage__img" src={HungarianIcon} alt="" />
        </Link>
        <Link to="#">
          <img className="frontpage__img" src={DeutschIcon} alt="" />
        </Link>
        <Link to="#">
          <img className="frontpage__img" src={EnglishIcon} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Front;
