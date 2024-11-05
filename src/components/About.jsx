import React, { useEffect, useRef } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import "./about.css";
import Banner from "./Banner.jsx";
const About = () => {
  const rows = [
    {
      src: "src/components/images/about2-1.jpg",
      img_h: "Protection of the Ecosystem is in Our Power",
      png: "src/components/images/about11.png",
      con_h: "What does the Network aim to achieve?",
      but: "Find Out More",
      label: "",
    },
    {
      src: "src/components/images/about3-1.jpg",
      img_h: "Join the race to make the world a better place",
      png: "",
      con_h: "How will the Green Planet be organised?",
      but: "",
      label: "Join us",
    },
  ];
  const prof = [
    {
      src: "src/components/images/profile-2.jpg",
      name: "Grace Evans",
      label: "Founder",
    },
    {
      src: "src/components/images/profile-1.jpg",
      name: "Roger Venables",
      label: "Co-Founder",
    },
    {
      src: "src/components/images/profile-3.jpg",
      name: "Amy Adams",
      label: "Coordinator",
    },
  ];
  const cards = [{
    src:"src/components/images/about6.jpg",
    h:"Complete Depackaging and Composting Liquid",
    label:"Information"
  },{
    src:"src/components/images/about5.jpg",
    h:"Podcast:Do Animals in the Wild Get Drunk?",
    label:"Green Living"
  },{
    src:"src/components/images/about1.jpg",
    h:"The Summer of Resistance is Coming to a City Near You",
    label:"Environment"
  },{
    src:"src/components/images/about2.jpg",
    h:"Hug a Tree,They have Less Issues than People",
    label:"Green Living"
  },{
    src:"src/components/images/about3.jpg",
    h:"Huge Wildfire:Do You Hear the Trees Falling",
    label:"Information"
  },{
    src:"src/components/images/about4.jpg",
    h:"8 Photos Take You Inside the Movement to Save the Amazon",
    label:"Environment"
  }
]
const slideRef = useRef(null);
const slide = (val)=>{
  if(val=='right'){
    slideRef.current.scrollTo({
      left:slideRef.current.offsetWidth,
      behaviour:'smooth'
    })
  }
  else{
    slideRef.current.scrollTo({
      left:0,
      behaviour:'smooth'
    })
  }
}
useEffect(()=>{
  let card = setInterval(()=>{
    if(slideRef.current.scrollLeft > 900){
      slide('left')
    }
    else{
      slideRef.current.scrollTo({
        left:slideRef.current.scrollLeft+450,
        behaviour:'smooth'
      });
      console.log(slideRef.current.scrollLeft)

    }
  },5000)
  return()=>clearInterval(card)
},[])
  return (
    <div>
      <Header />
      <Banner src='src/components/images/about1-1.jpg' height = '700px' head='About Us'/>
      <div className="container-fluid body-about p-0">
        {rows.map((row,index) => (
          <div className="row w-100 p-0" key={index}>
            <div
              className="col-4 about-col"
              style={{ backgroundImage: `url(${row.src})` }}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="w-75 text-white">
                  <h1 className="fw-bold fn">{row.img_h}</h1>
                  <a href="https://www.youtube.com/watch?v=OfV3VNgjpvw" target="blank"><img className={row.png != "" ? "mt-5" : ""} src={row.png} alt=""/></a>
                  <p className="mt-4">
                    Water covers two-thirds of the surface of the Earth, but
                    Fresh water is 0.002% on Earth. What will your children
                    drink?
                  </p>
                  <p className="text-warning mt-4 fw-bold fs-5">{row.label}</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="w-60 color">
                  <h1 className="fw-bold fs3 fn">{row.con_h}</h1>
                  <h4 className="mt-5 fw-semibold fst-italic">
                    Green. That's how we'd like the world to be
                  </h4>
                  <p className="mt-5 fs-5 text-secondary">
                    The Global Network of Environmental Science and Technology
                    has been initiated as a response to the growing interest of
                    the International community attending the conferences on
                    Environmental Science and Technology, organised on a
                    biennial basis by the University of the Aegean.
                  </p>
                  <button
                    className={
                      row.but != ""
                        ? "btn mt-5 btn-warning color rounded-pill btn-join fm"
                        : "d-none"
                    }
                  >
                    {row.but}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="row profile w-100 m-0 p-0">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="w-70">
              <div className="row w-100 m-0">
                <h1 className="fw-bold color text-center fn">Organizers</h1>
                {prof.map((profile,index) => (
                  <div className="col-4 mt-5 d-flex flex-column align-items-center" key={index}>
                    <div className="prof">
                      <img className="prof-img" src={profile.src} alt="" />
                      <div className="d-flex justify-content-center align-items-center h-100 w-100 gap-3 prof-con">
                        <a href="#">
                          <img
                            src="src/components/images/facebook.svg"
                            alt=""
                            className="prof-icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="src/components/images/twitter.svg"
                            alt=""
                            className="prof-icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="src/components/images/linkedin.svg"
                            alt=""
                            className="prof-icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="src/components/images/youtube.svg"
                            alt=""
                            className="prof-icon"
                          />
                        </a>
                      </div>
                    </div>
                    <a href="#" className="prof-name">
                      <h2 className="color fw-bold mt-4">{profile.name}</h2>
                    </a>
                    <p className="text-warning fs-5 fw-500 fst-italic fn">
                      {profile.label}
                    </p>
                    <p className="text-secondary fs4">
                      Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                      tempus leo ac nisi iaculis porta. Sed sapien tortor,
                      aliquet a velit ut.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row w-100 fourth-about m-0">
          <img src="src/components/images/about4-1.jpg" className="w-100 p-0" />
          <div className="text-white">
            <h1 className="fs3 fw-bold">Become a Volunteer!</h1>
            <h5 className="fs-4 fw-bold mt-4">
              Reduce, Reuse & Recycle Workshop
            </h5>
            <p className="mt-4">
              Water covers two-thirds of the surface of the Earth, but Fresh
              water is 0.002% on Earth. What will your children drink?
            </p>
          </div>
        </div>
        <div className="d-flex slider-about align-items-center justify-content-center flex-column w-100">
          <h1 className="fs-1 color fw-bold">Latest News & Articles:</h1>
          <div ref={slideRef} className="row mt-5 w-70">
            {cards.map((card,index)=>(
              <div className="col-4" key={index}>
              <div className="card">
                <div className="about">
                <img className="card-img-top h-100" title={card.h} src={card.src} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold color">{card.h}</h5>
                  <label className="text-warning fs4 fw-500">{card.label}</label>
                  <p className="card-text text-secondary">
                    Lorem ipsum dolar sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus.
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="d-flex w-100 align-items-center justify-content-center gap-3">
            <button className="btn btn-secondary" onClick={()=>slide("left")}></button>
            <button className="btn btn-secondary" onClick={()=>slide("right")}></button>
          </div>
        </div>
        <div className="row w-100 final-about m-0 d-flex flex-column justify-content-center">
          <div className="color w-100">
            <div className="final-con w-25">
            <h1 className="fs5 fw-bold">It’s Cool to Be in Eco-school</h1>
            <p className="fs-5 fw-500 mt-4 text-secondary">
            Join the race to make the world a better place
            </p>
            <div className="d-flex mt-5 gap-3">
            <Link to='/contact'><button className="btn btn-warning bg-trans ps-5 pe-5 color rounded-pill btn-join fm">Join Us Now</button></Link>
            <Link to='/about'><button className="btn color btn-find fn">Find Out More</button></Link>
            </div>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex w-100 align-items-center justify-content-center contact">
            <p className="fs-3 fw-500 fst-italic text-white">For any inquiries call the hotline: +1(123)1234567</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
