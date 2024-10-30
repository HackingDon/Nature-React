import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom";

const Header = () => {
    const [bgColor, setBgColor] = useState('fixed-top'); 
const [border,setBorder] = useState("container border-bottom border-dark-subtile pt-5 pb-5")

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY; 

    if (scrollY < 80) {
      setBgColor('fixed-top');
      setBorder("container border-bottom border-dark-subtile pt-5 pb-5")
    }  else {
      setBgColor('fixed-top bgc');
      setBorder("container pt-3 pb-5")
    }
  };

  window.addEventListener('scroll', handleScroll); 
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); 
  return (
    <div>
      <div className={bgColor}>
          <nav className="navbar navbar-expand-lg pb-4">
            <div className={border}>
              <img className="responsive-img" src="src/images/logo.png" />
              <button
                className="navbar-toggler navbar-dark "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto ">
                 <li className="nav-item mt-1 ms-3">
                  <Link to='/'>Home</Link>
                 </li>
                 <li className="nav-item mt-1 ms-3">
                  <Link to='/shop'>Shop</Link>
                 </li>
                 <li className="nav-item mt-1 ms-3">
                  <Link to='/join'>Join Us</Link>
                 </li>
                 <li className="nav-item mt-1 ms-3">
                  <Link to='/about'>AboutUs</Link>
                 </li>
                  <li className="nav-item ms-3">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white mt-2 ms-2" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg></a>
                  </li>
                  <li className="nav-item">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart text-white mt-2 ms-3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg></a>
                  </li>
                  <li className="nav-item ms-3">
                    <button type="button" className="btn btn-outline-light rounded-pill ps-4 pe-4">
                      Donate
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>  
        </div>
    </div>
  )
}

export default Header
