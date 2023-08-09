import React from 'react';
import { useParams } from 'react-router-dom';
import productData from './productData.json'; // Import your JSON data

function ProductDetails() {
  const {valuesId } = useParams();
  const product  = productData.find((product ) => product .id === parseInt(valuesId));

  if (!product ) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img src={product.src} alt={product.alt}  style={{width:"500px", height:"500px" }} loading='lazy'/>
      <h2>{product.title}</h2>
      <p>{product.info}</p>
      <p>Price: {product.price}</p>
      <p>Amount: {product.amount}</p>
      {/* Display other product details */}
    </div>
  );
}

export default ProductDetails;
