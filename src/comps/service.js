// import React, { useEffect, useState } from "react";
// import "./service.css";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";

// function Service() {
//   // const [logo, setLogo] = useState([]);
//   // const [motian, setMotian] = useState([]);
//   // const [visual, setVisual] = useState([]);
//   // const [social, setSocial] = useState([]);

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   useEffect(() => {
//     fetch("https://154.56.56.115/api/logo-designs?populate=*")
//       .then((res) => res.json())
//       .then((data) => {
//         setLogo(data.data);
//       });
//   }, []);

//   useEffect(() => {
//     fetch("https://154.56.56.115/api/animations?populate=*")
//       .then((res) => res.json())
//       .then((data) => {
//         setMotian(data.data);
//       });
//   }, []);

//   useEffect(() => {
//     fetch("https://154.56.56.115/api/visual-identities?populate=*")
//       .then((res) => res.json())
//       .then((data) => {
//         setVisual(data.data);
//       });
//   }, []);

//   useEffect(() => {
//     fetch("https://154.56.56.115/api/social-medias?populate=*")
//       .then((res) => res.json())
//       .then((data) => {
//         setSocial(data.data);
//       });
//   }, []);

//   const logo = [
//     "../imges/logo/Artboard 42logos.jpg",
//     "../imges/logo/Artboard 47logos.jpg",
//     "../imges/logo/Artboard 5logos.jpg",
//   ];
//   // const motian = [
//   //   {
//   //     id: 1,
//   //     images: [
//   //         '',
//   //         '',
//   //         '',

//   //     ],
//   //   },

//   // ];
// const visual = [
//   "../imges/visual/1.jpg",
//   "../imges/visual/2.jpg",
//   "../imges/visual/3.jpg",
// ];
//   const social = [
//     "../imges/social/14.png",
//     "../imges/social/BR post3.png",
//     "../imges/social/وفر-فلوسك.png",
//   ];


//   return (
//     <div className="container text-center mt-5 pt-5">
//       {/* Your title and subtitle JSX */}
//       <div className="sliders-projects">
//         <div className="project-card-mobile" key={1}>
//           <h3>تصميم لوجو</h3>
//           <Link to={"/motion"}>
//             <Slider {...sliderSettings}>
//               {logo.length > 0 ? (
//                 logo.map((photo, index) => (
//                   <div key={index}>
//                     <img src={photo} alt={`Logo ${index}`} />
//                   </div>
//                 ))
//               ) : (
//                 <p>No data available.</p>
//               )}
//             </Slider>
//           </Link>
//         </div>
//         <div className="project-card-mobile" key={3}>
//           <h3>تصميم هويات بصرية</h3>
//           <Link to={"/Portfolio"}>
//             <Slider {...sliderSettings}>
//               {visual.length > 0 ? (
//                 visual.map((photo, index) => (
//                   <>
//                     <img src={photo} alt={"photo" + (index + 1)} key={index} />
//                   </>
//                 ))
//               ) : (
//                 <p>No data available.</p>
//               )}
//             </Slider>
//           </Link>
//         </div>
//         <div className="project-card-mobile" key={4}>
//           <h3>تصميم بوستات</h3>
//           <Link to={"/Portfolio"}>
//             <Slider {...sliderSettings}>
//               {social.length > 0 ? (
//                 social.map((photo, index) => (
//                   <>
//                     <img src={photo} alt={"photo" + (index + 1)} key={index} />
//                   </>
//                 ))
//               ) : (
//                 <p>No data available.</p>
//               )}
//             </Slider>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Service;





import React, { useEffect, useState } from "react";
import "./service.css";
import visual1 from "../imges/visual/1.jpg";
import visual2 from "../imges/visual/2.jpg";
import visual3 from "../imges/visual/3.jpg";
import logo1 from "../imges/logo/Artboard 42logos.jpg";
import logo2 from "../imges/logo/Artboard 47logos.jpg";
import logo3 from "../imges/logo/Artboard 4logos.jpg";
import logo4 from "../imges/logo/Artboard 5logos.jpg";
import web1 from "../imges/web/1.jpg";
import web2 from "../imges/web/2.jpg";
import web3 from "../imges/web/3.png";
import web4 from "../imges/web/4.jpg";
import social1 from "../imges/social/14.png";
import social2 from "../imges/social/BR post3.png";
import social3 from "../imges/social/وفر-فلوسك.png";
import motion1 from "../imges/motion/1.mp4";
import motion2 from "../imges/motion/2.mp4";
import motion3 from "../imges/motion/3.mp4";
import motion4 from "../imges/motion/4.mp4";
import setActiveButton from  "./SideBar"
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Service() {

  const visual = [

    visual2,
    visual3,
  ];
  const social = [

    social2,
    social3,
  ];
  const logo = [
    logo2,
    logo3,
    logo4,
  ];
  const Web = [
    web2,
    web3,
    web4,
  ];
  const motion = [
    motion1,
    motion2,
    motion3,
  ];

  return (
    <>
      <div className=" container mt-5">
        <div className="row " >


          <div id="carouselLogo" className="carousel slide carouselLogo col-lg-4 col-md-6 col-sm-12" data-bs-ride="carousel" data-bs-interval='3000'>
            
            <Link to={"/Portfolio"} onClick={()=>{
              
            }}>
              <h1>تصميم شعار</h1>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={logo1} className="d-block w-100" alt="..." />
                </div>
                {logo.map((e) => {
                  return (<>
                    <div className="carousel-item ">
                      <img src={e} className="d-block w-100" alt="..." />
                    </div>
                  </>
                  )
                })}
              </div>
            </Link>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselLogo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselLogo" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div id="carouselVisual" className="carousel slide carouselVisual col-lg-4 col-md-6 col-sm-12" data-bs-ride="carousel" interval='3000'>
            <Link to={"/Portfolio"} >
              <h1>تصميم هوية بصرية</h1>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={visual1} className="d-block w-100" alt="..." />
                </div>
                {visual.map((e) => {
                  return (<>
                    <div className="carousel-item ">
                      <img src={e} className="d-block w-100" alt="..." />
                    </div>
                  </>
                  )
                })}
              </div>
            </Link>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselVisual" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselVisual" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div id="carouselWeb" className="carousel slide carouselWeb col-lg-4 col-md-6 col-sm-12" data-bs-ride="carousel" data-bs-interval='3000'>
            <Link to={"/Portfolio"} >
              <h1>تصميم مواقع الكترونية</h1>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={web1} className="d-block w-100" alt="..." />
                </div>
                {Web.map((e) => {
                  return (<>
                    <div className="carousel-item ">
                      <img src={e} className="d-block w-100" alt="..." />
                    </div>
                  </>
                  )
                })}
              </div>
            </Link>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselWeb" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselWeb" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div id="carouselMobile" className="carousel slide carouselMobile col-lg-4 col-md-6 col-sm-12" data-bs-ride="carousel" data-bs-interval='3000'>
            <Link to={"/Portfolio"} >
              <h1>Social</h1>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={visual1} className="d-block w-100" alt="..." />
                </div>
                {visual.map((e) => {
                  return (<>
                    <div className="carousel-item ">
                      <img src={e} className="d-block w-100" alt="..." />
                    </div>
                  </>
                  )
                })}
              </div>
            </Link>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselMobile" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselMobile" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div id="carouselMotion" className="carousel slide carouselMotion col-lg-4 col-md-6 col-sm-12" data-bs-ride="carousel" data-bs-interval='3000'>
            <Link to={"/Portfolio"} >
              <h1>الموشن جرافيك</h1>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video src={motion4} className="d-block w-100" muted autoPlay loop  >
                    Your Browser old version please update it
                  </video>
                </div>
                {motion.map((e) => {
                  return (<>
                    <div className="carousel-item ">
                      <video src={e} className="d-block w-100" muted autoPlay loop  >
                        Your Browser old version please update it
                      </video>
                    </div>
                  </>
                  )
                })}
              </div>
            </Link>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselMotion" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselMotion" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div id="carouselSocial" className="carousel slide carouselSocial col-lg-4 col-md-6 col-sm-12" data-bs-ride="carousel" interval='3000'>
            <Link to={"/Portfolio"} >
              <h1>تصميم بوستات</h1>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={social1} className="d-block w-100" alt="..." />
                </div>
                {social.map((e) => {
                  return (<>
                    <div className="carousel-item ">
                      <img src={e} className="d-block w-100" alt="..." />
                    </div>
                  </>
                  )
                })}
              </div>
            </Link>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselSocial" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselSocial" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )


}



export default Service;
