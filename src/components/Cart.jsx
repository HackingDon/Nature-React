import React, { useState,useEffect } from 'react'
import Header from './Header';
import './cart.css'
import {removeItem,addQuan,decQuan,clearItems} from './CartSlice'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import Alertmessage from './alertmessage';
const Cart = () => {
    const [total,setTotal] = useState(0);
    const datas = useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    const [showalert,setShowalert] = useState(false);
    const [alert,setAlert] = useState("")
    const [step,setStep] = useState(0)
    const [user,setUser] = useState({
        fname:'',
        lname:"",
        area:'',
        district:'',
        phno:'',
        pin: ''
    })
    function isNumberKey(target,value) {
       if(Number(target) || target == ''){
        if(value == 'phno'){
            setUser({...user,phno:target})
        }
        else{
            setUser({...user,pin:target})
        }
       }
      }
    const verify = [{
        class:'verify active col-4',
    },{
        class:'verify active col-4',
        cl:'verify col-4'
    },{
        class:'verify active col-4',
        cl:'verify col-4'
    }]
    function handleAlert(){
        setShowalert(true);
        setTimeout(()=>{
          setShowalert(false)
        },2000)
      }
    function buy(value){
        if(value == 1){
            if(datas && datas.length>0)setStep(value)
            else{
                setAlert("Please add items to cart");
                handleAlert()
            }
            
        }
    }
    function handleChange(){
        if(user.fname&&user.lname&&user.area&&user.district&&user.phno&&user.pin){
            setStep(2)
        }
    }
    useEffect(() => {
        const calculatedTotal = datas && datas.length>0 ? datas.reduce((sum, data) => sum + data.price*data.quantity, 0):0;
        setTotal(calculatedTotal);
      }, [datas]);
  return (
    <div>
      <Header/>
      <Alertmessage alert={showalert} message={alert}/>
      <div className="w-100" style={{height:'200px',backgroundColor:"#254151"}}>
      </div>
      <div className={datas && datas.length>0 && step !=3 ? "w-100 row m-0 mt-5":'d-none'}>
        {verify.map((ver,index)=>(
            <div key={index}
            className={step >= index?ver.class:ver.cl}
            ></div>
        ))}
      </div>
      <ul className={step == 0?"container p-5":"d-none"} style={{minHeight:'500px'}}>
        {datas && datas.length > 0 ? datas.map((data ,index)=>(
            <li key={index} className="d-flex mt-3 shadow" style={{height:'200px'}}>
            <img src={data.src} alt="" />
            <div className="d-flex align-items-center justify-content-around ps-5 w-100 h-100">
                <h2 className='w-25'>{data.title}</h2>
                <h3 className='fm'>Price : ${data.price}.00</h3>
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-outline-danger" onClick={()=>dispatch(decQuan(data.title))}>-</button>
                    <p className='fs-5 mt-3'>Quantity:{data.quantity}</p>
                    <button className="btn btn-outline-success" onClick={()=>dispatch(addQuan(data.title))}>+</button>
                </div>
                <button className="btn btn-danger" onClick={()=>dispatch(removeItem(data.title))}>Remove</button>
            </div>
        </li>
        )):(
        <li className='d-flex w-100 align-items-center justify-content-center' style={{height:"300px"}}>
            <h2 className='text-secondary'>No Items in Cart</h2>
        </li>
        )}
      </ul>
      <div className={step==0?'d-flex container mt-5 mb-5 justify-content-end align-items-center gap-4':'d-none'}>
            <h4 className='fm'>Total Price: ${total}.00</h4>
            <button className="btn btn-outline-success fs-5 rounded-4" onClick={()=>buy(1)}>Buy Now</button>
        </div>
      <div className={step == 1?"d-flex flex-column pt-5 pb-5 align-items-center justify-content-center container":"d-none"}>
        <form className="shadow w-75 h-75 p-5 fh rounded-3" style={{backgroundColor:"rgb(248, 195, 126)"}} onSubmit={(e)=>e.preventDefault()}>
            <h1>Address Details</h1>
            <div className="d-flex gap-3 mt-3">
                <div className='w-50'>
                    <label>First Name</label>
                <input type="text"  className="form-control" value={user.fname} required onChange={(e)=>setUser({...user,fname:(/[a-zA-Z]/.test(e.target.value[e.target.value.length-1]) || e.target.value == '')?e.target.value:user.fname})}/>
                </div>
                <div className='w-50'>
                    <label>Last Name</label>
                <input type="text"  className="form-control" value={user.lname} required onChange={(e)=>setUser({...user,lname:(/[a-zA-Z]/.test(e.target.value[e.target.value.length-1]) || e.target.value == '')?e.target.value:user.lname})}/>
                </div>
            </div>
            <label className='mt-3'>Area</label>
            <input type="text"  className="form-control" required onChange={(e)=>setUser({...user,area:e.target.value})}/>
            <label className='mt-3'>District</label>
            <input type="text"  className="form-control" required onChange={(e)=>setUser({...user,district:e.target.value})}/>
            <div className="d-flex gap-3 mt-3">
                <div className='w-50'>
                    <label>Phone Number</label>
                <input type="tel"  className="form-control" value={user.phno} maxLength='10' onChange={(e)=>isNumberKey(e.target.value,'phno')} required/>
                </div>
                <div className='w-50'>
                    <label>Pincode</label>
                <input type="tel"  className="form-control" value={user.pin} maxLength='6' onChange={(e)=>isNumberKey(e.target.value,'pin')} required/>
                </div>
            </div>
            <div className="d-flex w-100 justify-content-between mt-5">
            <button className="btn btn-success fs-5" onClick={()=>setStep(0)}>Previous Step</button>
            <button className="btn btn-success fs-5" onClick={handleChange}>Submit</button>
            </div>
        </form>
      </div>
      <div className={step == 2?"container w-100 h-600 p-5 mt-5 mb-5":"d-none"}>
        <div className="w-100 shadow p-5">
            <h1>Confirm Address</h1>
            <p className='fs-4'>{user.fname} {user.lname},<br/>{user.area},{user.district} {user.pin}<br/>{user.phno}</p>
        </div>
        <div className="w-100 mt-5">
        <ul className="container p-0">
        {datas && datas.length > 0 ? datas.map((data ,index)=>(
            <li key={index} className="d-flex mt-3 shadow" style={{height:'200px'}}>
            <img src={data.src} alt="" />
            <div className="d-flex align-items-center justify-content-around ps-5 w-100 h-100">
                <h2 className='w-25'>{data.title}</h2>
                <h3 className='fm'>Price : ${data.price}.00</h3>
            </div>
        </li>
        )):''}
        </ul>
        <div className='d-flex container mt-5 justify-content-end align-items-center gap-4'>
            <h4 className='fm'>Total Price: ${total}.00</h4>
        </div>
        </div>
        <div className="d-flex w-100 justify-content-between mt-5">
            <button className="btn btn-success fs-5" onClick={()=>setStep(1)}>Previous Step</button>
            <button className="btn btn-success fs-5" onClick={()=>{setStep(3);dispatch(clearItems())}}>Place Order</button>
        </div>
      </div>
      <div className={step == 3?'container':'d-none'}>
        <div className="fs3 text-success flex-column d-flex align-items-center justify-content-center" style={{height:'800px'}}>
            <p className='fn'>Order Placed!😃👍</p>
            <Link to='/shop'><button className='btn btn-success fs-4'>Go to Shop</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
