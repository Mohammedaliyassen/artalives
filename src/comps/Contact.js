import React from "react";
import NavBar from "./navBar";
import BtnUp from "./BtnUp";
import "./AboutUs.css";
import video1 from "../designs/2-2.mp4";
import "./Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faThumbsUp,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <NavBar isSticky="no" />
      <BtnUp />
    
        <div className="overlay-contact">
          <h6> كن عميلنا اليوم! ابقى على تواصل</h6>

          <p>
            استعد لتجربة استثنائية! كن جزءًا من عائلتنا الآن واحصل على خدمة
            فريدة. ابق على اتصال معنا للاستفادة من عروضنا والتحديثات المثيرة.
            انضم إلينا وكن جزءًا من النجاح!
          </p>
        </div>
      <h2 className="contact-heading">وسائل التواصل الاجتماعي</h2>
      <div className="contact-info">
        <div className="social">
           <div className="heading">
               <a href="https://www.facebook.com/profile.php?id=100090830918586&mibextid=ZbWKwL"> تابعنا على الفيسبوك </a>
               <a href="https://www.instagram.com/artalive443/?next=%2F"> تابعنا على الانستجرام </a>
           </div>
           <div className="icons">
         
        
             
         <FontAwesomeIcon icon={faFacebook} className="social" />
    

         <FontAwesomeIcon icon={faInstagram} className="social" />
           </div>
          
              
           
     
        </div>
        <div className="contact-methods">
          <div className="heading">
              <a href="">01103789762 : الهاتف </a>
              <a href="">  Artalives@gmail : البريد الالكتروني </a>

          </div>
          <div className="icons">
          <FontAwesomeIcon icon={faMobile} className="social" />

         <FontAwesomeIcon icon={faEnvelope} className="social"/>

          </div>
           
           
         
        </div>
      </div>
    </>
  );
}

export default Contact;
