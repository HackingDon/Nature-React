import React, { useRef, useState } from 'react'
import './pop.css'
const Popup = (props) => {
    const textref = useRef(null);
    const [text,setText] = useState('')
    function submit(event){
        event.preventDefault();
        setText(`Your input is ${textref.current.value}`);
    }
  return (props.trigger)?(
    <div>
      <div className="container-fluid position-fixed top-0" style={{height:'100vh',backgroundColor:'rgba(34,49,57,0.9)'}}>
        <div className="d-flex justify-content-end w-100">
            <button className="btn border-0 text-white fw-bold fs-2 me-4 mt-3" onClick={()=>{props.setTrigger(false);setText('')}}>X</button>
        </div>
        <div className="h-75 w-100 d-flex flex-column align-items-center justify-content-center ">
        <form className="d-flex gap-4  w-50" onSubmit={()=>submit(Event)}>
        <input ref={textref} type="text" className="form-control pop-in w-50 bg-transparent text-white" placeholder='Enter Text' />
        <button className="btn btn-warning text-white fw-500 ps-4 fs-5 rounded-pill pe-4" onClick={submit}>Send</button>
        </form>
        <p className='text-white d-flex w-50 mt-5 fs-4 '>{text}</p>
        </div>
      </div>
    </div>
  ):''}

export default Popup
