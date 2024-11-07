import React, { useState,useRef,useEffect } from "react";
import "./shop.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Banner from "./Banner";
const Shop = () => {
  const jsonData = [
    {
      src: "src/components/images/shop-6-580x580.jpg",
      title: "Backpack",
      pop:6,
      rating:6,
      label: "New",
      del: "",
      price: 15.00,
      available:"Out of stock"
    },
    {
      src: "src/components/images/shop-3-580x580.jpg",
      title: "Bag",
      pop:5,
      rating:2,
      label: "Collection",
      del: "",
      price: 65.00,
      available:""
    },
    {
      src: "src/components/images/shop-5-580x580.jpg",
      title: "Cap",
      pop:3,
      rating:5,
      label: "Goods",
      del: "",
      price: 25.00,
      available:""
    },
    {
      src: "src/components/images/shop-1-580x580.jpg",
      title: "Cup(Green Planet)",
      pop:1,
      rating:1,
      label: "Goods",
      del: "$20.00",
      price: 16.00,
      available:"Sale"
    },
    {
      src: "src/components/images/shop-2-580x580.jpg",
      title: "Notebook",
      pop:4,
      rating:3,
      label: "New",
      del: "$20.00",
      price: 15.00,
      available:"Sale"
    },
    {
      src: "src/components/images/shop-4-580x580.jpg",
      title: "T-shirt",
      pop:2,
      rating:4,
      label: "Collection",
      del: "",
      price: 20.00,
      available:"Out of stock"
    }  
  ];
  const [message,setMessage] = useState('')
  const object = JSON.parse(localStorage.getItem('data'))
  const [cart,setCart] = useState(object||[])
  const inputRef = useRef(null)
  const selectrRef = useRef(null)
  const [cards,setCards] = useState(jsonData)
  const [value1,setValue1] = useState(10);
  const [value2,setValue2] = useState(70);
  const handleChange1 = (event)=>{setValue1(event.target.value)}
  const handleChange2 = (event)=>setValue2(event.target.value)
  const check = ()=>{
    if(value1 > value2){
      setValue2(value1)
    }
  }
  function enter(index){
    const para = document.querySelectorAll("#para");
    if(cards[index].available == "Out of stock"){
      para[index].innerText = "Show Details"
    }
    else{
      para[index].innerText = "Add to Cart" 
    }
  }
  function addCart(index){
    cart == []?setCart(cards[index]):setCart([...cart,cards[index]])
  }
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cart));
  }, [cart]);
  function leave(index){
const para = document.querySelectorAll("#para");
    para[index].innerHTML = `<del>${cards[index].del}</del> $${cards[index].price}.00`
  }
  function sortData(val){
    const data = [...cards].sort((a,b)=>{
      if(val == 'L2H'){
        return a.price - b.price
      }
      else if(val == 'H2L'){
        return b.price - a.price
      }
      else if(val == 'popularity'){
        return a.pop - b.pop
      }
      else if(val == 'rating'){
        return a.rating - b.rating
      }
    })
    setCards(data)
  }
  function handleClick(){
    let val = selectrRef.current.value
   if(val == 'default'){
    return setCards(jsonData)
   }
   else{
    sortData(val)
   }
  }
  function filler(e){
    e.preventDefault();
    let value = inputRef.current.value
    if(value == ''){
      setMessage("*Please Fill")  
    }
    else{
    let data = jsonData.filter((item)=>item.title.toLowerCase() == value.toLowerCase())
    if(data == ''){
      setMessage("*Item not found");
      setCards([]);
    }
    else{
      setMessage('')
      setCards(data);
      
    }}
  }
  function handleFilter(value){
    let data = jsonData.filter((item)=>item.label.includes(value))
    if(value == 'Reload'){
      setMessage('')  
      setCards(jsonData)
      setValue1(10)
      setValue2(70)
    }
    else{
      setMessage('')
      setCards(data);
      
    }
   
  }
  return (
    <div>
      <Header value='1' cart={cart}/>
      <Banner head='Shop' src='src/components/images/shop-1.jpg' height='550px' p='Home/Shop' />
      <div className="container p-4">
        <div className="row w-100">
          <div className="col-9">
            <h1 className="fw-bold">Shop</h1>
           <div className="d-flex w-100 justify-content-between pe-5">
           <select ref={selectrRef} type="text" className="form-select w-25 mt-4 rounded-5 p-2" onChange={handleClick}>
              <option value='default'>Default sorting</option>
              <option value='popularity'>Sort by popularity</option>
              <option value='rating'>Sort by average rating</option>
              <option value='default'>Sort by latest</option>
              <option value='L2H'>Sort by price:Low to High</option>
              <option value='H2L'>Sort by price:High to Low</option>
            </select>
            <button className="btn border-0"onClick={()=>handleFilter("Reload")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
            </svg>
            </button>
           </div>
            <div className="row w-100">
              {cards.map((card,index) => (
                <div className={card.price>=value1 && card.price<=value2 ? 'col-4':'d-none'} key={index}>
                  <div className="card mt-5" onMouseEnter={()=>enter(index)} onMouseLeave={()=>leave(index)}>
                    <div className="card-img">
                    <img
                      className="card-img-top card-image"
                      src={card.src}
                      alt="Card image cap"/>
                    <div className={card.available!=''?"card-img-label":""}>{card.available}</div>
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold color">{card.title}</h5>
                      <span
                        className="fw-bold fs-5 card-label"
                        style={{ color: "#EFC94C" }}>
                        {card.label}
                      </span>
                      <p id="para" className="card-text fw-bold mt-3 color" onClick={()=>addCart(index)}>
                        <del>{card.del}</del> ${card.price}.00
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-3 p-0">
            <form className="form-group p-2 rounded-5 has-search" onSubmit={filler}>
              <input type="text" className="form-control" ref={inputRef} placeholder="Search" />
              <img
                src="src/components/images/search.svg"
                alt=""
                className="input-search me-2 "
                onClick={filler}
              />
            </form>
            <p className="text-danger fs-6">{message}</p>
            <h3 className="color mt-5 fw-bold">Product Categories</h3>
            <ul className="p-0">
              <li className="fw-bold mt-3" onClick={()=>handleFilter("Collection")}><a className="cat">Collection</a></li>
              <li className="fw-bold mt-2" onClick={()=>handleFilter("Goods")}><a className="cat">Goods</a></li>
              <li className="fw-bold mt-2" onClick={()=>handleFilter("New")}><a className="cat">New</a></li>
            </ul>
              <div>
              <h3 className="color fw-bold">Filter by price</h3>
              <div className="filter" onClick={check}>
                <input type="range" min="10" max="70" step="10" value={value1} className="range" onChange={handleChange1} />
                <input type="range" min="10" max="70" step="10" value={value2} className="range left-2" onChange={handleChange2} />
              </div>
              </div>
              <div className="d-flex mt-5 w-100 justify-content-between">
                <label className="mt-3 fw-bold color fs-5">Price : ${value1} - ${value2}</label>
              </div>
              <h3 className="fw-500 mt-5">Products</h3>
              <ul className="mt-4 p-0">
                {jsonData.map((card,index)=>(
                      <li className={index<4 && card.available != 'Out of stock'?"d-flex gap-3 mt-3":'d-none'} key={index}>
                    <img src={card.src} className="product-img" />
                    <div className="d-block color">
                      <p className="fw-500">{card.title}</p>
                      <p><del>{card.del}</del> ${card.price}.00</p>
                    </div>
                  </li>
                    ))}
                </ul>
                <Link to='/cart' state={cart}><button className="btn btn-outline-dark mt-5 ms-5 fs-4">CheckOut ({cart.length})</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
