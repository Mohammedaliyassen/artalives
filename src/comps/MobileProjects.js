import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MobileProjects.css'; 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataMobile } from "../redux/slices/mobileData";
import Loading from './Loading';


const MobileProjects = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataMobile())
      .then(() => setLoading(false))
      .catch((error) => {

        setLoading(true);
      });
  }, [dispatch]);


  const selector = useSelector((state) => state.mobile);
  const ourData = selector.data;


  if (error) {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "blue";
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }
  console.log(ourData)


  return (
    <>
    <div className='content-btn'>
    <button style={{backgroundColor:"rgb(52, 152, 219)" , border:"none" ,width: "152px"}}><a   style={{color:"white" }}  href='https://brief.artalives.com'>اطلب الان</a> </button>     
       <h3 className='h3-projects'>تطبيقات موبايل</h3>
    </div> 
      
    {/* <div className="projects-list">
      {ourData.map((project , index) => (
        <div className="project-card-mobile" key={project.id}>
          <h3>{project.attributes.title}</h3>
          <Slider {...sliderSettings}>
            {ourData.map((image,index) => (
              <div key={index}>
                <img src={`https://api.artalives.com${image.attributes.screenshots.data[0].attributes.url}` } alt={`صورة ${index + 1}`} />
              </div>
            ))}
          </Slider>
          
        </div>
      ))}
    </div> */}


    <h1>  <img src='https://cdn.pixabay.com/animation/2023/07/19/01/41/01-41-18-281_512.gif' alt='soon'/> </h1>



    </>
  );
};

export default MobileProjects;
