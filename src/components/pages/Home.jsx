import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../About/AboutSection";
import Testimonials from "../Testimonials/Testimonials";
import ShopSection from "../Shop/ShopSection";
import shopSectionData from "../Shop/shopSectionData.json";

function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #FFD700 2%, #ffec89, #ffec89, #fff0a3, #fff1aa, #fbeda8, #fffff0, #fbc6ed, #fccbef, #fffff0)",
      }}
    >
      <Hero />
      <AboutSection />
      <ShopSection data={shopSectionData} />
      <Testimonials />
    </div>
  );
}

export default Home;
