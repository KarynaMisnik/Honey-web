import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ShopCategories from './ShopCategories';
import Testimonials from './Testimonials';
import Contact from './Contact';


 const HomePage = ()=>{
    return(
        <>
        <Navbar/>
         <Hero/>
          <ShopCategories/>
          <Testimonials/>
          <Contact/>
          </>
    )
}

export default HomePage;