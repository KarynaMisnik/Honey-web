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
   <div className='grid-container__aboutSection' container direction="column" >
   
        <div  className='imgText-wrapper' style={{ display:'flex', alignItems: 'center', justifyContent:'center', padding:'2em'}}>
          <div className='img-container' style={{flex:'1',  maxWidth: '80%', height:'auto'}}>
          <img src={Beekeepers} style={{  boxShadow: '-35px -35px 0px -3px #000000', borderRadius:'20px',  }}/>
          </div>

          <div className='welcoming-text' style={{maxWidth: '80%', height:'auto'}}>
<p style={{fontFamily:'var(--abrilFatface-font)', fontSize:'3rem', marginBottom:'2rem'}}>Welcome to the sweet world of the Doe Family Honey!</p>
<p style={{fontFamily:'var(--main-font)', fontSize:'2rem', marginBottom:'1.5rem', textAlign:'justify', marginBottom:'5rem'}}>We're a close-knit family passionate about sharing the natural goodness of our handcrafted honey products. From our family to yours, we invite you to savor the sweetness of nature's finest gift – pure, golden honey.</p>
                  <Button className='button learnMore' sx={{padding:'2rem', background: 'var(--dark-yellow)', color:'var(--black)', fontFamily:'var(--abrilFatface-font)', fontSize:'1.5rem', textTransform:'none', '&:hover': {background: 'var(--dark-yellow)',
          
                }}}>Learn More About Us</Button>

          </div>
        </div>
      
      <div sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div  className='motto-container'>
          <p className='motto-text'>
            Bees: Nature's tiny heroes, vital for pollination, essential for our food.</p>
        </div>
      </div>
      
      
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
  
     
        <div className='shopping-section_textContainer'>
          <p >Explore our selection of honey and honey-based delights</p>
          <h1>GO SHOPPING</h1>
        </div>
      
    </div>

  );
}



