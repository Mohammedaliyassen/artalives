
import './Portfolio.css'
import img1 from '../designs/imgs/folio-1.jpg'
import img2 from '../designs/imgs/folio-2.jpg'
import img3 from '../designs/imgs/folio-3.jpg'
import img4 from '../designs/imgs/folio-4.jpg'
import img5 from '../designs/imgs/folio-5.jpg'
import img6 from '../designs/imgs/folio-6.jpg'
import { Link } from 'react-router-dom'




function Portfolio(){
    return(
        <>
            <div className="container text-center mt-5 pt-5">
                <h6 className="subtitle">معرض الاعمال</h6>
                <h6 className="section-title mb-4">شوف اعمالنا</h6>

                <div className="row " >
                    <div className="col-sm-4 porto">
                        <div className="img-wrapper">
                            <img src={img3} alt="" className='w-100 mb-4'/>
                            <img src={img5} alt="" className='w-100 mb-4'/>
                        </div>
                    </div>
                    <div className="col-sm-4 porto">
                            <img src={img2} alt="" className='w-100 mb-4'/>
                            <img src={img6} alt="" className='w-100 mb-4'/>
                    </div>
                    <div className="col-sm-4 porto">
                            <img src={img1} alt="" className='w-100 mb-4'/> 
                            <img src={img4} alt="" className='w-100 mb-4'/>
                    </div>
                </div>
                <Link to={'/portfolio'} className='btn pofilio p-5 pt-3 pb-3 fs-5 '> شوف باقي اعمالنا</Link>
            </div>
            
        </>
    )

}



export default Portfolio;