import './Testimonials.css'
import img1 from '../designs/imgs/avatar-1.jpg'
import img2 from '../designs/imgs/avatar-2.jpg'
import img3 from '../designs/imgs/avatar-3.jpg'
import { useState, useEffect } from 'react'
function Testimonials() {
    var [opinions, setOpinions] = useState([])
    useEffect(() => {
        fetch("https://api.artalives.com/api/client-opnions?populate=*&sort[0]=id:desc")
            .then((res) => res.json())
            .then((data) => {
                setOpinions(data.data)

            })

    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row text-center justify-content-center text-md-left">

                    <div className="pl-md-4 col-md-8 text-right" id="aboutHead">
                        <h6 className="mb-5 "> اراء العملاء</h6>
                    </div>
                    <div id="carouselExampleInterval" className="carousel slide testmonial-slide" data-bs-ride="carousel" >
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active" data-bs-interval="">
                                <div className="card testmonial-card ">
                                    <div className="card-body ms-auto me-auto w-50 border">
                                        {/* <p className='text-center'><q> {opinions[0].attributes.opinion}  </q></p>
                                        <h1 className=" fs-6">{opinions[0].attributes.name}</h1> */}
                                    </div>
                                </div>
                            </div>
                            {opinions.map((opinion) => {
                                return (
                                    <>
                                        <div className="carousel-item " data-bs-interval="" key={opinion.id}>
                                            <div className="card testmonial-card ">
                                                <div className="card-body ms-auto me-auto w-50 border">
                                                    <p className='text-center'><q> {opinion.attributes.opinion}  </q></p>
                                                    <h1 className=" fs-6">{opinion.attributes.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                            })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Testimonials;

