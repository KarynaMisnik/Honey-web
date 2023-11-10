import * as React from "react";
import { Button, Grid, List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

import Flower from "../../assets/img/aboutSection/flower.png";
import Hive from "../../assets/img/aboutSection/hive.png";
import HoneyJar from "../../assets/img/aboutSection/honey-jar.png";

import Beekeepers from "../../assets/img/aboutSection/beekeepers-family.jpg";

import "./about-section.css";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  padding: "1.5rem",
  background: "var(--dark-yellow)",
  color: "var(--black)",
  fontFamily: "var(--abrilFatface-font)",
  fontSize: "1.5rem",
  textTransform: "none",
  cursor: "pointer",
  "&:hover": { background: "var(--dark-yellow)" },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "600px",
    padding: "1rem",
    fontSize: "1rem",
  },
}));

export default function AboutSection() {
  return (
    <div className="grid-container-aboutSection">
      <div className="imgText-wrapper">
        <div className="img-container">
          <div>
            <img src={Beekeepers} />
          </div>
        </div>

        <div
          className="welcoming-text"
          style={{
            padding: 0,
          }}
        >
          <p className="welcome-title">Welcome to the Doe Family!</p>
          <p className="welcome-text">
            We're a close-knit family passionate about sharing the natural
            goodness of our handcrafted honey products. From our family to
            yours, we invite you to savor the sweetness of nature's finest gift
            – pure, golden honey.
          </p>
          <NavLink to={`/about`}>
            <CustomButton>Learn More</CustomButton>
          </NavLink>
        </div>
      </div>

      <div
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div className="motto-container">
          <p className="motto-text">
            Bees: Nature's tiny heroes, vital for pollination, essential for our
            food.
          </p>
        </div>
      </div>

      <div className="hex-container">
        <div className="hexagon">
          <div className="hexagon-inner">
            <img src={Flower} alt="A flower in black color" />
          </div>
        </div>

        <div className="hexagon">
          <div className="hexagon-inner">
            <img src={Hive} alt="A hive and bees around it" />
          </div>
        </div>

        <div className="hexagon">
          <div className="hexagon-inner">
            <img src={HoneyJar} alt="A jar with honey" />
          </div>
        </div>
      </div>

      <div className="shopping-section-textContainer">
        <p>Explore our selection of honey and honey-based delights</p>
        <NavLink to={`/shop`}>
          <CustomButton sx={{ margin: ".5rem 0" }}>GO SHOPPING</CustomButton>
        </NavLink>
      </div>
    </div>
  );
}
