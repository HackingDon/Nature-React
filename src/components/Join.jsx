import React from 'react'
import './join.css'
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import Banner from './Banner';

const Join = () => {
  return (
    <div>
     <Header value='2' />
     <Banner src='src/images/fourth.jpg' head='Join Us' height='650px'/>
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
            <Link to='/contact'><button className="btn btn-warning color rounded-pill btn-join fm">Join Us</button></Link>
            <Link to='/about' className='mt-2'><button className="btn color btn-find fn">Find Out More</button></Link>
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
            <h4 className="mt-3 fw-semibold fst-italic">Advancing the study of environmental science</h4>
            <p className="mt-4 fs-5 text-secondary">There are many ways to take small steps in changing your living habits while making big strides in helping the environment.</p>
            <div className="d-flex mt-5">
            <Link to='/about'><button className="btn btn-warning color rounded-pill btn-join fm">Learn More</button></Link>
            <Link to='/about' className='mt-2'><button className="btn color btn-find fn">Find Out More</button></Link>
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
            <Link to='/contact'><button className="btn btn-warning color rounded-pill btn-join fm">Join Us</button></Link>
            <Link to='/about' className='mt-2'><button className="btn color btn-find fn">Find Out More</button></Link>
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
        <Footer />
    </div>
  )
}
export default Join
