import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  padding: ".5rem",
  backgroundColor: "var(--black)",
  color: "var(--white)",
  fontWeight: "bold",
  outline: "none",

  "&:hover": {
    backgroundColor: "var(--black)",
    color: "var(--yellow)",
  },
}));

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let i = 0;
    cart.map((item) => (i += item.count * item.price));
    setPrice(i);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id != id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="empty-cart-container">
      {price <= 0 ? (
        <div className="empty-cart-img">
          <h4>Your cart is empty</h4>
          <img
            src="./src/assets/img/products/empty-cart.png"
            alt="An empty cart with several bees around"
          />
        </div>
      ) : (
        <div>
          <div className="cart-wrapper">
            {cart?.map((item) => (
              <div className="product-container" key={item.id}>
                <div className="cart-item-img">
                  <h4>{item.title}</h4>
                  <span>{item.price} &#8364;</span>
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="all-btn-wrapper">
                  <div>
                    <ButtonGroup variant="outlained">
                      <CustomButton onClick={() => handleChange(item, +1)}>
                        +
                      </CustomButton>
                      <CustomButton
                        sx={{
                          background: "var(--gray)",
                        }}
                      >
                        {item.count}
                      </CustomButton>
                      <CustomButton onClick={() => handleChange(item, -1)}>
                        -
                      </CustomButton>
                    </ButtonGroup>
                  </div>

                  <div className="price-and-remove-btn">
                    <CustomButton
                      className="btn-remove"
                      variant="contained"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </CustomButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total-sum">
            <span>Total: {price} &#8364;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
