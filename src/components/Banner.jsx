import React from 'react'
const Banner = (props) => {
  return (
    <div>
      <div style={{background:`url(${props.src})`,height:`${props.height}`,backgroundSize :'cover'}} className="d-flex align-items-center flex-column justify-content-center pt-5">
        <h1 className="fw-bold text-white fs5">{props.head}</h1>
        <p className="mt-4 fw-semibold fs-4 text-white">{props.p}</p>
      </div>
    </div>
  )
}
export default Banner
