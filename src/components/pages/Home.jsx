import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../About/AboutSection";
import Testimonials from "../Testimonials/Testimonials";
import ShopSection from "../Shop/ShopSection";
import shopSectionData from "../Shop/shopSectionData.json";

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ShopSection data={shopSectionData} />
      <Testimonials />
    </div>
  );
}

export default Home;
