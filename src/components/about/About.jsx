import React from "react";
import Header from "../utils/Header.jsx";
import Footer from "../utils/Footer.jsx";
import "./about.css";
import Banner from "../helper/Banner.jsx";
import Cardslider from "../helper/Cardslider.jsx";
import Beforefooter from "../helper/Beforefooter.jsx";
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
  return (
    <div>
      <Header value="3" />
      <Banner src="src/images/slider-1.jpg" height="700px" head="About Us" />
      <div className="container-fluid body-about p-0">
        {rows.map((row, index) => (
          <div className="row w-100 p-0" key={index}>
            <div
              className="col-4 about-col"
              style={{ backgroundImage: `url(${row.src})` }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="w-75 text-white">
                  <h1 className="fw-bold fn">{row.img_h}</h1>
                  <a
                    href="https://www.youtube.com/watch?v=OfV3VNgjpvw"
                    target="blank"
                  >
                    <img
                      className={row.png != "" ? "mt-5" : ""}
                      src={row.png}
                      alt=""
                    />
                  </a>
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
                {prof.map((profile, index) => (
                  <div
                    className="col-4 mt-5 d-flex flex-column align-items-center"
                    key={index}
                  >
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
        <Cardslider />
        <Beforefooter />
      </div>
      <Footer />
    </div>
  );
};
export default About;
