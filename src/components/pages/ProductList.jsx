import React, { useState } from "react";
import { NavLink } from "react-router-dom";
/* import data */
import productData from "./productData.json";
/* import from MUI */
import { Button, Grid, styled, Paper } from "@mui/material";
import Rating from "@mui/material/Rating";

/* Hexagons on top */
const HexagonItem = styled(Button)(({ theme }) => ({
  width: "180px",
  height: "195px",
  padding: "1em",
  textAlign: "center",
  color: "var(--yellow)",
  textTransform: "uppercase",
  fontWeight: "700",
  fontSize: "24px",
  position: "relative",
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--black)",
  fontFamily: "var(--mosaic-font)",

  "&:hover": {
    backgroundColor: "var(--anthracite)",
    color: "var(--white)",
  },

  ":focus": {
    background: "var(--anthracite)",
    color: "var(--white)",
  },

  "@media (max-width: 1000px)": {
    width: "100px",
    height: "115px",
    fontSize: "14px",
  },
  "@media (max-width: 600px)": {
    width: "80px",
    height: "95px",
    fontSize: "12px",
  },
  "@media (max-width: 400px)": {
    width: "50px",
    height: "70px",
    fontSize: "10px",
  },
}));

/* Categories array */
const hexagonItems = [
  { label: "Honey", category: "honey" },
  { label: "Sweets", category: "sweets" },
  { label: "Body Care", category: "cosmetics" },
  { label: "Food", category: "food" },
  { label: "Other", category: "other" },
  { label: "All", category: "all" },
];

/* Add to cart button */
const CustomButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "var(--main-font)",
  fontSize: "1rem",
  fontWeight: "900",
  color: "var(--dark-brown)",
  backgroundColor: "var(--yellow)",
  border: "none",

  ":hover": {
    background: "var(--dark-brown)",
    color: "var(--white)",
  },
}));

const ProductList = ({ index, handleClick }) => {
  const [data, setData] = useState(productData);

  /* If hexagon "All" is clicked shows all items, otherwise selected category items are shown */
  const filterResult = (catItem) => {
    if (catItem === "all") {
      setData(productData);
    } else {
      const result = productData.filter((currentData) => {
        return currentData.category === catItem;
      });
      setData(result);
    }
  };
  return (
    <div
      className="bg-container"
      style={{
        backgroundImage:
          "linear-gradient(to bottom,  #FFD700 1%, #FFEC89, #FFEC89, #FFF0A3, #FFF1AA, #FFDAF5, #FDE2F6, #FFFFF0 )",
      }}
    >
      <Grid container justifyContent="space-evenly" padding={2}>
        {hexagonItems.map((item) => (
          <HexagonItem
            item
            key={item.id || index}
            onClick={() => filterResult(item.category)}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            {item.label}
          </HexagonItem>
        ))}
      </Grid>

      <div
        style={{
          flexGrow: 1,
          padding: 2,
        }}
      >
        <Grid container spacing={2} sx={{ padding: "1.5rem" }}>
          {data.map((values) => {
            return (
              <Grid
                item
                xs={12}
                sm={6} // 2 cards on a tablet
                md={4} // 3 cards on a smaller tablet
                lg={3} // 4 cards on a computer
                key={values.id}
                sx={{ padding: "1.5em" }}
              >
                <Paper
                  elevation={6}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "8px",
                    background: "#FDF0C6",
                    boxShadow: "var(--card-shadow)",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    className="product-img"
                    src={values.src}
                    alt={values.title}
                    loading="lazy"
                  />

                  <div className="card-info-wrpper">
                    <div className="rating">
                      <Rating
                        name="product-rating"
                        value={values.value}
                        precision={0.5}
                        readOnly
                      />
                    </div>

                    <p className="product_list title">{values.title}</p>
                    <div className="product-amount-and-price">
                      <p className="product_list amount">
                        Amount: <span>{values.amount}</span>
                      </p>
                      <p className="product_list price">
                        Price:
                        <span>{values.price}&#x20AC;</span>
                      </p>
                    </div>

                    <div className="product-details">
                      <NavLink to={`/values/${values.id}`}>
                        <p className="product_list details">Details</p>
                      </NavLink>
                    </div>

                    <CustomButton onClick={() => handleClick(values)}>
                      ADD TO CART
                    </CustomButton>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default ProductList;
