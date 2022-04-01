import React from "react";
import "./share.css";
import { ExternalLink } from "react-external-link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGetSocial } from "../../redux/reducers/social/thunks";

export default function Share() {
  const dispatch = useDispatch();
  const { getSocial } = useSelector((state) => state.social);

  useEffect(() => {
    dispatch(loadGetSocial());
  }, [dispatch]);

  return (
    <div className="share">
      {getSocial &&
        getSocial.map((social) => (
          <ExternalLink key={social.id} href={social.path}>
            <div className={`share__icon ${social.class_name}`}></div>
          </ExternalLink>
        ))}

      {/* <Link to="#" className="fab fa-twitter"></Link> */}
      {/* <Link to="#" className="fab fa-linkedin"></Link> */}
      {/* <Link to="#" className="fab fa-github"></Link> */}
    </div>
  );
}
