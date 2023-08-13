import React from 'react';
import Hero from './Hero/Hero';
import ShopCategories from './Shop/ShopCategories';
import Testimonials from './Testimonials/Testimonials';


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