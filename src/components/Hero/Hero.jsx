import { Divider } from "@mui/material";
import "./hero.css";

const Hero = () => {
  return (
    <div className="banner-wrapper">
      <div className="bg-text">
        <p>
          HONEY & <br />
          HONEY PRODUCTS
        </p>
        <Divider
          sx={{
            maxWidth: "100%",
            height: "7px",
            backgroundColor: "var(--rich-gray)",
            borderRadius: "50%",
          }}
        ></Divider>

        <p className="hero-text">
          Get fresh honey and organic honey products with just a one click
        </p>
      </div>
    </div>
  );
};

export default Hero;
