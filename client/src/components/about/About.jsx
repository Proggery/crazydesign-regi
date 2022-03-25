import React from "react";
import "./about.css";
import { Link } from "react-scroll";
import Heading from "../heading/Heading";

export default function About() {
  const personalData = {
    name: "Höller Gergő",
  };
  const about = {
    title_first: "ez lennék",
    title_last: "én",
    text1: `
    Webfejlesztő karrierem 2020 elején kezdődött, mikor ugyanis
    eldöntöttem, hogy eljött az ideje annak, hogy a hobbimmal
    kereshessem meg a kenyeremet, így először autodidakta módon, majd
    egy fél év múlva, felnőttképzésen szereztem meg a jelen lévő
    tudást, amit napról napra csiszolok, hogy a legjobbat hozhassam ki
    belőle!
    `,
    text2: `
    Személyemet a kitartóság, precizitás, pontosság, figyelmesség
    jellemzi!
    `,
  };
  return (
    <section className="about" id="about">
      <Heading heading={about} />
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
            A nevem <span>{personalData.name}</span>
          </h3>
          <p>{about.text1}</p>
          <p>{about.text2}</p>
          <Link to="contact" className="btn">
            írj nekem
          </Link>
        </div>
      </div>
    </section>
  );
}
