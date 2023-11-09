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
backgroundColor: 'var(--yellow)',
border: 'none',


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
  padding: '1em',
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
  fontFamily: 'var(--mosaic-font)',

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
        '@media (max-width: 400px)': {
    width: '50px',
    height: '70px',
    fontSize: '10px',
  }
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

        <Grid container spacing={2} sx={{padding: '1.5rem'}}>

       {data.map((values) => {
       return(
          <Grid item  xs={12}
          sm={6} // 2 cards on a tablet
          md={4} // 3 cards on a smaller tablet
          lg={3} // 4 cards on a computer
           key={values.id} sx={{textAlign: 'center', padding:'1.5em'}}>
            <Paper elevation={6}  style={{  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '8px',background: 'linear-gradient(to top, var(--white), #ffeca4)',
  boxShadow:
  '1px 0px rgb(13,13,13), 1px 1px rgb(18,18,18), 2px 1px rgb(12,12,12), 2px 2px rgb(17,17,17), 3px 2px rgb(11,11,11), 3px 3px rgb(16,16,16), 4px 3px rgb(10,10,10), 4px 4px rgb(15,15,15), 5px 4px rgb(9,9,9), 5px 5px rgb(14,14,14), 6px 5px rgb(8,8,8), 6px 6px rgb(13,13,13), 7px 6px rgb(7,7,7), 7px 7px rgb(12,12,12), 8px 7px rgb(6,6,6), 8px 8px rgb(11,11,11)' }}>
              <img src={values.src} alt={values.title} loading='lazy' style={{width: '100%', height: '400px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}}/>
             
              <div className='card-info-wrpper' style={{display:'flex', flexDirection:'column'}}>
              <div style={{display:'flex', justifyContent: 'flex-start', alignItems:'center', paddingBottom: '0.5rem',  marginLeft: '15px'}}>
      <Rating name="product-rating" value={values.value} precision={0.5} readOnly />
              </div>

              <p className='product_list title'>{values.title}</p>
              <p className='product_list amount'>{values.amount}</p>
              <p className='product_list price'>{values.price}&#x20AC;</p>
               
              <div style={{display:'flex', justifyContent: 'flex-start', alignItems:'center', paddingBottom: '0.5rem',  marginLeft: '15px'}}>
          
             <NavLink to={`/values/${values.id}`}><p className='product_list details'>Details</p></NavLink> 
               
              </div>

                 <CustomButton >
            ADD TO CART 
              </CustomButton>
              
              </div>
            </Paper>
          </Grid>
        
 )})}
      </Grid>

</div>
 
    </>
  );

 }