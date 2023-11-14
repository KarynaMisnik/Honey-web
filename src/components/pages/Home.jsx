import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../About/AboutSection";
import Testimonials from "../Testimonials/Testimonials";
import ShopSection from "../Shop/ShopSection";
import shopSectionData from "../Shop/shopSectionData.json";

function Home() {
  return (
    <>
      <Hero />

      <AboutSection />

      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom,  #FFFFF0 , #FFDAF5, #FDE2F6, #FFFFF0 )",
        }}
      >
        <ShopSection data={shopSectionData} />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
