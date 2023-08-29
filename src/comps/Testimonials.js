import './Testimonials.css'
import img1 from '../designs/imgs/avatar-1.jpg'
import img2 from '../designs/imgs/avatar-2.jpg'
import img3 from '../designs/imgs/avatar-3.jpg'
function Testimonials() {
    // useEffect(() => {
    //     fetch("https://154.56.56.115/api/client-opnions?populate=*")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setOpinions(data.data)
    //         console.log("opinions is ",data.data);
    //       })

    //   }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row text-center justify-content-center text-md-left">

                    <div className="pl-md-4 col-md-8 text-right" id="aboutHead">
                        <h6 className="mb-5 "> اراء العملاء</h6>
                    </div>
                    <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel" >
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active" data-bs-interval="1000">
                                <div className="card testmonial-card ">
                                    <div className="card-body ms-auto me-auto w-50 border">
                                        <img src={img1} alt="" />
                                        <p className='text-center'><q>  انه موقع جميل جدا في التصميمات </q></p>
                                        <h1 className="fs-6 text-center">Ahmed Mohamed</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="1000">
                                <div className="card testmonial-card ">
                                    <div className="card-body ms-auto me-auto w-50 border">
                                        <img src={img2} alt="" />
                                        <p className='text-center'><q>  انه موقع جميل جدا في التصميمات </q></p>
                                        <h1 className="fs-6">Ahmed Mohamed</h1>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="1000">
                                <div className="card testmonial-card ">
                                    <div className="card-body ms-auto me-auto w-50 border">
                                        <img src={img3} alt="" />
                                        <p className='text-center'><q>  انه موقع جميل جدا في التصميمات </q></p>
                                        <h1 className=" fs-6">Ahmed Mohamed</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Testimonials;

