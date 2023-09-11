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


function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Shuffle the productData array and take the first three random items
const shuffledProductData = shuffleArray(productData);

export default function Testimonials(){
    return(
        <>
       <h1 style={{textAlign:'center', padding:'1rem 0', fontFamily:'var(--main-font)', fontWeight:'bolder'}}>
        What our customers say</h1>
<div className='card-container'  style={{display:'flex', flexDirection: 'row', justifyContent:'space-around', alignItems:'center', }}>

{shuffledProductData.slice(0, 3).map((cardItem) => (


<div key={cardItem.id} className='card-content'  style={{display:'flex', flexDirection:'column', width:'400px', height:'500px', padding: '1.5em', background:'green'}} >
   <img src={cardItem.reviewerImg} style={{borderRadius:'50%', border:'2px solid var(--dark-yellow)', width: '150px', height:'150px'}}></img>
 <Rating name="read-only" value={cardItem.value} readOnly />
<h3>{cardItem.title}</h3>
<p>{cardItem.review}</p>
<h4>{cardItem.dateReview}</h4>
</div>



))}
</div>
        </>
    )
}

