import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Beekeepers from '../../assets/img/aboutSection/beekeepers-family.jpg';

export default function AboutSection() {

  return (
   <Grid container direction="column" spacing={2} sx={{backgroundImage: 'linear-gradient(to bottom, #fbe386, #fce58c, #fde792, #fde897, #feea9d, #ffe7aa, #ffe6b8, #ffe5c5, #ffe7dc, #ffeef2, #fff7fe, #ffffff)'}}>
      <Grid item>
        <div  style={{ display:'flex', justifyContent:'center',alignItems:'center', background:'red' }}>
          <img src={Beekeepers} style={{  boxShadow: '-15px -18px 0px -3px #000000', borderRadius:'10px'}}/>
          <div>
<p style={{fontFamily:'var(--abrilFatface-font)', fontSize:'3rem', marginBottom:'1.5rem'}}>Welcome to the sweet world of the Doe Family Honey!</p>
<p style={{fontFamily:'var(--main-font)', fontSize:'2rem', marginBottom:'1.5rem'}}>We're a close-knit family passionate about sharing the natural goodness of our handcrafted honey products. From our family to yours, we invite you to savor the sweetness of nature's finest gift – pure, golden honey.</p>
                  <Button sx={{padding:'2rem', background: 'var(--dark-yellow)', color:'var(--black)', fontFamily:'var(--abrilFatface-font)', fontSize:'1.5rem'}}>Learn More About Us</Button>

          </div>
        </div>
      </Grid>
      <Grid item sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div  style={{ padding: '20px', background:'var(--black)', width:'95%'}}>
          <p style={{color: 'var(--yellow)', textAlign:'center', fontFamily:'var(--abrilFatface-font)', fontSize:'3rem'}}>Bees: Nature's tiny heroes, vital for pollination, essential for our food.</p>
        </div>
      </Grid>
      <Grid item>
        <div  style={{ padding: '20px' }}>
          Element 3
        </div>
      </Grid>
      <Grid item>
        <div style={{ padding: '20px' }}>
          Element 4
        </div>
      </Grid>
    </Grid>

  );
}



