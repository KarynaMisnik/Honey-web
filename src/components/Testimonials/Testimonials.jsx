import * as React from 'react';
import Typography from '@mui/material/Typography';
import Item from '../../assets/img/item1.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Divider } from '@mui/material';
import productData from '../Shop/productData.json'; 
import { useState } from 'react';



const Testimonials = () =>{
   const [data, setData] = useState(productData);
    return(
        <Box sx={{ display: 'flex', flexDirection:'column',flexGrow: 1, background: 'var(--light-yellow)' }}>  {/* container wrapper */}
        <Typography sx={{margin: '5px 15px'}}>Reviews From Customers</Typography>
        <Divider sx={{ margin: '2px 15px', maxWidth:'100%', height: '3px',  backgroundColor: 'var(--khaki)' }}></Divider>
       
{data.map((values) => {
        <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > *': {
        width: '22%', // Display 4 items per row by default
      },
      '@media (max-width: 960px)': {
        '& > *': {
          width: '45%', // Display 2 items per row on screens up to 960px wide
        },
      },
      '@media (max-width: 600px)': {
        '& > *': {
          width: '100%', // Display 1 item per row on screens up to 600px wide
        },
      },
    }}>

    <Box key={values.id} sx={{ display:'column', border:'3px solid var(--khaki)', borderRadius:'5px', margin:'10px 10px', background:'var(--white)'}}>
        
        <Box
      sx={{
        '& > legend': { mt: 2 }, display:'flex', margin:'5px'
      }}
    >
      <Rating name="read-only" value={5} readOnly />
      <Typography marginLeft={1}>07/06/23</Typography>
      </Box>
    <Box sx={{display:'flex', marginLeft:'10px'}}>
<img src={values.src} width={100} height={100}></img>
<Box  >
  <Typography lineHeight={1}>{values.review}
  <br></br>
{values.reviewer}</Typography>
</Box>
</Box>
<Typography sx={{marginLeft:'10px', fontSize:'14px'}}>
  Honeycomb 30g
</Typography>

       </Box>

       </Box>    
})}

           {/* 
       <Box sx={{ display:'column', border:'3px solid var(--khaki)', borderRadius:'5px', margin:'10px 10px', background:'var(--white)'}}>
        
        <Box
      sx={{
        '& > legend': { mt: 2 }, display:'flex', margin:'5px'
      }}
    >
      <Rating name="read-only" value={5} readOnly />
      <Typography marginLeft={1}>07/06/23</Typography>
      </Box>
    <Box sx={{display:'flex', marginLeft:'10px'}}>
<img src={Item} width={100} height={100}></img>
<Box  >
  <Typography lineHeight={1}>I got it very fast. It is very tasty and has nice smell. Perfect with tea.
  <br></br>
John Doe</Typography>
</Box>
</Box>
<Typography sx={{marginLeft:'10px', fontSize:'14px'}}>
  Honeycomb 30g
</Typography>

       </Box>


 <Box sx={{ display:'column', border:'3px solid var(--khaki)', borderRadius:'5px',  background:'var(--white)', margin:'10px 10px'}}>
        <Box
      sx={{
        '& > legend': { mt: 2 }, display:'flex', margin:'5px'
      }}
    >
      <Rating name="read-only" value={5} readOnly />
      <Typography marginLeft={1}>07/06/23</Typography>
      </Box>
    <Box sx={{display:'flex', marginLeft:'10px'}}>
<img src={Item} width={100} height={100}></img>
<Box>
  <Typography lineHeight={1}>I got it very fast. It is very tasty and has nice smell. Perfect with tea.
  <br></br>
John Doe</Typography>
</Box>
</Box>
<Typography sx={{marginLeft:'10px', fontSize:'14px'}}>
  Honeycomb 30g
</Typography>
       </Box>



 <Box sx={{ display:'column', border:'3px solid var(--khaki)', borderRadius:'5px',  background:'var(--white)', margin:'10px 10px'}}>
        <Box
      sx={{
        '& > legend': { mt: 2 }, display:'flex', margin:'5px'
      }}
    >
      <Rating name="read-only" value={5} readOnly />
      <Typography marginLeft={1}>07/06/23</Typography>
      </Box>
    <Box sx={{display:'flex', marginLeft:'10px'}}>
<img src={Item} width={100} height={100}></img>
<Box>
  <Typography lineHeight={1}>I got it very fast. It is very tasty and has nice smell. Perfect with tea.
  <br></br>
John Doe</Typography>
</Box>
</Box>
<Typography sx={{marginLeft:'10px', fontSize:'14px'}}>
  Honeycomb 30g
</Typography>
       </Box>

 

 <Box sx={{ display:'column', border:'3px solid var(--khaki)', borderRadius:'5px',  background:'var(--white)', margin:'10px 10px'}}>
        <Box
      sx={{
        '& > legend': { mt: 2 }, display:'flex', margin:'5px'
      }}
    >
      <Rating name="read-only" value={5} readOnly />
      <Typography marginLeft={1}>07/06/23</Typography>
      </Box>
    <Box sx={{display:'flex', marginLeft:'10px'}}>
<img src={Item} width={100} height={100}></img>
<Box >
  <Typography lineHeight={1}>I got it very fast. It is very tasty and has nice smell. Perfect with tea.
  <br></br>
John Doe</Typography>
</Box>
</Box>
<Typography sx={{marginLeft:'10px', fontSize:'14px'}}>
  Honeycomb 30g
</Typography>
       </Box>

     
</Box>

    */}

   </Box>
    )
}

export default Testimonials; 
