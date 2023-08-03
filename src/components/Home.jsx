import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import ShopCategories from './ShopCategories';
import Testimonials from './Testimonials';
import Contact from './Contact/Contact';


  function Home(){
    return(
        <>
        
         <Hero/>
          <ShopCategories/>
          <Testimonials/>
         
          </>
    )
}

export default Home;