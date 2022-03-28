import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-scroll";
import Share from "../share/Share";
import { useDispatch, useSelector } from "react-redux";
import { loadGetHeader } from "../../redux/reducers/datas/thunks";

export default function Header() {
  const dispatch = useDispatch();
  const { isLoading, allData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadGetHeader());
  }, [dispatch]);

  return (
    <section className="header" id="header">
      <div className="content">
        {isLoading && "tölt..."}
        {allData &&
          allData.map((data, key) => (
            <div key={key}>
              <h3>{data.title}</h3>
              <h4>{data.sub_title}</h4>
            </div>
          ))}
        <Link to="portfolio" className="btn">
          elkészített projektek
        </Link>
      </div>
      <Share />
    </section>
  );
}
