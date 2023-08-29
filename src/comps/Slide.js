import React, { useState } from 'react';
import './style.css'; 


const ImageSlider = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function startImageAnimation() {
    setCurrentIndex(1);
  }

  function resetImageAnimation() {
    setCurrentIndex(0);
  }

  return (
    <div className="image-container">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          style={{ opacity: index === currentIndex ? 1 : 0 }}
          onMouseOver={startImageAnimation}
          onMouseOut={resetImageAnimation}
        />
      ))}
    </div>
  );
};

const App = () => {
  const imageUrls = [
    './imges/back1.jpg',
    './imges/back2.jpg',
    './imges/back3.jpg',
   
  ];

  return (
    <div>
      <ImageSlider imageUrls={imageUrls} />
    </div>
  );
};

export default App;