import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import './join.css'

const Join = () => {
  const [bgColor, setBgColor] = useState('fixed-top'); 
const [border,setBorder] = useState("container border-bottom border-dark-subtile pt-5 pb-5");
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
                 <li className="nav-item ms-3">
                  <Link to='/'>Home</Link>
                 </li>
                 <li className="nav-item ms-3">
                  <Link to='/shop'>Shop</Link>
                 </li>
                 <li className="nav-item ms-3">
                  <Link to='/join'>Join US</Link>
                 </li>
                 <li className="nav-item ms-3">
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
        <div className="head-join">
          <img src="src/components/images/1-1.jpg" alt="" className="img-join" />
          <h1 className='text-join fw-bold'>Join Us</h1>
        </div>
        <div className="row w-100 m-0">
          <div className="col-3 img-col-join1">
            <h2>Support a Campaign</h2>
          </div>
          <div className="col-3 img-col-join2">
            <h2>Wild Energy</h2>
          </div>
          <div className="col-3 img-col-join3">
            <h2>Permanent Deforestation</h2>
          </div>
          <div className="col-3 img-col-join4">
            <h2>Power of Nature</h2>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="col-6 content-join">
          <div className="d-flex justify-content-center align-items-center h-100">
          <div className="w-65 color">
            <h1 className="fw-bold fs2 fn">Who among us is ready to save the planet?</h1>
            <h4 className="mt-3 fw-semibold fst-italic">Green. That's how we'd like the world to be</h4>
            <p className="mt-4 fs-5 text-secondary">There are many ways to take small steps in changing your living habits while making big strides in helping the environment.</p>
            <div className="d-flex mt-5">
            <button className="btn btn-warning color rounded-pill btn-join fm">Join Us</button>
            <button className="btn color btn-find fn">Find Out More</button>
            </div>
            </div>
          </div></div>
          <img src='src/components/images/1-2.jpg' className="col-6 image-join p-0"/>
        </div>
        <div className="row w-100 m-0">
        <img src='src/components/images/6-1.jpg' className="col-6 image-join p-0"/>
          <div className="col-6 content-join">
          <div className="d-flex justify-content-center align-items-center h-100">
          <div className="w-65 color">
            <h1 className="fw-bold fs2 fn">You Have The Power Today to change Tomorrow!</h1>
            <h4 className="mt-3 fw-semibold fst-italic">GAdvancing the study of environmental science</h4>
            <p className="mt-4 fs-5 text-secondary">There are many ways to take small steps in changing your living habits while making big strides in helping the environment.</p>
            <div className="d-flex mt-5">
            <button className="btn btn-warning color rounded-pill btn-join fm">Learn More</button>
            <button className="btn color btn-find fn">Find Out More</button>
            </div>
            </div>
          </div></div>
        </div>
        <div className="row w-100 m-0">
          <div className="col-6 content-join">
          <div className="d-flex justify-content-center align-items-center h-100">
          <div className="w-55 color">
            <h1 className="fw-bold fs2 fn">Kids to save the planet!</h1>
            <h4 className="mt-3 fw-semibold fst-italic">Green. That's how we'd like the world to be</h4>
            <p className="mt-4 fs-5 text-secondary">There are many ways to take small steps in changing your living habits while making big strides in helping the environment.</p>
            <div className="d-flex mt-5">
            <button className="btn btn-warning color rounded-pill btn-join fm">Join Us</button>
            <button className="btn color btn-find fn">Find Out More</button>
            </div>
            </div>
          </div></div>
          <img src='src/components/images/2-2.jpg' className="col-6 image-join p-0"/>
        </div>
        <div className="row w-100 m-0">
          <div className="col-6 befooter1">
            <div className="d-block w-40">
            <h1 className='fw-bold'>What next?</h1>
            <p className="fs-5 mt-4">Those who wish to join Green Planet are invited to commit themselves to become founding members of the network by completing the form accompanying this announcement.</p>
            <button className="btn fw-bold mt-5 p-0 btn-help">Help company</button>
            </div>
          </div>
          <div className="col-6 befooter2">
          <div className="d-block w-40">
            <h1 className='fw-bold'>Join the race to make the world a better place </h1>
            <p className="fs-5 mt-4">Water covers two-thirds of the surface of the Earth, but Fresh water is 0.002% on Earth. What will your children drink?</p>
            <button className="btn fw-bold mt-5 p-0 btn-view">View all campaigns</button>
            </div>
          </div>
        </div>
        <footer className="footer w-100">
      <div className="d-flex w-100 justify-content-center align-items-center">
        <div className="row w-70 border-bottom border-dark-subtle pb-7">
          <div className="col-xxl-3 col-md-6 mt-2">
            <img src="src/images/leaf.png" alt=""/>
          </div>
          <div className="col-xxl-3 col-md-6 mt-2">
            <h5 className="fw-bold color fm">What We Do</h5>
            <ul className="p-0 mt-4">
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Saving the Arctic</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Fighting Global Warming</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Watch For Climate Action</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Protecting Our Ocean</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">6 Ways You Can Eat Better</a></li>
            </ul>
          </div>
          <div className="col-xxl-3 col-md-6 mt-2">
            <h5 className="fw-bold color fm">News & Media</h5>
            <ul className="p-0 mt-4">
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Gallery</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Embedded</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Blog Short Code</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Images</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Events</a></li>
            </ul>
          </div>
          <div className="col-xxl-3 col-md-6 mt-2">
            <h5 className="fw-bold color fm">About Us</h5>
            <ul className="p-0 mt-4">
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Join Us</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold"></a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">About Us</a></li>
              <li className="link"><a href="#" className="fm text-secondary fs-7 fw-bold">Shop</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex row w-100 justify-content-center">
        <div className="copy d-flex  w-70 justify-content-between">
          <div className="col-md-8  pt-5 pb-4">
            <p className="text-secondary"><span className="fw-bold">Privacy Policy</span> / This is a sample website-cmsmasters <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16">
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
            </svg></span> 2023 / All Rights Reserved</p>
          </div>
          <div className="col-md-4  pt-5 pb-4">
            <ul className="d-flex justify-content-end gap-3">
              <li><a className="text-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg></a></li>
              <li><a className="text-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
              </svg></a></li>
              <li><a className="text-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg></a></li>
              <li><a className="text-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Join
