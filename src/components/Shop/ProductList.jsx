 import React, {useState} from 'react';
 import productData from "./productData.json";
 import { Button, Grid, styled, Paper } from '@mui/material';
 import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';



const CustomButton = styled(Button)(({ theme }) => ({
textAlign: 'center',
fontFamily: 'var(--main-font)',
fontSize: '18px',
fontWeight: '700',
background: 'var(--dark-brown)',
color: 'var(--white)',
borderRadius: '8px',
border: 'none',
margin: '5px',
":hover":{
    background: 'var(--dark-brown)',
},

     '@media (max-width: 1000px)': {
    fontSize: '12px',
    fontWeight: '400',
  },
}));


const CustomGrid = styled(Grid)(({ theme }) => ({
justifyContent:"center",
 alignItems:"center",
}))



 export default function ProductList(){
    const [data, setData] = useState(productData);
    return (
        <>
    <CustomGrid container  padding='1rem' >
      <CustomGrid container item xs={6} sm={2}>
        <CustomButton >
          Honey
        </CustomButton>
      </CustomGrid>
      <CustomGrid container item xs={6} sm={2}>
        <CustomButton>
          Sweets
        </CustomButton>
      </CustomGrid>
      <CustomGrid container item xs={6} sm={2}>
        <CustomButton>
          Cosmetics
        </CustomButton>
      </CustomGrid>
      <CustomGrid container item xs={6} sm={2}>
        <CustomButton>
          Food
        </CustomButton>
      </CustomGrid>
      <CustomGrid container item xs={6} sm={2}>
        <CustomButton>
          Other
        </CustomButton>
      </CustomGrid>
      <CustomGrid container item xs={6} sm={2}>
        <CustomButton>
          All
        </CustomButton>
      </CustomGrid>
    </CustomGrid>

<div  style={{
        flexGrow: 1,
    padding: 2,
      }}>

        <Grid container spacing={2} sx={{padding: '1rem'}}>

       {data.map((values) => {
       return(
          <Grid item xs={12} sm={6} md={4} key={values.id} sx={{textAlign: 'center'}}>
            <Paper elevation={6}  style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '8px' }}>
              <img src={values.src} alt={values.title} loading='lazy' style={{width: '100%', height: '500px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}}/>
              <div style={{display:'flex', justifyContent: 'center', alignItems:'center', padding: '0.5rem'}}>
              <p className='product_list title'>{values.title}</p>
              <p className='product_list amount'>{values.amount}</p>
              <p className='product_list price'>{values.price}&#x20AC;</p>
              <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '0.5rem'}}>
              <CustomButton >
            Buy 
              </CustomButton>
               <a href='#' className='product_list details'>Details</a>
              </div>
              </div>
            </Paper>
          </Grid>
        
 )})}

      </Grid>

</div>
 
    </>
  );

 }