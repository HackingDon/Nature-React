import React from 'react'
import { Link } from 'react-router-dom'

const Beforefooter = () => {
  return (
    <div>
      <div className="row w-100 final-about m-0 d-flex flex-column justify-content-center">
          <div className="color w-100">
            <div className="final-con w-25">
            <h1 className="fs5 fw-bold">It's Cool to Be in Eco-school</h1>
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
            <p className="fs-3 fw-500 fst-italic text-white fn">For any inquiries call the hotline: +1(123)1234567</p>
        </div>
    </div>
  )
}

export default Beforefooter
