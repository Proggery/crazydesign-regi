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
      {getData &&
        getData.map((item) => (
          <div key={item.id}>
            <img
              src={`http://localhost:5555/static/images/profile-img/${item.img_name}`}
              alt=""
            />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
    </div>
  );
}
