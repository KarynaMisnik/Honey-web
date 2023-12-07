import React from "react";
/* import from data file */
import aboutData from "../pages/aboutData.json";
/* MUI */
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  padding: "1.5rem",
  fontFamily: "var(--abrilFatface-font)",
  fontSize: "40px",
  fontWeight: "900",
  letterSpacing: "2px",

  "@media (max-width: 900px)": {
    fontSize: "20px",
  },
}));

function About() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <Title>
        Welcome to the enchanting world of the Doe family beekeepers!
      </Title>

      {/* First section */}
      <div className="about-section">
        <div className="img-container">
          <img src={aboutData[0].src} alt={aboutData[0].alt} />
        </div>
        <div className="about-text-container ">
          <p className="about-text">{aboutData[0].text}</p>
        </div>
      </div>

      {/* Second section*/}
      <div className="about-section">
        <div className="about-text-container">
          <p className="about-text">{aboutData[1].text}</p>
        </div>
        <div className="img-container">
          <img src={aboutData[1].src} alt={aboutData[1].alt} />
        </div>
      </div>

      {/* Third section */}
      <div className="about-section">
        <div className="img-container">
          <img src={aboutData[2].src} alt={aboutData[2].alt} />
        </div>
        <div className="about-text-container">
          <p className="about-text">{aboutData[2].text}</p>
        </div>
      </div>

      {/* Fourth section*/}
      <div className="about-section">
        <div className="about-text-container">
          <p className="about-text">{aboutData[3].text}</p>
        </div>
        <div className="img-container ">
          <img src={aboutData[4].src} alt={aboutData[4].alt} />
        </div>
      </div>

      {/* Fifth section */}
      <div className="about-section text-only">
        <div className="about-text-container">
          <p className="about-text">{aboutData[5].text}</p>
        </div>

        <div className="about-text-container">
          <p className="about-text">{aboutData[6].text}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
