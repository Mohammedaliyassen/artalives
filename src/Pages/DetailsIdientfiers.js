// import { useParams } from "react-router-dom";
// import "./DetailsLogo.css";
// import { useEffect, useState } from "react";
// import NavBar from "../comps/navBar";

// function Details() {
//   let pId = useParams();
//   console.log("pid", pId.pId);
//   // https://api.artalives.com/api/visual-identities/1?populate=*

//   const [details, setDetails] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.artalives.com/api/visual-identities/${pId.pId}?populate=*`)
//       .then((res) => res.json())
//       .then((ourData) => setDetails(ourData.data.attributes));
//   }, []);

//   console.log("data is", details.descriptionPhotos.data);
//   console.log("title  is", details.title);
//   return (
//     <>
//       <NavBar isSticky="no" />
//       <div className="container m-5 p-5 p-sm-0 border-bottom">
//         <div className=" row mt-5 pt-5 text-lg-center d-flex flex-lg-row-reverse">
//           <div className=" col-lg-6 col-sm-12 mt-2 text-end pb-4">
//             <h3>{details.title} تفاصيل عن </h3>
//             {details.descriptionPhotos.data > 0 ? (
              
//                 details.descriptionPhotos.data.map((photo, index) => (
//                 <div className="logo-card" key={index}>
//                   {/* <img src={`https://api.artalives.com${photo.attributes.url}`} /> */}
//                   {console.log("attributes", photo.attributes.url)}
//                 </div>
//               ))
           
//             ) : (
//               <p>No data available.</p>
//             )}
    
           
//           </div>
//         </div>
//       </div>

//       <div className=" text-center"></div>
//     </>
//   );
// }

// export default Details;



import { redirect, useParams } from "react-router-dom";
import "./DetailsIdientfiers.css";
import { useEffect, useState } from "react";
import NavBar from "../comps/navBar";
import Loading from "../comps/Loading";

function DetailsIdientfiers() {
  let pId = useParams();
  console.log("pid", pId.pId);
  // https://api.artalives.com/api/visual-identities/1?populate=*

  const[error,setErorr]=useState(false)
if (error==false) {
//    nothing
}
else{

   
    document.body.style.backgroundColor="blue"
    document.body.innerHTML="     "
   
}

  const [details, setDetails] = useState({
    title: "",
    descriptionPhotos: { data: [] }, 
  });

  useEffect(() => {
    fetch(`https://api.artalives.com/api/visual-identities/${pId.pId}?populate=*`)
      .then((res) => res.json())
      .then((ourData) => setDetails(ourData.data.attributes))
      .catch((erorr)=>setErorr(true))
  }, [pId.pId]); 
 console.log(details)
  return (
    <>
      <NavBar isSticky="no" />
      <div className="container   p-sm-0 border-bottom">
        <div className=" row mt-5 pt-5 text-lg-center d-flex flex-lg-row-reverse">
        <h3 className="text-center"> {`   تفاصيل عن  ${details.title}  `}      </h3>
          <div className=" cards-logo text-center">
           
            {details.descriptionPhotos.data.length > 0 ? (
              details.descriptionPhotos.data.map((photo, index) => (
                <div className="logo-card" key={index}>
                  <img src={`https://api.artalives.com${photo.attributes.url}`} />
                  {console.log("attributes", photo.attributes.url)}
                </div>
              ))
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      </div>

      <div className=" text-center"></div>
    </>
  );
}

export default DetailsIdientfiers;
