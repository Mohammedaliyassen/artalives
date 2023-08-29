// import React, { useState, useEffect, useRef } from "react";
// const Counter = ({ targetValue }) => {
    
// function scrollCounter(element, targetValue) {
//   const initialValue = parseInt(element.textContent);
//   const scrollStep = Math.ceil((targetValue - initialValue) / 30);
//   let currentValue = initialValue;
  
//   function updateValue() {
//     element.textContent = currentValue;
//     if ((scrollStep > 0 && currentValue >= targetValue) || (scrollStep < 0 && currentValue <= targetValue)) {
//       currentValue = targetValue;
//     } else {
//       currentValue += scrollStep;
//       requestAnimationFrame(updateValue);
//     }
//   }
  
//   updateValue();
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const accounts = document.querySelectorAll('.account');

//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5 
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const targetValue = parseInt(entry.target.dataset.target);
//         scrollCounter(entry.target, targetValue);
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   accounts.forEach(account => {
//     observer.observe(account);
//   });
//  });

//     return (
//    <>
//      {/* <div className="widget-item">
//             <h2  id='counter'>{targetValue}</h2>
//             <p>عميل سعد بالتعامل معنا</p>
//         </div> */}
//         <div class="account" data-target="50">0</div>
//         <div class="account" data-target="100">0</div>
//    </>
       
    
//     )
//   };


//   export default Counter;
  