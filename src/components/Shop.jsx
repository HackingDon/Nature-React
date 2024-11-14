import React, { useState, useRef, useEffect } from "react";
import "./shop.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import { addItem } from "./CartSlice";
import { useSelector, useDispatch } from "react-redux";
import Alertmessage from "./alertmessage";
function Shop() {
  const jsonData = [
    {
      src: "src/components/images/shop-6-580x580.jpg",
      title: "Backpack",
      pop: 6,
      rating: 6,
      label: "New",
      del: "",
      price: 15.0,
      available: "Out of stock",
      quantity: 1,
    },
    {
      src: "src/components/images/shop-3-580x580.jpg",
      title: "Bag",
      pop: 5,
      rating: 2,
      label: "Collection",
      del: "",
      price: 65.0,
      available: "",
      quantity: 1,
    },
    {
      src: "src/components/images/shop-5-580x580.jpg",
      title: "Cap",
      pop: 3,
      rating: 5,
      label: "Goods",
      del: "",
      price: 25.0,
      available: "",
      quantity: 1,
    },
    {
      src: "src/components/images/shop-1-580x580.jpg",
      title: "Cup(Green Planet)",
      pop: 1,
      rating: 1,
      label: "Goods",
      del: "$20.00",
      price: 16.0,
      available: "Sale",
      quantity: 1,
    },
    {
      src: "src/components/images/shop-2-580x580.jpg",
      title: "Notebook",
      pop: 4,
      rating: 3,
      label: "New",
      del: "$20.00",
      price: 15.0,
      available: "Sale",
      quantity: 1,
    },
    {
      src: "src/components/images/shop-4-580x580.jpg",
      title: "T-shirt",
      pop: 2,
      rating: 4,
      label: "Collection",
      del: "",
      price: 20.0,
      available: "Out of stock",
      quantity: 1,
    },
  ];
  const dispatch = useDispatch();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(70);
  const input1ref = useRef(null);
  const input2ref = useRef(null);
  const [style, setStyle] = useState({});
  const [message, setMessage] = useState("");
  const cart = useSelector((state) => state.cart);
  const inputRef = useRef(null);
  const selectrRef = useRef(null);
  const [showalert,setShowalert] = useState(false);
  const [alert,setAlert] = useState("")
  const [cards, setCards] = useState(jsonData);
  const handleMinChange = () => {
    const value = Math.min(Number(input1ref.current.value), maxValue - 10);
    setMinValue(value);
  };
  const handleMaxChange = () => {
    const value = Math.max(Number(input2ref.current.value), minValue + 10);
    setMaxValue(value);
  };
  useEffect(() => {
    setStyle({
      left: `${(minValue / 70) * 100}%`,
      width: `${((maxValue - minValue) / 70) * 100}%`,
    });
  }, [minValue, maxValue]);
  function enter(index) {
    const para = document.querySelectorAll("#para");
    if (cards[index].available == "Out of stock") {
      para[index].innerText = "Show Details";
    } else {
      para[index].innerText = "Add to Cart";
    }
  }
  function handleAlert(){
    setShowalert(true);
    setTimeout(()=>{
      setShowalert(false)
    },2000)
  }
  function addCart(index) {
    if (cards[index].available != "Out of stock") {
      if(cart.includes(cards[index]))setAlert("Already Added")
      else{
      dispatch(addItem(cards[index]))
      setAlert("Item Added!");
      }
      handleAlert()
    } else {
      setAlert("Not available");
      handleAlert()
    }
  }
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(cart));
  }, [cart]);
  function leave(index) {
    const para = document.querySelectorAll("#para");
    para[
      index
    ].innerHTML = `<del>${cards[index].del}</del> $${cards[index].price}.00`;
  }
  function sortData(val) {
    const data = [...cards].sort((a, b) => {
      if (val == "L2H") {
        return a.price - b.price;
      } else if (val == "H2L") {
        return b.price - a.price;
      } else if (val == "popularity") {
        return a.pop - b.pop;
      } else if (val == "rating") {
        return a.rating - b.rating;
      }
    });
    setCards(data);
  }
  function handleClick() {
    let val = selectrRef.current.value;
    if (val == "default") {
      return setCards(jsonData);
    } else {
      sortData(val);
    }
  }
  function filler(e) {
    e.preventDefault();
    let value = inputRef.current.value;
    if (value == "") {
      setMessage("*Please Fill");
    } else {
      let data = jsonData.filter(
        (item) => item.title.toLowerCase() == value.toLowerCase()
      );
      if (data == "") {
        setMessage("*Item not found");
        setCards([]);
      } else {
        setMessage("");
        setCards(data);
      }
    }
  }
  function handleFilter(value) {
    let data = jsonData.filter((item) => item.label.includes(value));
    if (value == "Reload") {
      setMessage("");
      setCards(jsonData);
      setMinValue(0);
      setMaxValue(70);
    } else {
      setMessage("");
      setCards(data);
    }
  }
  return (
    <div>
      <Header value="1" />
      <Alertmessage message={alert} alert={showalert}/>
      <Banner
        head="Shop"
        src="src/components/images/shop-1.jpg"
        height="550px"
        p="Home/Shop"
      />
      <div className="container p-4">
        <div className="row w-100">
          <div className="col-9">
            <h1 className="fw-bold">Shop</h1>
            <div className="d-flex w-100 justify-content-between pe-5">
              <select
                ref={selectrRef}
                type="text"
                className="form-select w-25 mt-4 rounded-5 p-2"
                onChange={handleClick}
              >
                <option value="default">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="default">Sort by latest</option>
                <option value="L2H">Sort by price:Low to High</option>
                <option value="H2L">Sort by price:High to Low</option>
              </select>
              <button
                className="btn border-0 rt"
                onClick={() => handleFilter("Reload")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
              </button>
            </div>
            <div className="row w-100">
              {cards.map((card, index) => (
                <div
                  className={
                    card.price >= minValue && card.price <= maxValue
                      ? "col-4"
                      : "d-none"
                  }
                  key={index}
                >
                  <div
                    className="card mt-5"
                    onMouseEnter={() => enter(index)}
                    onMouseLeave={() => leave(index)}
                  >
                    <div className="card-img">
                      <img
                        className="card-img-top card-image"
                        src={card.src}
                        alt="Card image cap"
                      />
                      <div
                        className={card.available != "" ? "card-img-label" : ""}
                      >
                        {card.available}
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold color">{card.title}</h5>
                      <span
                        className="fw-bold fs-5 card-label"
                        style={{ color: "#EFC94C" }}
                      >
                        {card.label}
                      </span>
                      <p
                        id="para"
                        className="card-text fw-bold mt-3 color"
                        onClick={() => addCart(index)}
                      >
                        <del>{card.del}</del> ${card.price}.00
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-3 p-0">
            <form
              className="form-group p-2 rounded-5 has-search"
              onSubmit={filler}
            >
              <input
                type="text"
                className="form-control"
                ref={inputRef}
                placeholder="Search"
              />
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
              <li
                className="fw-bold mt-3"
                onClick={() => handleFilter("Collection")}
              >
                <a className="cat">Collection</a>
              </li>
              <li
                className="fw-bold mt-2"
                onClick={() => handleFilter("Goods")}
              >
                <a className="cat">Goods</a>
              </li>
              <li className="fw-bold mt-2" onClick={() => handleFilter("New")}>
                <a className="cat">New</a>
              </li>
            </ul>
            <div className="postion-relative">
              <h3 className="color fw-bold">Filter by price</h3>
              <div className="double-range-slider mt-3">
                <input
                  ref={input1ref}
                  type="range"
                  step="5"
                  min="0"
                  max="70"
                  value={minValue}
                  onChange={handleMinChange}
                  className="slider1"
                />
                <input
                  ref={input2ref}
                  type="range"
                  step="5"
                  min="0"
                  max="70"
                  value={maxValue}
                  onChange={handleMaxChange}
                  className="slider1"
                />
                <div className="slider-track">
                  <div className="slider-range" style={style} />
                </div>
                <div className="position-absolute d-flex mt-4">
                  <span className="fs-5 fm fw-bold">
                    Price:${minValue}-${maxValue}
                  </span>
                </div>
              </div>
              <h3 className="fw-500 mt-5 pt-5">Products</h3>
              <ul className="mt-4 p-0">
                {jsonData.map((card, index) => (
                  <li
                    className={
                      index < 4 && card.available != "Out of stock"
                        ? "d-flex gap-3 mt-3"
                        : "d-none"
                    }
                    key={index}
                  >
                    <img src={card.src} className="product-img" />
                    <div className="d-block color">
                      <p className="fw-500">{card.title}</p>
                      <p>
                        <del>{card.del}</del> ${card.price}.00
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/cart">
                <button className="btn btn-outline-dark mt-5 ms-5 fs-4">
                  CheckOut ({cart.length})
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Shop;
