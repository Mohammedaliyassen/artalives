

import React, { useState, useEffect } from 'react';
import './Loading.css'; 
import videoLoading from "../imges/loadingg.mp4"
const Loading = () => {

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);


  return (

    showLoading && (
      <div className="loading">
        
        <video muted autoPlay className='video'> 
          <source src={videoLoading} type="video/mp4"  />
      
          Your browser does not support the video tag.
        </video>
      </div>
    )
  );
};

export default Loading;

