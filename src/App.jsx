import "./App.css";
import Home from "./components/home/Home";
import Join from "./components/join/Join";
import Shop from "./components/shopping/Shop";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/shopping/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
