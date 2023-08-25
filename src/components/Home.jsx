import React from 'react';
import Hero from './Hero/Hero';
import AboutSection from './About/AboutSection';
import Testimonials from './Testimonials/Testimonials';
import ShopSection from './Shop/ShopSection';


  function Home(){
    return(
        <>
        
         <Hero/>
          <AboutSection/>
          <ShopSection/>
         {/* <Testimonials/> */}
         
          </>
    )
}

export default Home;