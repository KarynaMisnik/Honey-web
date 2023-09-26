import React from 'react';


export default function Error(){
  return (
   <div className='error-container' style={{display:'flex',justifyContent:'center',alignItems:'center', background: "var(--light-yellow)", maxWidth: "100%", height: "auto", position: 'relative'}}>
   <h1>Here must be smth</h1>
    <div className='text-container'>
<p><span>404</span><br/> Oh, bzzz. <br></br>You are totally lost.</p>
    </div>
    </div>
  );
};

