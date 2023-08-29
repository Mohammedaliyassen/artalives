import './navBar.css';
import {Link,NavLink} from 'react-router-dom';
import logoWhite from '../designs/LogoWhite.svg';

function NavBar({isSticky}){
  
    return(
        <nav className={`navbar  navbar-expand-lg  p-3 ${isSticky==="yes" ? "sticky-navbar" :"static-navbar"}  `} id="mainNavBar " data-spy="affix" data-offset-top="0">
            <div className="container  text-lg-center">
                <div className='logoHolder col-lg-4 col-sm-3 text-start '>
                    <Link className="navbar-brand text-white me-5" to="/"><img src={logoWhite} alt='Artlives' id='LogoImg'/> </Link>
                </div>
                
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" id='bur' viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
                </button>
                
                <div className="collapse navbar-collapse justify-content-lg-end text-start" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 d-flex text-white text-start">
                    <li className="nav-item  ">
                            <NavLink className=" nav-link me-lg-4 " style={{color: {} }} to="/contact" role="button">تواصل الان</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-lg-4" style={{color: {} }} to="/Portfolio" role="button">معرض اعمالنا</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " style={{color: {} }} to="/about">من نحن</NavLink>
                        </li>
                        <li className="nav-item " id='active'>
                            <NavLink className="nav-link " style={{color: {} }} aria-current="page" to="/">خدماتنا</NavLink>
                        </li>
                     
                      
                      
                    </ul>
                </div>
            </div>
        </nav>
    )
  
}

export default NavBar;



