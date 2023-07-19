import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ShopCategories from './ShopCategories';
import Testimonials from './Testimonials';
import Contact from './Contact';


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