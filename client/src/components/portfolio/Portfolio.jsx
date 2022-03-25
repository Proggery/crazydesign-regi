import React from "react";
import "./portfolio.css";
import { ExternalLink } from "react-external-link";
import Heading from "../heading/Heading";
import { refImg1, refImg3, refImg4 } from "../../config/images";

export default function Portfolio() {
  const portfolio = {
    title_first: "elkészített",
    title_last: "projektek",
    content: [
      {
        img: `${refImg3}`,
        name: "Dr. Sánta Antal",
        desc: "html/css/js",
        url: "https://santadental.hu/",
      },
      {
        img: `${refImg4}`,
        name: "Dentro bútor webáruház",
        desc: "html/css/js/YII",
        url: "https://dentro.hu/",
      },
      {
        img: `${refImg1}`,
        name: "Beach Resort",
        desc: "html/css/js/react/node.js",
        url: "http://beach-resort.hollergergo.hu/",
      },
    ],
  };
  return (
    <section className="portfolio" id="portfolio">
      <Heading heading={portfolio} />
      <div className="box-container">
        {portfolio.content.map((work, key) => (
          <div key={key} className="box">
            <ExternalLink href={work.url}>
              <img src={work.img} alt="" />
              <div className="content">
                <h3>{work.name}</h3>
                <span className="portfolio__desc">{work.desc}</span>
                <div className="portfolio__url">{work.url}</div>
              </div>
            </ExternalLink>
          </div>
        ))}
      </div>
    </section>
  );
}
