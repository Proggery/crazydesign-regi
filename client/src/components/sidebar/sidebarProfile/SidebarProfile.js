import React from "react";
import "./sidebarProfile.css";
import { ProfilImg } from "../../../config/images";

export default function SidebarProfile() {
  const personalData = {
    img: `${ProfilImg}`,
    name: "Höller Gergő",
    profession: "junior full stack fejlesztő vagyok",
  };
  return (
    <div className="sidebar__profile">
      <img src={personalData.img} alt="" />
      <h3>{personalData.name}</h3>
      <p>{personalData.profession}</p>
    </div>
  );
}
