import React from 'react';
import { useParams } from 'react-router-dom';
import productData from './productData.json'; 
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';


function ProductDetails() {
  const {valuesId } = useParams();
  const product  = productData.find((product ) => product.id === parseInt(valuesId));

  if (!product ) {
    return <div>Product not found</div>;
  }

  return (
<>
     <Grid container spacing={2}>
    <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={product.src} alt={product.alt} loading='lazy' style={{ width: '100%', height: 'auto', borderRadius: '10px', margin:'1.5rem' }} />
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <div className='product_details_container'>
           <Rating name="product-rating" value={product.value} precision={0.5} readOnly />
          <p className='product_details title'>{product.title}</p>
          <p className='product_details info'>{product.info}</p>
          <p className='product_details price'><span>Price:</span> {product.price}&#x20AC;</p>
          <p className='product_details amount'><span>Amount:</span> {product.amount}</p>
        </div>
      </Grid>
    </Grid>

</>
  );
}

export default ProductDetails;
