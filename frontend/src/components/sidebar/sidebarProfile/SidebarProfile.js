import React from "react";
import "./sidebarProfile.css";
import { ContentData } from "../../../config/homeConfig";

export default function SidebarProfile() {
  return (
    <div className="sidebar__profile">
      <img src={ContentData.personalData.img} alt="" />
      <h3>{ContentData.personalData.name}</h3>
      <p>{ContentData.personalData.profession}</p>
    </div>
  );
}
