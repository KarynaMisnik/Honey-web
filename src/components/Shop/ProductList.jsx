 import React, {useState} from 'react';
 import productData from "./productData.json";
 import { Button, Grid, styled, Paper } from '@mui/material';
 import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';



const CustomButton = styled(Button)(({ theme }) => ({
textAlign: 'center',
fontFamily: 'var(--main-font)',
fontSize: '24px',
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

        <Grid container spacing={2}>

       {data.map((values) => {
       return(
          <Grid item xs={12} sm={6} md={4} key={values.id} sx={{textAlign: 'center'}}>
            <Paper elevation={3}>
              <img src={values.src} alt={values.title}  sx={{width: '100%',
    height: 'auto',}}/>
              <h3>{values.title}</h3>
              <p>{values.price}</p>
              <Button variant="contained" color="primary">
                More
              </Button>
            </Paper>
          </Grid>
        
 )})}

      </Grid>

</div>
 
    </>
  );

 }