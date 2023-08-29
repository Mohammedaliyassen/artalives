import React, { useEffect, useState } from 'react';
import './SideBar.css'; // استيراد ملف CSS الخاص بتصميم الـ Sidebar
import WebProjects from './WebProjects';
import MobileProjects from './MobileProjects';
import LogoProjects from './LogoProjects';
import IdentifiersProjects from './IdentifiersProjects';
import MotionGrafic from './MotionGrafic';
import SocilaMedia from './SocialMedia';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {  faSquareCaretRight } from "@fortawesome/free-svg-icons";

const Sidebar = () => {

  const [activeButton, setActiveButton] = useState('');


  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    setActiveButton('لوجو');
  }, []);
  return (
    <>
      <div className="sidebar">

        <div className='btns moveLeft'>
          <h4 className='text-white text-center mb-5 '>   اعمالنا </h4>
          <button
            className={activeButton === 'لوجو' ? 'active' : ''}
            onClick={() => handleButtonClick('لوجو')}
          >
            لوجو
          </button>
          <button
            className={activeButton === 'هويات بصرية' ? 'active' : ''}
            onClick={() => handleButtonClick('هويات بصرية')}
          >
            هويات بصرية
          </button>

          <button
            className={activeButton === ' سوشيال ميديا' ? 'active' : ''}
            onClick={() => handleButtonClick(' سوشيال ميديا')}
          >
            سوشيال ميديا
          </button>
          <button
            className={activeButton === 'موشن جرافيك' ? 'active' : ''}
            onClick={() => handleButtonClick('موشن جرافيك')}
          >
            موشن جرافيك
          </button>
          <button
            className={activeButton === 'المواقع' ? 'active' : ''}
            onClick={() => handleButtonClick('المواقع')}
          >
            المواقع والمتاجر الالكترونيه
          </button>
          <button
            className={activeButton === 'موبايل' ? 'active' : ''}
            onClick={() => handleButtonClick('موبايل')}
          >
            موبايل ابليكيشن
          </button>

          <button className='sideBarDrag' onClick={() => {
            document.querySelector('.btns').classList.toggle('moveRight')
            document.querySelector('.btns').classList.toggle('moveLeft')
            document.querySelector('.sideBarDragSvg').classList.toggle('rotateDrager')
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='sideBarDragSvg'>
              <path fill='#ec643b' d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z" />
            </svg>
          </button>
        </div>

        <div className="content">

          {activeButton === 'لوجو' && <LogoProjects showDetalisBtn="true" showHeading="true" showTitle="true" />}
          {activeButton === 'هويات بصرية' && <IdentifiersProjects showDetalisBtn="true" showHeading="true" showTitle="true" />}
          {activeButton === ' سوشيال ميديا' && <SocilaMedia showHeading="true" showTitle="true" />}
          {activeButton === 'موشن جرافيك' && <MotionGrafic />}
          {activeButton === 'المواقع' && <WebProjects />}
          {activeButton === 'موبايل' && <MobileProjects />}
        </div>
      </div>

    </>
  );
};

export default Sidebar;
