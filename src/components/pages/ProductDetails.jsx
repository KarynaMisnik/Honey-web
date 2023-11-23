import React from "react";
import { useParams } from "react-router-dom";
/* import data */
import productData from "./productData.json";
/* import MUI components */
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { styled, Button } from "@mui/material";

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

const ProductDetails = (handleClick) => {
  const { valuesId } = useParams();
  const product = productData.find(
    (product) => product.id === parseInt(valuesId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5rem",
          "@media screen and (max-width: 800px)": {
            flexDirection: "column",
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <div className="productDetails-img-container">
            <img src={product.src} alt={product.alt} loading="lazy" />
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div className="product-details-container">
            <h1 className="product-details-title">{product.title}</h1>
            <div className="product-details-rating">
              <Rating
                name="product-rating"
                value={product.value}
                precision={0.5}
                readOnly
              />
            </div>
            <p className="product-details-info">{product.info}</p>
            <p className="product-details-price">
              Price:
              <span>{product.price}&#x20AC;</span>
            </p>
            <p className="product-details-amount">
              Amount:
              <span> {product.amount}</span>
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
