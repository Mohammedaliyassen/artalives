
import React, { useEffect, useState } from "react";
import "./LogoProjects.css";
import { Link } from "react-router-dom";
import Loading from './Loading';
import { useDispatch, useSelector } from "react-redux";
import { getDataSocial } from "../redux/slices/SocialData";

const SocialMedia = ({showHeading,showTitle}) => {
  const [isLoading, setLoading] = useState(true);
  const [medias, setMedias] = useState([]);
  const [error, setError] = useState(false);
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getDataSocial())
      .then(() => setLoading(false))
      .catch((error) => {
       
        setLoading(true);
      });
  }, [dispatch]);

  const selector = useSelector((state) => state.social);
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
      {showHeading==="true" ? 
      <div className='content-btn'>
       <button style={{backgroundColor:"#3498db" , width:"200px" , border:"none"}}><a   style={{color:"white" }}  href='http://127.0.0.1:5500/#/'>اطلب الان</a> </button>   
       <h3 className='h3-projects'> بوستات سوشيال ميديا</h3>
    </div>    : <h3 className='h3-projects'> خدمة سوشيال ميديا  </h3> } 
      <div className="logo-list">
        {ourData.length > 0 ? (
          ourData.map((photo, index) => (
            <div className="logo-card" key={index}>
           
              <img
                src={`http://154.56.56.115${photo.attributes.frontPhoto.data.attributes.url}`}
                alt=""
              />
               {showTitle==="true" ?   <h3>{photo.attributes.title}</h3>  : <></>} 
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
};

export default SocialMedia;

















