import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-scroll";
import Share from "../share/Share";
import { useDispatch, useSelector } from "react-redux";
import { loadGetData } from "../../redux/header/reducers/thunks";

export default function Header() {
  const dispatch = useDispatch();
  const {getData } = useSelector((state) => state.header);

  useEffect(() => {
    dispatch(loadGetData());
  }, [dispatch]);

  return (
    <section className="header" id="header">
      <div className="content">
        {getData &&
          getData.map((data, key) => (
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
