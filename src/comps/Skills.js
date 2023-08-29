
import React, { useEffect, useRef } from "react";
import "./Skills.css";

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const skillsElement = skillsRef.current;
      if (!skillsElement) return;

      const skillstop = skillsElement.offsetTop;
      const skillsheight = skillsElement.offsetHeight;
      const winheight = window.innerHeight;
      const winscrooltop = window.pageYOffset;
      const myVar = skillstop + skillsheight - winheight - 300;

      if (winscrooltop >= myVar) {
        document.querySelectorAll(".skills .skillcont .progress .progvalue").forEach((ski) => {
          ski.style.width = ski.dataset.prog;
        });
      } else {
        document.querySelectorAll(".skills .skillcont .progress .progvalue").forEach((ski) => {
          ski.style.width = "0";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="skills" id="skills" ref={skillsRef}>
      <h2>مهاراتنا </h2>
      <div className="skillcont">
      <h3>العلامة التجارية والهوية</h3>
        <div className="span1">
          <div className="progress">
            <div className="progvalue" data-prog="98%"></div>
          </div>
        </div>
          <h3>تصميم جرافيك</h3>
        <div className="span2">
          <div className="progress">
            <div className="progvalue" data-prog="97%"></div>
          </div>
        </div>
          <h3>تصميم وتطوير المواقع و المتاجر الإلكترونية </h3>
        <div className="span3">
          <div className="progress">
            <div className="progvalue" data-prog="95%"></div>
          </div>
        </div>
          <h3>تصميم موشن جرافيك</h3>
        <div className="span4">
          <div className="progress">
            <div className="progvalue" data-prog="99%"></div>
          </div>
        </div>
          <h3>تصميم وتطوير الموبايل ابليكيشن</h3>
        <div className="span5">
          <div className="progress">
            <div className="progvalue" data-prog="98%"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;

