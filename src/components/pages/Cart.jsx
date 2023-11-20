import React, { useState } from "react";
import productData from "./productData.json";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If item already exists, increase its amount
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      // If item is not in the cart, add it
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }

    // Update total sum
    setTotalSum(totalSum + product.price);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
          <p>Amount: {item.amount}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <p>Total: ${totalSum}</p>
    </div>
  );
};

export default Cart;
