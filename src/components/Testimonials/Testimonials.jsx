import * as React from 'react';
import productData from '../Shop/productData.json'; 
import Rating from '@mui/material/Rating';


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
        <div className='card-wrapper' style={{display:'flex', flexDirection:'row',  justifyContent:'space-around', alignItems:'center', flexWrap: 'wrap' }}>
{shuffledProductData.slice(0, 3 ).map((cardItem) => (
<div key={cardItem.id} className='card-container'  
style={{ padding: '1.5em',
        flex: 1,
        maxWidth: '400px',
        margin: '1em'}}>

{/* it causes a bug, remove and take first 3 reviews or... */}



<div  className='card-content'  style={{display:'flex', flexDirection:'column', width: '100%',
          height: '500px',
          padding: '1.5em',
          borderRadius: '15px',
          background: 'var(--white)',
          boxShadow: '-22px -22px 0px 0px var(--black)', }} >
   <img src={cardItem.reviewerImg} style={{borderRadius:'50%', border:'2px solid var(--dark-yellow)', width: '150px', height:'150px'}}/>
<h2>{cardItem.reviewer}</h2>
 <Rating name="read-only" value={cardItem.value} readOnly />
<h3>{cardItem.title}</h3>
<p>{cardItem.review}</p>
<h4>{cardItem.dateReview}</h4>
</div>
</div>
))}
</div>


        </>
    )
}

//add more photos of reviewers 