import React, { useEffect, useState } from "react";
import "./LogoProjects.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataLogo } from "../redux/slices/LogoData";

const LogoProjects = ({ showDetalisBtn, showHeading, showTitle }) => {
  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(false);
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getDataLogo())
      .then(() => setLoading(false))
      .catch((error) => {
        setLoading(true);
      });
  }, [dispatch]);

  const selector = useSelector((state) => state.logo);
  const ourData = selector.data;
        console.log(ourData)
  if (error) {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "blue";
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {showHeading === "true" ? (
        <div className="container">
          <div className="content-btn">
            <a
              style={{ color: "white", width: "152px" }}
              href="https://brief.artalives.com"
            >
              {" "}
              <button style={{}}> اطلب الان </button>{" "}
            </a>
            <h3 className="h3-projects">لوجو</h3>
          </div>
        </div>
      ) : (
        <h3 className="h3-projects"> خدمة لوجو </h3>
      )}
      <div className="logo-list">
        {ourData.length > 0 ? (
          ourData.map((photo, index) => (
            <div
              className="logo-card wow animate__backInDown"
              data-wow-duration=".7s"
              data-wow-offset="400"
              key={index}
            >
              <img
                src={`https://api.artalives.com${photo.attributes.frontPhoto.data.attributes.formats.thumbnail.url}`}
                alt=""
              />
              {showTitle === "true" ? <h3>{photo.attributes.title}</h3> : <></>}
              {showDetalisBtn === "true" ? (
                <Link
                  className="btn btn-primary mt-4"
                  to={`/detailslogo/${photo.id}`}
                >
                  {" "}
                  عرض التفاصيل{" "}
                </Link>
              ) : (
                <></>
              )}
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
};

export default LogoProjects;
