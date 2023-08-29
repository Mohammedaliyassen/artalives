import "./FooterSec.css"

function Footer(){
    return(
        <footer className="page-footer p-5 mt-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <p className="copy">Copyright 2023 &copy; <a href="https://www.linkedin.com/in/ahmed-mohamed-gaber-65bb39238" target="_blank">Artlives</a></p>
                </div>
                <div className="col-sm-6 text-end">
                    <div className="socials">
                        <a className="social-item ms-3" href="">FaceBook</a>
                        <a className="social-item ms-3" href="">Twitter</a>
                        <a className="social-item ms-3" href="">instagram</a>
                        <a className="social-item ms-3" href="">WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
    )
}

export default Footer;