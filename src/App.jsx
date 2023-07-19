import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import About from './components/About/About';
import Contact from './components/Contact';
import Error from './components/Error';

const pages = ['Home', 'About', 'Shop', 'Contact'];


 function App() {

  return (
     <>
         <Navbar pages={pages} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        
        <Route path="*" element={<Error />} />
      </Routes>

        <Contact pages={pages} />
      </>
   
  )
}


export default App;