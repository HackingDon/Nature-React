import React, { useState,useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [src,setSrc] = useState("");
  const [head,setHead] = useState("");
  const [para,setPara] = useState("");
  const btns = [0,1,2,3];
  const scroll = useRef(null)
  const slider = [{
    img:"src/images/slider-1.jpg",
    h:"A Good Planet is Hard to Find",
    p:"Everytime history repeats itself the price goes up."
  }
    ,{
    img:"src/images/slider-2.jpg",
    h:"Some Species are Slipping Away",
    p:"Wild life is Mother Nature's greatest treasure."
  },{
    img:"src/images/slider-3.jpg",
    h:"The Ocean isn't a Trash Can",
    p:"We never know the worth of water till the well is dry."
  },{
    img:"src/images/slider-4.jpg",
    h:"Recycling: It's not a Waste of Time",
    p:"Don't throw away,recycle for another day."
  }
]
const feature = [{
  logo:"src/images/holding-hand.svg",
  h:"Support a Campaign",
  label:"Sponsor!",
  color:"mt-5 color1 fw-semibold"
},{
  logo:"src/images/piggy-bank-solid.svg",
  h:"General Donation",
  label:"Donate!",
  color:"mt-5 text-success fw-semibold"
},{
  logo:"src/images/hand.svg",
  h:"Become a Volunteer",
  label:"Join Us!",
  color:"mt-5 text-danger fw-semibold"
},
{
  logo:"src/images/seedling.svg",
  h:"Take a Part in Event",
  label:"Get Involved!",
  color:"mt-5 text-primary-emphasis fw-semibold"
}]
const card = [{
  img:"/src/images/wrapper1.jpg",
  p:"Let's Help the Endangered Species Today",
  label:"$1500 to go",
  percent:"84%"
},{
  img:"/src/images/wrapper2.jpg",
  p:"Preserve the Water:Think outside the Sink!",
  label:"$8000 to go",
  percent:"50%"
},{
  img:"/src/images/wrapper3.jpg",
  p:"We All Must be Saving the Arctic, Come On!",
  label:"$5000 to go",
  percent:"50%"
},{
  img:"/src/images/wrapper4.jpg",
  p:"Let's Fight Global Warming Right Now!",
  label:"$5800 to go",
  percent:"17%"
}];
const [fl,setFl]= useState(true)
function cardSlide(side){
  if(side == 'right'){
    scroll.current.scrollTo({
      left:400,
      behaviour:'smooth'
    })
    setFl(false)
  }
  else{
    scroll.current.scrollTo({
      left:-400,
      behaviour:'smooth'
    })
    setFl(true)
  }
 
}
useEffect(()=>{
  let card = setInterval(()=>{
    if(fl){
      cardSlide('right');
    }
    else{
      cardSlide('left')
    }
  },5000)

  return ()=> clearInterval(card)
},[fl])
const [j,setJ] =useState(0);
const [i,setI] = useState(0);
const [flag,setFlag] = useState(true)
let slide;  
useEffect(() => {
      if(flag){
       setSrc(slider[i].img);
       setHead(slider[i].h);
       setPara(slider[i].p);
       setI(i<slider.length-1 ? i+1:0);
       setFlag(false);
      }
       slide = setInterval(()=>{
        setSrc(slider[i].img);
        setHead(slider[i].h);
        setPara(slider[i].p); 
        setI(i<slider.length-1 ? i+1:0);
        setJ(j<btns.length-1 ? j+1:0);
      },3000)
 return ()=> clearInterval(slide);
}, [flag,i]);
function start(index){
  setI(index)
  setJ(index)
  setFlag(true);
}
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
      setBorder("container pt-5 pb-5")
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
                  <Link to='/join'>Join Us</Link>
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
        <div className="slider w-100">
          <img src={src} id="img" />
          <div className="slider-con">
          <h1 className="fn">{head}</h1>
          <p className="fs-4 mt-5">{para}</p>
          <button className="btn btn-outline-warning db rounded-pill mt-4">Learn More</button>
          </div>
         <div className="btn-container d-flex flex-column gap-3" id="btnlist">
          {btns.map((index,ind)=>(
            <button key={index} className={index == j ? "active":""} onClick={()=>start(ind)} id="btn"></button>
          ))}
         </div> 
        </div>
      <section className="second-sec row w-100 p-0 m-0">
      <div className="col-lg-8 bg-col h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="w-55 color">
            <h1 className="fw-bolder fs1 fn">You Have The Power Today to change Tomorrow!</h1>
            <h4 className="mt-3 fw-semibold fst-italic">Green. That's how we'd like the world to be</h4>
            <p className="mt-4 text-secondary">There are many ways to take small steps in changing your living habits while making big strides in helping the environment.</p>
            <div className="d-flex align-items-center justify-content-center row mt-5">
              <div className="col-md-6 d-flex justify-content-center">
                <img src="src/images/vid.png" className="vid" alt="" />
              <p className="ms-3 mt-2 fw-semibold ">Watch Video</p>
              </div>
              <button className="btn btn-warning color fw-semibold rounded-pill p-3 ps-4 pe-4 col-md-4">FindOutMore</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 m-0 p-0 h-100">
        <div className="d-flex justify-content-center h-100 align-items-center bgi w-100">
          <div className="w-75 text-white">
            <h1 className="fw-bolder">You must be the change you wish to see in the world</h1>
            <p className="mt-4 fw-light">Water covers two-thirds of the surface of the Earth, but fresh water is 0.002% on Earth. What will you children drink?</p>
            <h6 className="mt-5 text-warning fw-semibold">Make a difference now!</h6>
            </div>
        </div>
      </div>
    </section>
    <section className="Third-sec d-flex align-items-center justify-content-center">
          <div className="row w-75">
          {feature.map((fet)=>(
            <div className="col-xxl-3 col-md-6 mt-2">
              <div className="d-block w-75">
                <img className="img2" src={fet.logo} alt=""/>
                <h6 className="color fw-bold fs-2 mt-3">{fet.h}</h6>
                <p className="text-secondary lh-base fw-light">Water covers two-thirds of the surface of the Earth, but fresh water is 0.002% on Earth. What will you children drink?</p>
                <a className="link" href="#"><h6 className={fet.color}>{fet.label}</h6></a>
              </div>
            </div>
          ))}
          </div>
    </section>
    <section className="fourth-sec">
    </section>
    <section className="fifth-sec row w-100">
    <div className="col-lg-4 p-0 m-0 h-100">
        <div className="w-100 p-5 bg-5 h-100 m-0">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="w-75 text-white">
              <h1 className="fw-bolder">Join the race to make the world a better place</h1>
              <p className="mt-4 fw-light ">Water covers two-thirds of the surface of the Earth, but fresh water is 0.002% on Earth. What will you children drink?</p>
              <p className="mt-5 text-warning fw-semibold">Join Us</p>
              </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
       <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <div className="text-start w-80 ms-3 pt-3">
          <p className="color fs-2 fw-bolder fn">Fundraising Campaigns:</p>
        </div>
        <div className="d-md-flex d-none flex-column w-80 align-items-start">
          <div ref={scroll} className="row slide1">
         {card.map((c)=>(
           <div className="col-xxl-4 col-md-6" >
           <div className="card">
             <img src={c.img} className="card-img-top" alt="..."/>
             <div className="card-body">
               <p className="card-title fs-5 color fw-bold mt-2 fm">{c.p}</p>
               <div className="d-flex justify-content-between mt-3">
                 <span className="text-secondary fst-italic fn">Donated</span>
                 <span className="text-secondary fm">{c.percent}</span>
               </div>
               <div className="progress mt-1" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                 <div className="progress-bar" style={{width:c.percent}}></div>
               </div>
               <p className="text-secondary mt-1">{c.label}</p>
             </div>
           </div>
         </div>
         ))}
          </div>
          <div class="d-flex justify-content-center w-100 gap-3 mt-3 pb-3">
          <button id="btn1" onClick={()=>cardSlide('left')}></button>
          <button id="btn1" onClick={()=>cardSlide('right')}></button>
         </div>
          </div>
        </div>
        </div>
    </section>
    <section className="sixth-sec pt-5 pb-5 d-flex align-items-center justify-content-center w-100">
    <div class="row w-70 mt-5 mb-5">
          <img class="col-xxl-4 rounded-circle img-6" src="src/images/6-2.jpg" alt=""/>
          <div class="col-xxl-5 content-6 text-white">
            <p class="text-warning mt-1 fn fw-semibold">$6500 to go</p>
            <h2 class="fn fw-bold ">Don't Be Mean, Think Green!</h2>
            <p>Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibulum dignissim posuere cubilia Curae. Leo sit met entum cubilia Curae.</p>
            <button type="button" class="btn fw-semibold btn-outline-warning rounded-pill ps-4 pe-4 text-white">
              Donate Now
            </button>
          </div>
          <div class="container col-xxl-3   mt-5 text-center">
            <div class="circular-progress">
              <span>
                <p class="fs-1 fn fw-bold mb-0">40%</p>
                <p class="fs-6 ">Donated</p>
              </span>
            </div>
          </div>
        </div>
    </section>
    <section class="seventh-sec row w-100 m-0 p-0">
        <div class="col-lg-6 h-100 m-0 p-0">
          <div class="w-100 h-50 row m-0 p-0">
              <div class="col-6 h-100 p-0 puzz-1" >
                <div class="puzz-11 fm">
                  <h3 class="fw-bold">Fighting Global Warming</h3>
                  <p class="fst-italic">Climate</p>
                </div>
              </div>
              <div class="col-6 h-100 p-0 puzz-2" >
                <div class="puzz-11 fm">
                  <h3 class="fw-bold">Must Love Dogs</h3>
                  <p class="fst-italic">Rescue</p>
                </div>
              </div>
          </div>
          <div class="w-100 h-50 row m-0 p-0">
              <div class="col-6 h-100 p-0 puzz-3">
                <div class="puzz-11 fm">
                  <h3 class="fw-bold">Protecting Our Oceans</h3>
                  <p class="fst-italic">Oceans</p>
                </div>
              </div>
              <div class="col-6 h-100 p-0 puzz-4">
                <div class="puzz-11 fm">
                  <h3 class="fw-bold">6 Ways You Can Eat Better</h3>
                  <p class="fst-italic">Food</p>
                </div>
              </div>
          </div>
        </div>
          <div class="col-lg-6 h-100 p-0 puzz-5">
            <div class="puzz-11 fm">
              <h3 class="fw-bold">Watch For Climate Action</h3>
              <p class="fst-italic">Save Earth</p>
            </div>
          </div>
      </section>
      <footer class="footer w-100">
      <div class="d-flex w-100 justify-content-center align-items-center">
        <div class="row w-70 border-bottom border-dark-subtle pb-7">
          <div class="col-xxl-3 col-md-6 mt-2">
            <img src="src/images/leaf.png" alt=""/>
          </div>
          <div class="col-xxl-3 col-md-6 mt-2">
            <h5 class="fw-bold color fm">What We Do</h5>
            <ul class="p-0 mt-4">
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Saving the Arctic</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Fighting Global Warming</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Watch For Climate Action</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Protecting Our Ocean</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">6 Ways You Can Eat Better</a></li>
            </ul>
          </div>
          <div class="col-xxl-3 col-md-6 mt-2">
            <h5 class="fw-bold color fm">News & Media</h5>
            <ul class="p-0 mt-4">
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Gallery</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Embedded</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Blog Short Code</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Images</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Events</a></li>
            </ul>
          </div>
          <div class="col-xxl-3 col-md-6 mt-2">
            <h5 class="fw-bold color fm">About Us</h5>
            <ul class="p-0 mt-4">
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Join Us</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold"></a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">About Us</a></li>
              <li class="link"><a href="#" class="fm text-secondary fs-7 fw-bold">Shop</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex row w-100 justify-content-center">
        <div class="copy d-flex  w-70 justify-content-between">
          <div class="col-md-8  pt-5 pb-4">
            <p class="text-secondary"><span class="fw-bold">Privacy Policy</span> / This is a sample website-cmsmasters <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
            </svg></span> 2023 / All Rights Reserved</p>
          </div>
          <div class="col-md-4  pt-5 pb-4">
            <ul class="d-flex justify-content-end gap-3">
              <li><a class="text-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg></a></li>
              <li><a class="text-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
              </svg></a></li>
              <li><a class="text-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg></a></li>
              <li><a class="text-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;
