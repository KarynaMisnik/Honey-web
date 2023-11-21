import React, { useState, useEffect } from "react";

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
    <div>
      {cart?.map((item) => (
        <div key={item.id}>
          <div className="img">
            <img src={item.src} alt={item.alt} />
            <p>{item.title}</p>
          </div>

          <div className="btn-container">
            <button
              style={{ padding: ".5rem", background: "#c2f98e" }}
              onClick={() => handleChange(item, +1)}
            >
              +
            </button>
            <button>{item.count}</button>
            <button
              style={{ padding: ".5rem", background: "#fbbfb5" }}
              onClick={() => handleChange(item, -1)}
            >
              -
            </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button
              style={{ color: "white", background: "red", padding: ".5rem" }}
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div>
        <span>Total: </span>
        <span>&#8364; - {price}</span>
      </div>
    </div>
  );
};

export default Cart;
