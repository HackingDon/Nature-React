import React, { useState,useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./home.css";
import useIntersectionObserver from "./useIntersectionObserver";
import Header from "./Header";
import Footer from "./Footer";
import Cardslider from "./Cardslider";
import Beforefooter from "./Beforefooter";
const Home = () => {
  const [src,setSrc] = useState("");
  const [head,setHead] = useState("");
  const [para,setPara] = useState("");
  const [isVisible1, ref1] = useIntersectionObserver();
  const [isVisible2, ref2] = useIntersectionObserver();
  const [isVisible3, ref3] = useIntersectionObserver();
  const [isVisible4, ref4] = useIntersectionObserver();
  const btns = [0,1,2,3];
  const [percentage,setPercentage] = useState(0)
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
const images = [{
  src:'src/images/1-puzzle.jpg',
  h:'Fighting Global Warming',
  p:'Climate'
},{
  src:'src/images/2-puzzle.jpg',
  h:'Must Love Dogs',
  p:'Rescue'
},{
  src:'src/images/4-puzzle.jpg',
  h:'Protecting Our Oceans',
  p:'Oceans'
},{
  src:'src/images/5-puzzle.jpg',
  h:'6 Ways You Can Eat Better',
  p:'Food'
}]
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
  useEffect(()=>{
    if (isVisible4 && percentage < 40) {
      const interval = setInterval(() => {
          setPercentage((prevCount) => {
              if (prevCount < 40) {
                  return prevCount + 1;
              } else {
                  clearInterval(interval);
                  return prevCount;
              }
          });
      }, 20);
  return ()=> clearInterval(interval);
    }
},[isVisible4])
const [pop,setPop] = useState(0);
const [lak,setLak] = useState(0);
const [val,setVal] = useState(0);
  useEffect(() => {
   if(isVisible3){
    const interval = setInterval(() => {
      setPop((prevCount) => {
        if (prevCount < 92) {
          return prevCount + 1;
        } else {
          return prevCount;
        }
      });
      setTimeout(()=>{
        setVal((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
      })
      setTimeout(()=>{
        setLak((prevCount) => {
          if (prevCount < 46) {
            return prevCount + 1;
          } else {
            return prevCount;
          }
        });
      },500)
    }, 20);
    return () => clearInterval(interval);
   }
  },[isVisible3])
  return (
    <div>
      <Header value='0' />
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
            <div className="d-flex align-items-center justify-content-start row mt-5">
              <div className="col-md-6 d-flex justify-content-start">
                <a href="https://www.youtube.com/watch?v=OfV3VNgjpvw" target="blank"><img src="src/images/vid.png" className="vid"/></a> 
                <a href="https://www.youtube.com/watch?v=OfV3VNgjpvw" target="blank" className="btn color btn-find mt-2 fn">Watch Video</a>
                <Link to='/about' className="col-md-3 ms-3"><button className="btn btn-warning color btn-join fw-semibold rounded-pill p-3">FindOutMore</button></Link>
              </div>
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
          {feature.map((fet,ind)=>(
            <div className="col-xxl-3 col-md-6 mt-2" key={ind}>
              <div className="d-block w-75">
                <img className="img2" src={fet.logo} alt=""/>
                <h6 className="color fw-bold fs-2 mt-3">{fet.h}</h6>
                <p className="text-secondary lh-base fw-light">Water covers two-thirds of the surface of the Earth, but fresh water is 0.002% on Earth. What will you children drink?</p>
                <a style={{textDecoration:'none'}} className="link" href="#"><h6 className={fet.color}>{fet.label}</h6></a>
              </div>
            </div>
          ))}
          </div>
    </section>
    <section className="fourth-sec" ref={ref1} style={{opacity: isVisible1 ? 1 : 0,transition: "opacity 0.6s ease-out, transform 0.6s ease-out",transform: isVisible1 ? "translateX(0)" : "translateX(-500px)"}}>
    </section>
    <section className="fifth-sec row w-100">
    <div className="col-lg-4 p-0 m-0 h-100">
        <div className="w-100 p-5 bg-5 h-100 m-0">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="w-75 text-white">
              <h1 className="fw-bolder">Join the race to make the world a better place</h1>
              <p className="mt-4 fw-light ">Water covers two-thirds of the surface of the Earth, but fresh water is 0.002% on Earth. What will you children drink?</p>
              <Link to='/join'><p className="mt-5 text-warning fs-5 fw-semibold">Join Us</p></Link>
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
         {card.map((c,i)=>(
           <div className="col-xxl-4 col-md-6" key={i}>
           <div className="card">
             <div className="home"><img src={c.img} className="card-img-top" alt="..."/></div>
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
          <div className="d-flex justify-content-center w-100 gap-3 mt-3 pb-3">
          <button id="btn1" onClick={()=>cardSlide('left')}></button>
          <button id="btn1" onClick={()=>cardSlide('right')}></button>
         </div>
          </div>
        </div>
        </div>
    </section>
    <section className="sixth-sec pt-5 pb-5 d-flex align-items-center justify-content-center w-100" ref={ref4}>
    <div className="row w-70 mt-5 mb-5">
          <img className="col-xxl-4 rounded-circle img-6" src="src/images/6-2.jpg" alt=""/>
          <div className="col-xxl-5 content-6 text-white">
            <p className="text-warning mt-1 fn fw-semibold">$6500 to go</p>
            <h2 className="fn fw-bold ">Don't Be Mean, Think Green!</h2>
            <p>Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibulum dignissim posuere cubilia Curae. Leo sit met entum cubilia Curae.</p>
            <button type="button" className="btn fw-semibold btn-outline-warning rounded-pill ps-4 pe-4 text-white">
              Donate Now
            </button>
          </div>
          <div className="container col-xxl-3 mt-5 text-center">
            <div className="circular-progress" style={{background: `conic-gradient(rgb(247, 190, 5) calc(${percentage}%), #CC4D39 0)`}}>
              <span>
                <p className="fs-1 fn fw-bold mb-0">{percentage}%</p>
                <p className="fs-6 ">Donated</p>
              </span>
            </div>
          </div>
        </div>
    </section>
    <section className="seventh-sec row w-100 m-0 p-0">
        <div className="col-lg-6 h-100 m-0 p-0">
          <div className="w-100 h-100 row m-0 p-0">
             {images.map((image,index)=>(
               <div className="col-lg-6 h-50 p-0" key={index} ref={ref2} style={{opacity: isVisible2 ? 1 : 0,transition: `opacity ${index}s`,background:`url(${image.src})`}}>
               <div className="puzz-11 fm">
                 <h3 className="fw-bold">{image.h}</h3>
                 <p className="fst-italic">{image.p}</p>
               </div>
             </div>
             ))}
          </div>
        </div>
          <div className="col-lg-6 h-100 p-0 puzz-5"ref={ref2} style={{opacity: isVisible2 ? 1 : 0,transition: "opacity 2s"}}>
            <div className="puzz-11 fm" >
              <h3 className="fw-bold">Watch For Climate Action</h3>
              <p className="fst-italic">Save Earth</p>
            </div>
          </div>
      </section>
      <section className="eighth-sec d-flex align-items-center justify-content-center flex-column"ref={ref3} style={{opacity: isVisible3 ? 1 : 0,transition: "opacity 0.6s ease-out, transform 0.6s ease-out",}}>
         <div className="w-65">
         <h3 className="text-center fw-bold fst-italic">110 million Americans live amongst such high levels of air pollution, the federal government considers it to be harmful to their health.</h3>
         <div className="row m-0 w-100 mt-5">
         <div className="col-4 text-center">
            <p className="fs3 text-warning fw-bold fn mb-0">{pop}%</p>
            <p className="fs-4 fw-500 mt-0">of population</p>
            <p className="fs-5">lives in places where air pollution exceeds safe limits</p>
          </div>
          <div className="col-4 text-center">
            <p className="fs3 text-warning fw-bold fn mb-0">{lak}%</p>
            <p className="fs-4 fw-500 mt-0">of the lakes in America</p>
            <p className="fs-5">are extremely polluted and hence risky for swimming, fishing and aquatic life</p>
          </div>
          <div className="col-4 text-center">
            <p className="fs3 text-warning fw-bold fn mb-0">{val}+</p>
            <p className="fs-4 fw-500 mt-0">pesticides</p>
            <p className="fs-5">in any air, water or soil can cause birth defects, gene mutation and cancer</p>
          </div>
         </div>
         </div>
      </section>
      <Cardslider/>
      <Beforefooter/>
      <Footer />
    </div>
  );
};
export default Home;
