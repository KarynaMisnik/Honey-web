import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contact from "./components/Contact/Contact";
{
  /*import Error from "./components/pages/Error";*/
}
import ContactDetails from "./components/pages/ContactDetails";
import Cart from "./components/pages/Cart";
import ProductDetails from "./components/pages/ProductDetails";

const pages = ["Home", "About", "Shop", "Contact"];

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let inCart = false;

    // Check if the item is already in the cart
    cart.forEach((product) => {
      if (item.id === product.id) inCart = true;
    });

    if (inCart) {
      setWarning(true);

      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    // Update the cart state using the functional form of setCart
    setCart([...cart, item]);
  };

  const handleChange = (item, j) => {
    let k = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) k = index;
    });
    const tempArr = cart;
    tempArr[k].count += j;
    if (tempArr[k].count === 0) tempArr[k].count = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <Navbar pages={pages} size={cart.length} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop handleClick={handleClick} />} />

        <Route path="/contact" element={<ContactDetails />} />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
        <Route path="/values/:valuesId" element={<ProductDetails />} />
        {/*<Route path="*" element={<Error />} />*/}
      </Routes>
      {warning && <div className="warning">Item has already been added</div>}
      <Contact pages={pages} />
    </>
  );
}

export default App;
