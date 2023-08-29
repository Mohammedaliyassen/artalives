import "./WorkPage.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "./../comps/navBar";
import Sidebar from "../comps/SideBar";

function WorkPage() {
  
  return (
    <>
      
        <NavBar />
        <Sidebar/>
       
 
    </>
  );
}

export default WorkPage;
