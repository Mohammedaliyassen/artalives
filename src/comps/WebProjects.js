import React from 'react';
import { Link } from 'react-router-dom';
import './WebProjects.css';

const projects = [
  {
    id: 1,
    title: 'مشروع 1',
    link: '/project1',
  },
  {
    id: 2,
    title: 'مشروع 2',
    link: '/project2',
  },
  {
    id: 3,
    title: 'مشروع 3',
    link: '/project3',
  },
  {
    id: 4,
    title: 'مشروع 4',
    link: '/project4',
  },
  {
    id: 5,
    title: 'مشروع 5',
    link: '/project5',
  },
  {
    id: 6,
    title: 'مشروع 6',
    link: '/project6',
  },
  {
    id: 7,
    title: 'مشروع 7',
    link: '/project7',
  },
  {
    id: 8,
    title: 'مشروع 8',
    link: '/project8',
  },
  
];

const WebProjects = () => {
  return (
    <>
    <div className='content-btn'>
       <button style={{backgroundColor:"#3498db" , width: "152px" , border:"none"}}><a   style={{color:"white" }}  href=''>اطلب الان</a> </button>   
       <h3 className='h3-projects'> مواقع ويب و متاجر الكترونية </h3>
    </div> 
    <div className="projects-list">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.title}</h3>
          <Link to={project.link} className='web'>عرض المشروع</Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default WebProjects;
