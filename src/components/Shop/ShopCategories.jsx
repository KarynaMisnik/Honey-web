import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Beekeeper from '../../assets/img/Beekeeper.png';




export default function ShopCategories() {

  return (
    <>
 <h1>LETS DO SHOPPING</h1>
 {/* ADD SOME IMG OR OTHER TO POINT TO SHOP PAGE  */}

    < Stack direction='row' justifyContent={'space-between'}  sx={{ display: { xs: 'none', sm: 'flex' }}}>
    <Box
     component="img"
      sx={{
        width: 350,
        height: 350,
      }}
      src={Beekeeper}
   />
   <Container style={{ 
    background: 'var(--yellow)', 
    borderRadius:'20px', 
    height:'290px', 
    marginTop:'25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
}}
   >
     <Typography 
     sx={{
    textAlign: 'center',
    color: 'var(--dark-brown)',
    fontSize: { xs: '18px', sm: '16px', md: '20px', lg: '24px', xl: '24px'},
    fontWeight: 700,
    fontFamily: 'var(--main-font)',
    }} 
    >
        
 We offer a range of pure and flavorful honey sourced from our own bee farms and trusted local beekeepers.
          Explore our selection of honey and honey-based delights, including beeswax candles, honey-infused skincare, and delectable spreads.</Typography>
</Container>
</Stack>
   </> 

  );
}



