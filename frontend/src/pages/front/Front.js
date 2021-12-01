import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./front.css";
import Typewriter from "typewriter-effect";
import { TypewriterData } from "../../config/homeConfig";
import BlackAndWhite from "../../components/blackAndWhite/BlackAndWhite";

function Front({theme, darkMode}) {
  const [paddingOn, setPaddingOn] = useState(false);

  const paddingToggle = () => {
    paddingOn ? setPaddingOn(true) : setPaddingOn(false);
  };

  return (
      <div
        className={`frontpage__content ${darkMode ? "dark-mode" : ""}`}
      >
        <BlackAndWhite theme={theme} />
        <div className="frontpage__text">
          <div className="frontpage__title">CrazyDesign...</div>
          <Typewriter
            options={{
              strings: [
                TypewriterData.tw1,
                TypewriterData.tw2,
                TypewriterData.tw3,
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="language">
          <Link to="/home">
            <img
              className="frontpage__img"
              src={process.env.PUBLIC_URL + "/img/icons/hu.svg"}
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="frontpage__img"
              src={process.env.PUBLIC_URL + "/img/icons/en.svg"}
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="frontpage__img"
              src={process.env.PUBLIC_URL + "/img/icons/de.svg"}
              alt=""
            />
          </Link>
        </div>
      </div>
  );
}

export default Front;
