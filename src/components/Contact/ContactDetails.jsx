import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
  useMediaQuery,
  Grid,

} from '@mui/material';

export default function ContactDetails() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const cardsData = [
    { id: 1, title: 'Work Together', content: 'Are you interested in collaborating with Doe Family Honey? Whether you are a local beekeeper, a distributor looking for unique honey products, or an artisan interested in partnering with us, we would love to explore opportunities to work together. Feel free to contact us with your ideas and proposals.', imageUrl:'src/assets/img/contactImgs/workTogether.jpg' },
    { id: 2, title: 'Customer Care', content: 'At Doe Family Honey, our customers are at the heart of everything we do. We value your feedback and strive to provide the best possible experience. If you have any suggestions, concerns, or compliments, please don not hesitate to share them with us.', imageUrl:'src/assets/img/contactImgs/customCare.jpg' },
    { id: 3, title: 'Visit Us', content: 'We extend a warm invitation to everyone, including schoolchildren and small groups, to come and experience the magic of our honey farm in Lehtola. If you are planning an educational field trip or looking for a unique experience for your group book your visit in advance, and let us create unforgettable memories together.', imageUrl:'src/assets/img/contactImgs/visitUs.jpg' },
  ];


  return (
<div style={{ background: 'var(--light-yellow)' }}>
     <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
        <h2 style={{textAlign:'center', lineHeight:'50px', marginTop:'25px', fontFamily:'var(--main-font)', letterSpacing:'2px'}}>Contact Us<br/>We love hearing from our customers. </h2>
         
      </div>
   <Grid container spacing={4} sx={{marginTop:'0', padding:'20px'}} >
    
      {cardsData.map((card) => (
        <Grid key={card.id} item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow:'var(--black) 0px 6px 8px'}}>
            <CardActionArea>
                   <CardMedia
                component="img"
                height="140"
                image={card.imageUrl}
                alt={card.title}
              />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2">{card.content}</Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    
    </Grid>
      <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
        <h2 style={{marginTop:'25px', marginBottom:'25px', textAlign:'center', lineHeight:'50px', fontFamily:'var(--main-font)', letterSpacing:'2px'}}>Stay connected with us on social media!<br/>Follow our beekeeping journey, get updates on new products, and join our growing community.</h2>
      </div>
    </div>
  );
}
