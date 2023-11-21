import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material";

const CustomDivider = styled(Divider)(({ theme }) => ({
  width: "50%",
  borderBottomWidth: "2px",
  background: "var(--black)",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  padding: ".5rem",
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
    <div className="cart-wrapper">
      {cart?.map((item) => (
        <div className="product-cntainer" key={item.id}>
          <div className="cart-item-img">
            <h4>{item.title}</h4>
            <img src={item.src} alt={item.alt} />
          </div>
          <div className="all-btn-wrapper">
            <div>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <CustomButton onClick={() => handleChange(item, +1)}>
                  +
                </CustomButton>
                <CustomButton>{item.count}</CustomButton>
                <CustomButton onClick={() => handleChange(item, -1)}>
                  -
                </CustomButton>
              </ButtonGroup>
            </div>

            <div className="price-and-remove-btn">
              <span>{item.price} &#8364;</span>
              <button
                style={{ color: "white", background: "red", padding: ".5rem" }}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <CustomDivider />
      <div className="total-sum">
        <span>Total: </span>
        <span> {price} &#8364;</span>
      </div>
    </div>
  );
};

export default Cart;
