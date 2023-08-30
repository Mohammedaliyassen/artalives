import "./LogoProjects.css"
import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
import Loading from "./Loading";
import { getDataAnimations } from "../redux/slices/animationData";
import { useDispatch, useSelector } from "react-redux";

const MotionGrafic = () => {
  const [isLoading, setLoading] = useState(true);
  // const [ourData, setOurData] = useState([]);
  const [error, setError] = useState(false);
const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getDataAnimations())
      .then(() => setLoading(false))
      .catch((error) => {
       
        setLoading(true);
      });
  }, [dispatch]);

  const selector = useSelector((state) => state.animation);
  const ourData = selector.data;

  if (error) {
 
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "blue";
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }
  console.log("url", ourData);
  return (
    <>
      <div className='content-btn'>
       <button style={{backgroundColor:"rgb(52, 152, 219)" , border:"none" ,width: "152px"}}><a   style={{color:"white" }}  href='https://brief.artalives.com'>اطلب الان</a> </button>   
       <h3 className='h3-projects'>موشن جرافيك  </h3>
    </div> 
      <div className="logo-list">
        {ourData.length > 0 ? (
          ourData.map((photo, index) => (
            <div className="logo-card" key={index}>
              
              <video src={`https://api.artalives.com${photo.attributes.video.data[0].attributes.url}`} autoPlay loop muted style={{  objectFit: "cover" }}></video>
              <h3 className="mb-4">{photo.attributes.title}</h3>
            
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
};

export default MotionGrafic;
