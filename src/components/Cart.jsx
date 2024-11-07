import React, { useState,useEffect } from 'react'
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

const Cart = () => {
    const [total,setTotal] = useState(0);
    const [datas,setDatas] = useState(JSON.parse(localStorage.getItem('data')) || [])
    useEffect(() => {
        localStorage.setItem('data',JSON.stringify(datas))
        const calculatedTotal = datas && datas.length>0 ? datas.reduce((sum, data) => sum + data.price, 0):0;
        setTotal(calculatedTotal);
      }, [datas]);
      function remove(ind){
        let list = datas.filter((_, i) => i !== ind);
        setDatas(list)
        
      }
  return (
    <div>
      <Header />
      <Banner head='Cart' src='src/images/fourth.jpg' height='450px' />
      <ul className="container p-5">
        {datas && datas.length > 0 ? datas.map((data ,index)=>(
            <li key={index} className="d-flex" style={{height:'200px'}}>
            <img src={data.src} alt="" />
            <div className="d-flex align-items-center justify-content-around ps-5 w-100 h-100">
                <h2>{data.title}</h2>
                <h3>Price : ${data.price}.00</h3>
                <button className="btn btn-danger" onClick={()=>remove(index)}>Remove</button>
            </div>
        </li>
        )):(
        <li className='d-flex w-100 justify-content-center'>
            <h2 className='text-secondary'>No Items in Cart</h2>
        </li>
        )}
        <li className='d-flex w-100 mt-5 justify-content-end align-items-center gap-4'>
            <h4>Total Price: ${total}.00</h4>
            <button className="btn btn-outline-success fs-5 rounded-4">Buy Now</button>
        </li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Cart
