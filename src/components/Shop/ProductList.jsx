 import productData from "./productData.json";
 import { Button, Grid, styled } from '@mui/material';
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
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        '@media (maxWidth: 768px)': {
          display: 'block',
        },
      }}>

    

</div>
 
    </>
  );

 }