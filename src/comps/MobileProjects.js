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
        'https://cdn.pixabay.com/photo/2021/07/10/15/45/online-shop-6401739_640.png',
        'https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png',
                'https://cdn.pixabay.com/photo/2021/07/10/14/31/online-shopping-6401553_640.png',
        
    ],
  },
  {
    id: 2,
    title: 'مشروع 2',
    link: '/project2',
    images: [
         'https://cdn.pixabay.com/photo/2021/07/10/15/45/online-shop-6401739_640.png',
        'https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png',
                'https://cdn.pixabay.com/photo/2021/07/10/14/31/online-shopping-6401553_640.png',
    ],
  },
  {
    id: 3,
    title: 'مشروع 3',
    link: '/project3',
    images: [
    
        'https://cdn.pixabay.com/photo/2020/08/03/10/00/credit-card-5459711_640.png',
        'https://cdn.pixabay.com/photo/2018/05/16/22/21/shopping-3407232_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/07/10/14/31/online-shopping-6401553_640.png',
        
    ],
  },
  {
    id: 4,
    title: 'مشروع 4',
    link: '/project4',
    images: [
          'https://cdn.pixabay.com/photo/2020/08/03/10/00/credit-card-5459711_640.png',
        'https://cdn.pixabay.com/photo/2018/05/16/22/21/shopping-3407232_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/07/10/14/31/online-shopping-6401553_640.png'
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
    <button style={{backgroundColor:"rgb(52, 152, 219)" , border:"none" ,width: "152px"}}><a   style={{color:"white" }}  href='https://brief.artalives.com'>اطلب الان</a> </button>     
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
