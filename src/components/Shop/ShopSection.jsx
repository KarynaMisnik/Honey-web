import * as React from 'react';
import shopSectionData from './shopSectionData.json'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"


export default function ShopSection({data}) {
  return (
<div className='carousel-container'>
<div className='carousel'>
{data.map((item, id)=>{
  return <img className='img-slider' src={item.src} alt={item.alt} key={id} />
})}

</div>
<div className='arrow-container'>
  <div className='left-arrow'><BsArrowLeftCircleFill style={{color:"white"}}/></div>
  <div className='right-arrow'><BsArrowRightCircleFill style={{color:"white"}}/></div>
</div>
</div>
  );
}

