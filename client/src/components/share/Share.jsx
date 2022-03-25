import React from "react";
import "./share.css";
import { Link } from "react-scroll";

export default function Share() {
  return (
    <div className="share">
      <Link to="#" className="fab fa-facebook-f"></Link>
      <Link to="#" className="fab fa-twitter"></Link>
      <Link to="#" className="fab fa-instagram"></Link>
      <Link to="#" className="fab fa-linkedin"></Link>
      <Link to="#" className="fab fa-github"></Link>
    </div>
  );
}
