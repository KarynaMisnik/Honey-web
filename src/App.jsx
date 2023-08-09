import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import ContactDetails from './components/Contact/ContactDetails';
import Cart from './components/Shop/Cart';
import ProductDetails from './components/Shop/ProductDetails';

const pages = ['Home', 'About', 'Shop', 'Contact'];


 function App() {

  return (
     <>
         <Navbar pages={pages} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactDetails />} />
         <Route path="/cart" element={<Cart/>} />
        <Route path="/values/:valuesId" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>

        <Contact pages={pages} />
      </>
   
  )
}


export default App;