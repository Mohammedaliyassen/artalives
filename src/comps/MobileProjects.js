import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '.LogoProjects.css'; 

const projects = [
  {
    id: 1,
    title: 'مشروع 1',
    link: '/project1',
    images: [
        'https://pentagram-production.imgix.net/8eea63bd-4f72-4ffb-8f35-61fc8d4fa559/AH_Axess_01.jpg?rect=286%2C0%2C5187%2C3240&w=360&fit=crop&crop=entropy&fm=jpg&q=70&auto=format&h=226',
        'https://www.ramstarab.com/wp-content/uploads/2018/06/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A97-660x330.jpg',
        'https://www.ramstarab.com/wp-content/uploads/2018/06/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A96.jpg',
        
    ],
  },
  {
    id: 2,
    title: 'مشروع 2',
    link: '/project2',
    images: [
        'https://www.ramstarab.com/wp-content/uploads/2018/06/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A910.jpg',
        'https://pentagram-production.imgix.net/8eea63bd-4f72-4ffb-8f35-61fc8d4fa559/AH_Axess_01.jpg?rect=286%2C0%2C5187%2C3240&w=360&fit=crop&crop=entropy&fm=jpg&q=70&auto=format&h=226',
        'https://www.ramstarab.com/wp-content/uploads/2018/06/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A97-660x330.jpg',
    ],
  },
  {
    id: 3,
    title: 'مشروع 3',
    link: '/project3',
    images: [
        'https://www.ramstarab.com/wp-content/uploads/2018/06/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A97-660x330.jpg',
        'https://www.ramstarab.com/wp-content/uploads/2018/06/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A910.jpg',
        'https://pentagram-production.imgix.net/8eea63bd-4f72-4ffb-8f35-61fc8d4fa559/AH_Axess_01.jpg?rect=286%2C0%2C5187%2C3240&w=360&fit=crop&crop=entropy&fm=jpg&q=70&auto=format&h=226',
        
    ],
  },
  {
    id: 4,
    title: 'مشروع 4',
    link: '/project4',
    images: [
        'https://pentagram-production.imgix.net/8eea63bd-4f72-4ffb-8f35-61fc8d4fa559/AH_Axess_01.jpg?rect=286%2C0%2C5187%2C3240&w=360&fit=crop&crop=entropy&fm=jpg&q=70&auto=format&h=226',
        'https://www.ramstarab.com/wp-content/uploads/2018/06/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A910.jpg',
        'https://www.ramstarab.com/wp-content/uploads/2018/06/%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A97-660x330.jpg',
    ],
  },
 
];

const MobileProjects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className='content-btn'>
    <button style={{backgroundColor:"rgb(52, 152, 219)" , border:"none" ,width: "152px"}}><a   style={{color:"white" }}  href='http://127.0.0.1:5500/#/'>اطلب الان</a> </button>     
       <h3 className='h3-projects'>تطبيقات موبايل</h3>
    </div> 
      
    <div className="projects-list">
      {projects.map((project) => (
        <div className="project-card-mobile" key={project.id}>
          <h3>{project.title}</h3>
          <Slider {...sliderSettings}>
            {project.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`صورة ${index + 1}`} />
              </div>
            ))}
          </Slider>
          
        </div>
      ))}
    </div>
    </>
  );
};

export default MobileProjects;
