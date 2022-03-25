import React from "react";
import "./heading.css";

const Heading = ({ heading }) => {
  return (
    <div className="heading">
      <span className="span_first">{"${"} <h3 className="title">{heading.title_first}</h3> </span>
      <span className="span_last"><h3>{heading.title_last}</h3> {"}"}</span>
    </div>
  );
};

export default Heading;
