import React from "react";
import aboutData from "../pages/aboutData.json";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  ...theme.typography.body2,
  padding: "1em",
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
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #Fdeab0, #Fbe6a6, #Ffe69b, #Fde290, #Fbde8a, #ffe7aa, #ffe6b8, #ffe5c5, #ffe7dc, #ffeef2, #fff7fe, #ffffff)",
      }}
    >
      <Title>
        Welcome to the enchanting world of the Doe family beekeepers!
      </Title>

      {/* First section: Smaller img on the left, text on the right */}
      <div className="about-section">
        <div className="img-container">
          <img
            src={aboutData[0].src}
            alt={aboutData[0].alt}
            className="about-img"
          />
          <a className="originalSrc" href={aboutData[0].path}>
            Link to Freepik
          </a>
        </div>
        <p className="about-text">{aboutData[0].text}</p>
      </div>

      {/* Second section: Text on the left, img on the right */}
      <div className="about-section">
        <p className="about-text">{aboutData[1].text}</p>
        <div className="img-container">
          <img
            src={aboutData[1].src}
            alt={aboutData[1].alt}
            className="about-img"
          />
          <a className="originalSrc" href={aboutData[1].path}>
            Link to Freepik
          </a>
        </div>
      </div>

      {/* Third section: Just text with full width */}
      <div className="about-section">
        <div className="img-container">
          <img
            src={aboutData[2].src}
            alt={aboutData[2].alt}
            className="about-img"
          />
          <a className="originalSrc" href={aboutData[2].path}>
            Link to Freepik
          </a>
        </div>
        <p className="about-text">{aboutData[2].text}</p>
      </div>

      {/* Fourth section: Just text with full width */}
      <div className="about-section">
        <p className="about-text">{aboutData[3].text}</p>
      </div>

      {/* Fifth section: Text on the left, img on the right */}
      <div className="about-section">
        <p className="about-text">{aboutData[4].text}</p>
        <div className="img-container">
          <img
            src={aboutData[4].src}
            alt={aboutData[4].alt}
            className="about-img"
          />
          <a className="originalSrc" href={aboutData[4].path}>
            Link to Freepik
          </a>
        </div>
      </div>

      {/* Sixth section: Just text with full width */}
      <div className="about-section">
        <p className="about-text">{aboutData[5].text}</p>
      </div>

      {/* Seventh section: Just text with full width */}
      <div className="about-section">
        <p className="about-text">{aboutData[6].text}</p>
      </div>
    </div>
  );
}

export default About;
