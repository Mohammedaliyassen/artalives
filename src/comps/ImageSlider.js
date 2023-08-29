// import React, { useState } from 'react';

// import "./style.css"

// const ImageSlider = ({ imageUrls }) => {

//     let currentIndex = 0;
//     let intervalId;
//     const images = document.querySelectorAll('.image-container img');
  
//     function startImageAnimation() {
//       clearInterval(intervalId);
//       intervalId = setInterval(() => {
//         currentIndex = (currentIndex + 1) % images.length;
//         updateActiveImage();
//       }, 500);
//     }
  
//     function resetImageAnimation() {
//       clearInterval(intervalId);
//       currentIndex = 0;
//       updateActiveImage();
//     }
  
//     function updateActiveImage() {
//       images.forEach(img => img.style.opacity = 0);
//       images[1].style.opacity = 1;
//     }
//   return (
//     <div className="image-container">
//       {imageUrls.map((imageUrl, index) => (
//         <img
//          className=' img'
//           key={index}
//           src={imageUrl}
//           alt={`Image ${index + 1}`}
//         //   style={{ opacity: index === currentIndex ? 1 : 0 }}
//           onMouseOver={startImageAnimation}
//           onMouseOut={resetImageAnimation}
//         />
//       ))}
//     </div>
//   );
// };
// export default ImageSlider