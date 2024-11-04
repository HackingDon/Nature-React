import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./contact.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const position = [34.083273, -118.359852];
  return (
    <div>
      <Header />
      <div className="head-contact d-flex align-items-center justify-content-center pt-5">
        <h1 className="fw-bold text-white fs5">Contacts</h1>
      </div>
      <div className="row contact-body w-100 m-0">
        <div className="col-7">
            <div className="d-flex align-items-center flex-column justify-content-center h-100 w-100">
                <div className="w-55">
                <h2 className="color fw-bold">Want to talk? Let's do it!</h2>
                <p className="text-secondary fs4 mt-3">If you have any questions about Green Planet, please do not hesitate to contact .</p>
                <form className="text-secondary">
                   <div className="d-flex gap-5 mt-4">
                   <label className="w-50 fw-bold">Name <input type="text" placeholder="Your Name" className="form-control border border-dark-subtile rounded-4 p-2" /></label>
                    <label className="w-50 fw-bold">Email <input type="email" placeholder="Your Email..." className="form-control border border-dark-subtile rounded-4 p-2" /></label>
                   </div>
                   <label className="w-100 fw-bold mt-5">Message <br/> <textarea placeholder="Your Message" style={{height:'200px'}} className="form-control w-100 border border-dark-subtile rounded-4"></textarea></label>
                   <button className="btn btn-join btn-warning rounded-pill text-white mt-4">Send Message</button>
                </form>
                </div>
            </div>
        </div>
        <div className="col-5">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "900px", width: "100%" }}
            zoomControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>A sample marker on the map.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="w-100 d-flex w-100 align-items-center justify-content-center contact">
        <p className="fs-3 fw-500 fst-italic text-white">
          For any inquiries call the hotline: +1(123)1234567
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
