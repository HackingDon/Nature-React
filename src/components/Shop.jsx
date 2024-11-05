import React, { useState } from "react";
import "./shop.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Banner from "./Banner";
const Shop = () => {
  const cards = [
    {
      src: "src/components/images/shop-6-580x580.jpg",
      title: "Backpack",
      label: "New",
      del: "",
      price: 15.00,
      available:"Out of stock"
    },
    {
      src: "src/components/images/shop-3-580x580.jpg",
      title: "Bag",
      label: "Collection",
      del: "",
      price: 65.00,
      available:""
    },
    {
      src: "src/components/images/shop-5-580x580.jpg",
      title: "Cap",
      label: "Goods",
      del: "",
      price: 25.00,
      available:""
    },
    {
      src: "src/components/images/shop-1-580x580.jpg",
      title: "Cup(Green Planet)",
      label: "Goods",
      del: "$20.00",
      price: 16.00,
      available:"Sale"
    },
    {
      src: "src/components/images/shop-2-580x580.jpg",
      title: "Notebook",
      label: "New",
      del: "$20.00",
      price: 15.00,
      available:"Sale"
    },
    {
      src: "src/components/images/shop-4-580x580.jpg",
      title: "T-shirt",
      label: "Collection",
      del: "",
      price: 20.00,
      available:"Out of stock"
    }  
  ];
  const prods = [
    {
      src: "src/components/images/shop-1-580x580.jpg",
      title: "Cup(Green Planet)",
      label: "Goods",
      del: "$20.00",
      price: 16.00,
      available:"Sale"
    },
    {
      src: "src/components/images/shop-4-580x580.jpg",
      title: "T-shirt",
      label: "Collection",
      del: "",
      price: 20.00,
      available:"Out of stock"
    },
    {
      src: "src/components/images/shop-5-580x580.jpg",
      title: "Cap",
      label: "Goods",
      del: "",
      price: 25.00,
      available:""
    }
  ]
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
      para[index].innerHTML = "<a href='#'>Show Details</a>"
    }
    else{
      para[index].innerHTML = "<a href='#'>Add to Cart</a>" 
    }
  }
  function leave(index){
const para = document.querySelectorAll("#para");
    para[index].innerHTML = `<del>${cards[index].del}</del> $${cards[index].price}.00`
  }
  return (
    <div>
      <Header value='1' />
      <Banner head='Shop' src='src/components/images/shop-1.jpg' height='550px' p='Home/Shop' />
      <div className="container p-4">
        <div className="row w-100">
          <div className="col-9">
            <h1 className="fw-bold">Shop</h1>
            <select type="text" className="form-select w-25 mt-4 rounded-5 p-2">
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price:Low to High</option>
              <option>Sort by price:High to Low</option>
            </select>
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
                      <p id="para" className="card-text fw-bold mt-3 color">
                        <del>{card.del}</del> ${card.price}.00
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-3 p-0">
            <div className="form-group p-2 rounded-5 has-search">
              <input type="text" className="form-control" placeholder="Search" />
              <img
                src="src/components/images/search.svg"
                alt=""
                className="input-search me-2 "
              />
            </div>
            <h3 className="color mt-5 fw-bold">Product Categories</h3>
            <ul className="p-0">
              <li className="fw-bold mt-3"><Link className="cat">Collection</Link></li>
              <li className="fw-bold mt-2"><Link className="cat">Goods</Link></li>
              <li className="fw-bold mt-2"><Link className="cat">New</Link></li>
              <li className="fw-bold mt-2"><Link className="cat">Uncategorized</Link></li>
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
                {prods.map((card,index)=>(
                      <li className="d-flex gap-3 mt-3" key={index}>
                    <img src={card.src} className="product-img" />
                    <div className="d-block color">
                      <p className="fw-500">{card.title}</p>
                      <p><del>{card.del}</del> ${card.price}.00</p>
                    </div>
                  </li>
                    ))}
                </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
