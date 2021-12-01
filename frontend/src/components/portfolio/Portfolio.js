import React from "react";
import "./portfolio.css";
import { ContentData } from "../../config/homeConfig";
import { ExternalLink } from "react-external-link";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      {ContentData.portfolio.title}

      <div className="box-container">
        {ContentData.portfolio.content.map((work, index) => (
          <div className="box">
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
