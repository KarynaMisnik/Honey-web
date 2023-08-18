import { Divider } from "@mui/material";

const Hero = () =>{
    return(
<div className='banner-wrapper'>
    <div className='bg-text'>
     <p> HONEY & <br/>HONEY PRODUCTS
</p>
    <Divider sx={{margin:'0 1rem', maxWidth:'100%', height: '3px',  backgroundColor: 'var(--light-gray)' }}></Divider>

<p className="hero-text">Get fresh honey and organic honey products with just a one click</p>
    </div>
</div>
       
    )
}

export default Hero; 

