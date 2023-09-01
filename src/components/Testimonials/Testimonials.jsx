import * as React from 'react';
import Item from '../../assets/img/item1.png';
import productData from '../Shop/productData.json'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function Testimonials(){
    return(
        <>
       <h1 style={{textAlign:'center', padding:'1rem 0', fontFamily:'var(--main-font)', fontWeight:'bolder'}}>What our customers say</h1>
 
     <Card sx={{background:'green'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            alt="Image"
            height="140"
            image={Item} // Replace with the actual image URL
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Box display="flex" alignItems="center" mt={1}>
              <Typography variant="body2" color="textSecondary">
                Author: John Doe
              </Typography>
            </Box>
             <Box display="flex" alignItems="center" mt={1}>
              <Rating name="read-only" value={4} readOnly />
            </Box>
            <Typography variant="body2" color="textSecondary">Apple Blossom Honey</Typography>

            <Typography variant="body2" color="textSecondary">Absolutely love this honey! The rich flavor and smooth texture make it perfect for drizzling over yogurt and desserts. A natural sweetness that I can't get enough of.</Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Typography variant="body2" color="textSecondary">
                Date: January 1, 2023
              </Typography>
            </Box>
            
          
          </CardContent>
        </Grid>
      </Grid>
    </Card>
        </>
    )
}

