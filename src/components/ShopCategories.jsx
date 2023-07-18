import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Beekeeper from '../assets/img/Beekeeper.png';

const HexagonItem = styled(Button)(({ theme }) => ({
  width: '200px',
  height: '215px',
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
    backgroundColor: 'var(--dark-yellow)',
  },
 
    '@media (max-width: 900px)': {
    width: '100px',
    height: '115px',
    fontSize: '14px',
  },
}));


export default function ShopCategories() {
  return (
    <>
    <Grid container justifyContent="space-evenly" paddingTop={2}  sx={{ margin: '0 auto', maxWidth: '100%' }}>
      <HexagonItem xs={12} sm={6} md={4} lg={3} xl={2}>Honey</HexagonItem>
      <HexagonItem xs={12} sm={6} md={4} lg={3} xl={2}>Sweets</HexagonItem>
      <HexagonItem xs={12} sm={6} md={4} lg={3} xl={2}>Cosmetics</HexagonItem>
      <HexagonItem xs={12} sm={6} md={4} lg={3} xl={2}>Food</HexagonItem>
      <HexagonItem xs={12} sm={6} md={4} lg={3} xl={2}>Other</HexagonItem>
    </Grid>

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
    }} 
    >
        
     We understand the vital role of bees in our ecosystem, especially in food production. Bees are essential pollinators, ensuring the reproduction of many fruits, vegetables, and nuts we rely on for nourishment.
</Typography>
</Container>
</Stack>
   </> 

  );
}



