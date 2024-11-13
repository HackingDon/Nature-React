import React from 'react'

const Alertmessage = (props) => {
  return (
    <>
    {props.alert && <div className="container-fluid position-fixed top-0" style={{height:'100vh',zIndex:'2'}}>
      <div className="d-flex w-100 h-25 justify-content-center align-items-center">
        <h5 className="text-center fh text-white bg-secondary p-3 rounded-3">{props.message}</h5>
      </div>
      </div>}</>
  )
}

export default Alertmessage