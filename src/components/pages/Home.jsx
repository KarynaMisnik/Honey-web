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
            "linear-gradient(to bottom, #FFFFFF, #FFECA4, #FBE386)",
        }}
      >
        <ShopSection data={shopSectionData} />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
