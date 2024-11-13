import React from 'react'

const Alertmessage = (props) => {
  return (
    <>
    {props.alert && <div className="container-fluid position-fixed bottom-0" style={{zIndex:2}}>
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <h5 className="text-center position-relative fh text-white bg-secondary p-3 rounded-3" style={{zIndex:'2'}}>{props.message}</h5>
      </div>
      </div>}</>
  )
}

export default Alertmessage