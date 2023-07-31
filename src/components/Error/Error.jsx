import React from 'react';
import './error.css'
import BeeError from '../../assets/img/bee-error.png';


export default function Error(){
  return (
   <div className='error-container' style={{display:'flex',justifyContent:'center',alignItems:'center', background: "var(--light-yellow)", maxWidth: "100%", height: "auto", position: 'relative'}}>
    <img className='workingBee' src={BeeError} alt="A cute bee with a wrench"></img>
    <div className='text-container'>
<p><span>404</span><br/> Oh, bzzz. <br></br>You are totally lost.</p>
    </div>
    </div>
  );
};

