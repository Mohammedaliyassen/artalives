import "./FooterSec.css"

function Footer(){
    return(
        <footer className="page-footer p-5 mt-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <p className="copy">Copyright 2023 &copy; <a href="artalives.com">Artalives</a></p>
                </div>
                <div className="col-sm-6 text-end">
                    <div className="socials">
                        <a className="social-item ms-3" href="https://www.facebook.com/profile.php?id=100090830918586" target="_blank">FaceBook</a>
                        <a className="social-item ms-3" href="mailto:Artalives443@gmail.com" target="_blank">Gmail</a>
                        <a className="social-item ms-3" href="https://www.instagram.com/artalives/" target="_blank">instagram</a>
                        <a className="social-item ms-3" href="https://wa.me/+201103789762" target="_blank">WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
    )
}

export default Footer;