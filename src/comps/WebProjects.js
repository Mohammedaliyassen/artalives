import React from 'react';
import { Link } from 'react-router-dom';
import './WebProjects.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataWeb } from "../redux/slices/webData";
import Loading from './Loading';

const WebProjects = () => {
  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataWeb())
      .then(() => setLoading(false))
      .catch((error) => {

        setLoading(true);
      });
  }, [dispatch]);


  const selector = useSelector((state) => state.web);
  const ourData = selector.data;


  if (error) {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "blue";
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }
  console.log(ourData[0].attributes.screenshots.data[0].attributes.url)


  return (
    <>
      <div className='content-btn'>
        <button style={{ backgroundColor: "#3498db", width: "152px", border: "none" }}><a style={{ color: "white" }} href='https://brief.artalives.com'>اطلب الان</a> </button>
        <h3 className='h3-projects'> مواقع ويب و متاجر الكترونية </h3>
      </div>
      <div className="projects-list">


        {ourData.length > 0 ? (
          ourData.map((project) =>  (
            
            <div className="project-card" key={project.id}>
              <h3>{project.attributes.title}</h3>
              
              <img src={`https://api.artalives.com${project.attributes.screenshots.data[0].attributes.url}` }
               alt={project.attributes.title} className='webImg'/> 
              <Link to={project.attributes.url} className='web' target='_blank'>عرض المشروع</Link>
            </div>
          ))) :
          <p> لا توجد بيانات لعرضها  </p>}
      </div>
    </>
  );
};

export default WebProjects;
