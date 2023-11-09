import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/pages/Error";
import ContactDetails from "./components/pages/ContactDetails";
import Cart from "./components/pages/Cart";
import ProductDetails from "./components/pages/ProductDetails";

const pages = ["Home", "About", "Shop", "Contact"];

function App() {
  return (
    <>
      <Navbar pages={pages} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/values/:valuesId" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Contact pages={pages} />
    </>
  );
}

export default App;
