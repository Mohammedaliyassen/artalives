
// import './HomePage.css';
// import React, { useState, useEffect, useRef } from 'react';
// import video1 from '../designs/1-2.mp4';
// import video2 from '../designs/2-2.mp4';
// import './HomePage.css';
// import 'animate.css';
// import WOW from 'wowjs';
// import NavBar from './navBar';
// import BtnUp from './BtnUp';


// function HomePage() {
//   const [motian, setMotian] = useState([]);
//   const [opinions, setOpinions] = useState([]);

//   // useEffect(() => {
//   //   fetch("https://api.artalives.com/api/home-page-videos?populate=*")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setMotian(data.data)
//   //       console.log(data.data);
//   //     })
       
//   // }, []);
//   // console.log("motion is",motian)
//   // useEffect(() => {
//   //   fetch("https://api.artalives.com/api/client-opnions?populate=*")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       // setOpinions(data)
//   //       console.log("opinions is ",data);
//   //     })
       
//   // }, []);

//   const [targetCounts, setTargetCounts] = useState({
//     count1: 250,
//     count2: 350,
//     count3: 180,
//   });

  
//   const [counters, setCounters] = useState({
//     count1: 0,
//     count2: 0,
//     count3: 0,
//   });


//   const counterIntervalRef = useRef(null);

//   useEffect(() => {
    
//     const startCounters = () => {
//       counterIntervalRef.current = setInterval(() => {
//         setCounters((prevCounters) => ({
//           count1: prevCounters.count1 < targetCounts.count1 ? prevCounters.count1 + 1 : prevCounters.count1,
//           count2: prevCounters.count2 < targetCounts.count2 ? prevCounters.count2 + 1 : prevCounters.count2,
//           count3: prevCounters.count3 < targetCounts.count3 ? prevCounters.count3 + 1 : prevCounters.count3,
//         }));
//       }, 10);
//     };

//     const isWidgetInView = (widgetName) => {
//       const widget = document.querySelector(`.widget-item[data-widget="${widgetName}"]`);
//       if (widget) {
//         const widgetPosition = widget.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         return widgetPosition < windowHeight;
//       }
//       return false;
//     };


//     const handleScroll = () => {
//       if (counterIntervalRef.current === null) {
//         for (const widgetName in targetCounts) {
//           if (isWidgetInView(widgetName)) {
//             startCounters();
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
      
//       clearInterval(counterIntervalRef.current);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [targetCounts]);

//   return (
//     <>
//       <NavBar isSticky="yes" />
//       <div className="homePage">
//         <div className='dontStop position-absolute w-100 h-100 z-3 h-sm-50'></div>
//         <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active" data-bs-interval="10000">
//               <video src={video1} autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
//             </div>
//             <div className="carousel-item " data-bs-interval="10000">
//               <video src={video2} autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
//             </div>
//             {/* {motian.map((video, index) => {
//               return (
//                 <div className="carousel-item " data-bs-interval="7000" key={index}>
//                   <video src={`https://api.artalives.com${video.attributes.video.data.attributes.url}`} autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
//                 </div>
//               )
//             })} */}
//           </div>
//         </div>

//         <div className="widget wow animate__backInDown" data-wow-duration=".7s" data-wow-offset="400">
//           <div className="widget-item" data-widget="count1">
//             <h2 data-count={targetCounts.count1}>{counters.count1}</h2>
//             <p>عميل سعد بالتعامل معنا</p>
//           </div>
//           <div className="widget-item" data-widget="count2">
//             <h2 data-count={targetCounts.count2}>{counters.count2}</h2>
//             <p>مشروع مكتمل بنجاح</p>
//           </div>
//           <div className="widget-item" data-widget="count3">
//             <h2 data-count={targetCounts.count3}>{counters.count3}</h2>
//             <p>مكافأت فزنا بها</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;




import React, { useState, useEffect, useRef } from 'react';
import video1 from '../designs/1-2.mp4';
import video2 from '../designs/2-2.mp4';
import './HomePage.css';
import 'animate.css';
import WOW from 'wowjs';
import NavBar from './navBar';
import BtnUp from './BtnUp';

function HomePage() {
  const [targetCounts, setTargetCounts] = useState({
    count1: 900,
    count2: 953,
    count3: 340,
  });

  const [counters, setCounters] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
  });

  const counterIntervalRef = useRef(null);

  useEffect(() => {
    const startCounters = () => {
      counterIntervalRef.current = setInterval(() => {
        setCounters((prevCounters) => ({
          count1: prevCounters.count1 < targetCounts.count1 ? prevCounters.count1 + 1 : prevCounters.count1,
          count2: prevCounters.count2 < targetCounts.count2 ? prevCounters.count2 + 1 : prevCounters.count2,
          count3: prevCounters.count3 < targetCounts.count3 ? prevCounters.count3 + 1 : prevCounters.count3,
        }));
      }, 10);
    };

    const isWidgetInView = (widgetName) => {
      const widget = document.querySelector(`.widget-item[data-widget="${widgetName}"]`);
      if (widget) {
        const widgetPosition = widget.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        return widgetPosition < windowHeight;
      }
      return false;
    };

    const handleScroll = () => {
      if (counterIntervalRef.current === null) {
        for (const widgetName in targetCounts) {
          if (isWidgetInView(widgetName)) {
            startCounters();
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(counterIntervalRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetCounts]);

  return (
    <>
      <NavBar isSticky="yes" />
      <div className="homePage">
        <div className='dontStop position-absolute w-100 h-100 z-3 h-sm-50'></div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-wrap='true' data-bs-pause='false'>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000" >
              <video src={video1} autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
            </div>
            <div className="carousel-item " data-bs-interval="10000">
              <video src={video2} autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
            </div>
          </div>
        </div>
        <div className="widget wow animate__backInDown" data-wow-duration=".7s" data-wow-offset="400">
          <div className="widget-item" data-widget="count1">
            <h2 data-count={targetCounts.count1}>{counters.count1}</h2>
            <p>عميل سعد بالتعامل معنا</p>
          </div>
          <div className="widget-item" data-widget="count2">
            <h2 data-count={targetCounts.count2}>{counters.count2}</h2>
            <p>مشروع مكتمل بنجاح</p>
          </div>
          <div className="widget-item" data-widget="count3">
            <h2 data-count={targetCounts.count3}>{counters.count3}</h2>
            <p> عميل مكرر </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;




