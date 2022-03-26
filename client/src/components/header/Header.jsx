import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-scroll";
import Share from "../share/Share";
import { useDispatch, useSelector } from "react-redux";
import { loadAllData } from "../../redux/reducers/datas/thunks";

export default function Header(props) {
  const dispatch = useDispatch();

  const { isLoading, allData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadAllData());
  }, [dispatch]);

  const personalData = {
    name: "Höller Gergő",
    profession: "junior full stack fejlesztő vagyok",
  };
  return (
    <section className="header" id="header">
      <div className="content">
        {isLoading && "tölt..."}
        {allData && allData.map((data) => <h3>{data.title}</h3>)}

        <p>{personalData.profession}</p>
        <Link to="portfolio" className="btn">
          elkészített projektek
        </Link>
      </div>

      <Share />
    </section>
  );
}
