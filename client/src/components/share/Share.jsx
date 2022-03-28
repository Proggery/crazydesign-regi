import React from "react";
import "./share.css";
import { ExternalLink } from "react-external-link";

export default function Share() {
  return (
    <div className="share">
      <ExternalLink href="http://facebook.com/">
        <div className="share__icon fab fa-facebook-f"></div>
      </ExternalLink>
      <ExternalLink>
        <div className="share__icon fab fa-instagram"></div>
      </ExternalLink>



      {/* <Link to="#" className="fab fa-twitter"></Link> */}
      {/* <Link to="#" className="fab fa-linkedin"></Link> */}
      {/* <Link to="#" className="fab fa-github"></Link> */}
    </div>
  );
}
