import React, { useEffect } from "react";
import "./sidebarProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { loadGetData } from "../../../redux/user/reducers/thunks";

export default function SidebarProfile() {
  const dispatch = useDispatch();
  const { getData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadGetData());
  }, [dispatch]);

  // const personalData = {
  //   img: `${ProfilImg}`,
  //   name: "alap teszt",
  //   profession: "alap teszt",
  // };
  // const personalData = {
  //   img: `${ProfilImg}`,
  //   name: "Höller Gergő",
  //   profession: "junior full stack fejlesztő vagyok",
  // };
  return (
    <div className="sidebar__profile">
      <div>
        <img
          src={`http://localhost:5555/static/images/profile-img/${
            getData && getData.img_name
          }`}
          alt=""
        />
        <h3>{getData && getData.name}</h3>
        <p>{getData && getData.desc}</p>
      </div>
    </div>
  );
}
