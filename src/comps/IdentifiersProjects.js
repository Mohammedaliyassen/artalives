



import React, { useEffect, useState } from "react";
import "./IdentifiersProjects.css";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataVisual } from "../redux/slices/visualData";
import Loading from './Loading';
import { Link } from "react-router-dom";

const IdentifiersProjects = ({showDetalisBtn,showHeading,showTitle}) => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const[error,setErorr]=useState(false)
if (error==false) {
//    nothing
}
else{
  document.body.innerHTML="   "
  document.body.style.backgroundColor="blue"
   
}
  useEffect(() => {
    dispatch(getDataVisual())
      .then(() => setLoading(false))
      .catch((error) => {
       
        setLoading(true);
      });
  }, [dispatch]);

  const selector = useSelector((state) => state.visual);
  const ourData = selector.data;

  if (isLoading) {
    return <Loading />;
  }
 
  return (
    <>
      {showHeading==="true" ?
       
       <div className='content-btn'>
       <a   style={{color:"white" ,width: "152px"}}  href='http://127.0.0.1:5500/#/'> <button style={{}}>  اطلب الان   </button>   </a>
       <h3 className='h3-projects'> هوايات بصرية</h3>
    </div>  : 
       <h3 className='h3-projects'>خدمة هويات بصريه</h3>} 
      <div className="logo-list">
        {ourData.length > 0 ? (
          
          ourData.map((photo, index) => (
            <div className="logo-card" key={index}>
           
               <img src={`http://154.56.56.115${photo.attributes.frontPhoto.data.attributes.formats.thumbnail.url}`} alt=""/>
               {showTitle==="true" ?   <h3>{photo.attributes.title}</h3>  : <></>}  
              {showDetalisBtn==="true" ?       <Link className=" btn btn-primary mt-4" to={`/detailsIdintefiers/${photo.id}`} >عرض التفاصيل</Link>      : <></>}        
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
};

export default IdentifiersProjects;


