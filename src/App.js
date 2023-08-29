import React from "react";
import "animate.css";
import WOW from "wowjs";
import NavBar from "./comps/navBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./comps/HomePage";
import Service from "./comps/service";
import Portfolio from "./comps/Portfolio";
import Slide from "./comps/Slide";
import Footer from "./comps/FooterSec";
import { useEffect } from "react";
import WorkPage from "./Pages/WorkPage";
import "./App.css"
import Testimonials from "./comps/Testimonials";
import AboutUs from "./comps/AboutUs";
import Contact from './comps/Contact';
import BtnUp from "./comps/BtnUp";
import Loading from './comps/Loading';
import DetailsLogo from "./Pages/DetailsLogo";
import DetailsIdientfiers from "./Pages/DetailsIdientfiers";
import MotionGrafic from "./comps/MotionGrafic";
import NotFound from "./comps/NotFound";


function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Service />
              <Testimonials />
              <Portfolio />
              
            </>
          }
        />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/Portfolio" element={<WorkPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/detailslogo/:pId' element={<DetailsLogo/>}/>
        <Route path='/detailsIdintefiers/:pId' element={<DetailsIdientfiers/>}/>
        <Route path='/loading' element={<Loading/>}/>
        
      </Routes>
      <Loading/>
      <BtnUp/>
      <Footer />
    </>
  );
}

export default App;
