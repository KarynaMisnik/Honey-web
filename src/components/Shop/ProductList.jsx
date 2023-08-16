 import React, {useState} from 'react';
 import productData from "./productData.json";
 import { Button, Grid, styled, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Rating from '@mui/material/Rating';


const CustomButton = styled(Button)(({ theme }) => ({
textAlign: 'center',
fontFamily: 'var(--main-font)',
fontSize: '18px',
fontWeight: '700',
color: 'var(--dark-brown)',
borderRadius: '8px',
border: '2px solid var(--dark-brown)',
margin: '5px',
":hover":{
    background: 'var(--dark-brown)',
    color: 'var(--white)',
},
    '@media (max-width: 1000px)': {
    fontSize: '12px',
    fontWeight: '400',
  },
}));


const HexagonItem = styled(Button)(({ theme }) => ({
  width: '180px',
  height: '195px',
  ...theme.typography.body2,
  padding: 0,
  textAlign: 'center',
  color: 'var(--dark-brown)',
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: '24px',
  position: 'relative',
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--dark-yellow)',

  '&:hover': {
    backgroundColor: 'var(--dark-brown)',
    color: 'var(--white)',
  },

  ":focus":{
background: 'var(--dark-brown)',
  color: 'var(--white)',
},
 
    '@media (max-width: 1000px)': {
    width: '100px',
    height: '115px',
    fontSize: '14px',
  },
      '@media (max-width: 600px)': {
    width: '80px',
    height: '95px',
    fontSize: '12px',
  },
}));


 export default function ProductList(){
    const [data, setData] = useState(productData);
    const filterResult = (catItem)=>{
        const result = productData.filter((currentData)=>{
            return currentData.category === catItem;
        });
        setData(result);
    }
    return (
        <>

        <Grid container justifyContent="space-evenly" paddingTop={2}  sx={{ margin: '0 auto', maxWidth: '100%' }}>
      <HexagonItem onClick={()=>filterResult('honey')} xs={12} sm={6} md={4} lg={3} xl={2}>Honey</HexagonItem>
      <HexagonItem onClick={()=>filterResult('sweets')} xs={12} sm={6} md={4} lg={3} xl={2}>Sweets</HexagonItem>
      <HexagonItem onClick={()=>filterResult('cosmetics')} xs={12} sm={6} md={4} lg={3} xl={2}>Cosmetics</HexagonItem>
      <HexagonItem onClick={()=>filterResult('food')} xs={12} sm={6} md={4} lg={3} xl={2}>Food</HexagonItem>
      <HexagonItem onClick={()=>filterResult('other')} xs={12} sm={6} md={4} lg={3} xl={2}>Other</HexagonItem>
      <HexagonItem onClick={()=>setData(productData)} xs={12} sm={6} md={4} lg={3} xl={2}>All</HexagonItem>
    </Grid>

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
             
              <div className='card-info-wrpper' style={{display:'flex', flexDirection:'column'}}>
              <div style={{display:'flex', justifyContent: 'flex-start', alignItems:'center', paddingBottom: '0.5rem',  marginLeft: '15px'}}>
      <Rating name="product-rating" value={values.value} precision={0.5} readOnly />
              </div>

              <p className='product_list title'>{values.title}</p>
              <p className='product_list amount'>{values.amount}</p>
              <p className='product_list price'>{values.price}&#x20AC;</p>
               
              <div style={{display:'flex', justifyContent: 'flex-start', alignItems:'center', paddingBottom: '0.5rem',  marginLeft: '15px'}}>
              <CustomButton >
            Buy 
              </CustomButton>
             
             <NavLink to={`/values/${values.id}`}><p className='product_list details'>Details</p></NavLink> 
               
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