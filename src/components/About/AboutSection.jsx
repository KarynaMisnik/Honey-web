import * as React from 'react';
import { Button, Grid, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import HexagonIcon from '@mui/icons-material/Hexagon';

import Flower from '../../assets/img/aboutSection/flower.png';
import Hive from '../../assets/img/aboutSection/hive.png';
import HoneyJar from '../../assets/img/aboutSection/honey-jar.png';

import Beekeepers from '../../assets/img/aboutSection/beekeepers-family.jpg';


export default function AboutSection() {

  return (
   <Grid container direction="column" spacing={2} sx={{backgroundImage: 'linear-gradient(to bottom, #fbe386, #fce58c, #fde792, #fde897, #feea9d, #ffe7aa, #ffe6b8, #ffe5c5, #ffe7dc, #ffeef2, #fff7fe, #ffffff)'}}>
      <Grid item>
        <div  className='imgText-wrapper' style={{ display:'flex', alignItems: 'center'}}>
          <div className='img-container' style={{flex:'1', padding:'1rem ', padding:'2rem'}}>
          <img src={Beekeepers} style={{  boxShadow: '-35px -35px 0px -3px #000000', borderRadius:'20px',  maxWidth: '100%', height: 'auto'}}/>
          </div>

          <div className='welcoming-text' style={{flex:'1', display:'flex', flexDirection:'column', textAlign:'center', padding:'2rem'}}>
<p style={{fontFamily:'var(--abrilFatface-font)', fontSize:'3rem', marginBottom:'2rem'}}>Welcome to the sweet world of the Doe Family Honey!</p>
<p style={{fontFamily:'var(--main-font)', fontSize:'2rem', marginBottom:'1.5rem', textAlign:'justify', marginBottom:'5rem'}}>We're a close-knit family passionate about sharing the natural goodness of our handcrafted honey products. From our family to yours, we invite you to savor the sweetness of nature's finest gift – pure, golden honey.</p>
                  <Button sx={{padding:'2rem', background: 'var(--dark-yellow)', color:'var(--black)', fontFamily:'var(--abrilFatface-font)', fontSize:'1.5rem', textTransform:'none', '&:hover': {background: 'var(--dark-yellow)'}}}>Learn More About Us</Button>

          </div>
        </div>
      </Grid>
      <Grid item sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div  style={{ padding: '20px', background:'var(--black)', width:'95%'}}>
          <p style={{color: 'var(--yellow)', textAlign:'center', fontFamily:'var(--abrilFatface-font)', fontSize:'2.8rem'}}>Bees: Nature's tiny heroes, vital for pollination, essential for our food.</p>
        </div>
      </Grid>
      
       <div className="hex-container">

    <div className="hexagon">
      <div className="hexagon-inner">
        <img src={Flower} alt="Hexagon 1"/>
      </div>
    </div>

    <div className="hexagon">
      <div className="hexagon-inner">
        <img src={Hive} alt="Hexagon 2"/>
      </div>
    </div>

    <div className="hexagon">
      <div className="hexagon-inner">
        <img src={HoneyJar} alt="Hexagon 3"/>
      </div>
    </div>

  </div>
    
      <Grid item>
        <div  style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
          <p style={{fontFamily:'var(--abrilFatface-font)' , fontSize:'2rem'}}>Explore our selection of honey and honey-based delights</p>
          <h1 style={{fontFamily:'var(--abrilFatface-font)', fontSize:'5rem', paddingBottom:'3rem'}}>GO SHOPPING</h1>
        </div>
      </Grid>
    </Grid>

  );
}



