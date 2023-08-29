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
                        <a className="social-item ms-3" href="https://www.facebook.com/profile.php?id=100090830918586">FaceBook</a>
                        <a className="social-item ms-3" href="Artalives443@gmail.com">Gemil</a>
                        <a className="social-item ms-3" href="https://www.instagram.com/artalives/">instagram</a>
                        <a className="social-item ms-3" href="https://wa.me/+201103789762">WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
    )
}

export default Footer;