import React from "react";
import "./about.css";
import { ContentData, Skills } from "../../config/homeConfig";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section className="about" id="about">
      {ContentData.about.title}
      <div className="row">
        <div className="box-container">
          <div className="box">
            <h3>365+</h3>
            <p>nap tanulás</p>
          </div>
          <div className="box">
            <h3>180+</h3>
            <p>tutorial megnézése</p>
          </div>
          <div className="box">
            <h3>1.5+</h3>
            <p>év tapasztalat</p>
          </div>
          <div className="box">
            <h3>100+</h3>
            <p>% Motiváció</p>
          </div>
        </div>

        <div className="content">
          <h3>
            A nevem <span>{ContentData.personalData.name}</span>
          </h3>
          <p>{ContentData.about.text1}</p>
          <p>{ContentData.about.text2}</p>
          <Link to="contact" className="btn">
            írj nekem
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="progress">
          {Skills.col1.map((skill, index) => (
            <div key={index}>
              <h3>
                {skill.title}
                <span>{skill.progress}</span>
              </h3>
              <div className="bar">
                <span style={{ width: `${skill.progress}` }}></span>
              </div>
            </div>
          ))}
        </div>
        <div className="progress">
          {Skills.col2.map((skill, index) => (
            <div key={index}>
              <h3>
                {skill.title}
                <span>{skill.progress}</span>
              </h3>
              <div className="bar bar-2-1">
                <span style={{ width: `${skill.progress}` }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
