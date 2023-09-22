import * as React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HexagonIcon from '@mui/icons-material/Hexagon';
import { styled } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router-dom';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
       
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

const CombinedIcon = styled('div')({
    position: 'relative',
  display: 'inline-block',
  width: '30px',
  height: '30px',
   '@media (min-width: 600px)': {
            width: '50px',
  height: '50px',},
  '@media (min-width: 960px)': {
            margin: '22px'},
});


const HexagonWrapper = styled(HexagonIcon)({
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  fontSize: '60px', // Adjust the font size to resize the Hexagon icon
  color: 'var(--yellow)',
     '@media (min-width: 600px)': {
             fontSize: '100px'},
});



export default function Contact() {
  return (
    <div style={{ width: '100%', background: 'var( --black)', color:'var(--white)', borderTop:'4px solid var(--gray)'}}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',  '@media (max-width: 960px)': {
          gridTemplateColumns: '1fr',
        }, }}>


        <Item><NavLink to='/about'><Typography sx={{color:'var(--white)', marginBottom:'8px', fontFamily:'var(--main-font)',fontWeight:'700', letterSpacing:'1px'}}>About Us </Typography>  </NavLink>
        <Divider sx={{height:'2px', width: '50px', backgroundColor: 'yellow', margin:'6px 0 6px 0' }}></Divider>
        <Typography sx={{color:'var(--white)', marginBottom:'8px', fontFamily:'var(--main-font)'}}>
        Lorem ipsum dolor sit amet, 
consectetur adipiscing elit.Quisque laoreet, velit at pretium feugiat, erat metus pretium nunc, eget ornare 
lorem neque eget velit.
          </Typography>

          <Grid container spacing={2}>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            fullWidth
            label="Your Name"
            name="name"
            autoComplete="name"
            sx={{ backgroundColor:'var(--light-yellow)', borderRadius:'5px' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            type="email"
            label="E-mail"
            name="email"
            autoComplete="email"
             sx={{ backgroundColor:'var(--light-yellow)', borderRadius:'5px' }}
            
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Message..."
            name="message"
             sx={{ backgroundColor:'var(--light-yellow)', borderRadius:'5px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained"  sx={{ backgroundColor:'var(--yellow)', borderRadius:'5px', color:'var(--dark-brown)', fontWeight:'900', ":hover": {
      bgcolor: "var(--yellow)"} }}>
            Submit
          </Button>
        </Grid>
      </Grid>
        
        </Item>
      
      
        <Item><NavLink to='/home'><Typography sx={{color:'var(--white)', marginBottom:'8px', fontFamily:'var(--main-font)',fontWeight:'700', letterSpacing:'1px'}}>Honey&Products</Typography></NavLink>
        <Divider sx={{height:'2px', width: '50px', backgroundColor: 'yellow', margin:'6px 0 6px 0' }}></Divider>

       
         <List >
         <ListItem sx={{ paddingLeft: 0 }}>
               <ListItemIcon>
                 <ArrowForwardIosIcon sx={{color:'var(--yellow)'}}/>
               </ListItemIcon>
               <NavLink to='/home'><ListItemText  primary="Home"  primaryTypographyProps={{
      fontWeight: '700', fontFamily:'var(--main-font)'
    }}           
               /></NavLink>
             </ListItem>

             <ListItem sx={{ paddingLeft: 0 }}>
               <ListItemIcon>
                 <ArrowForwardIosIcon sx={{color:'var(--yellow)'}}/>
               </ListItemIcon>
               <NavLink to='/about'><ListItemText  primary="About" primaryTypographyProps={{
      fontWeight: '700', fontFamily:'var(--main-font)'
    }}                     
               /></NavLink>
             </ListItem>

             <ListItem sx={{ paddingLeft: 0 }}>
               <ListItemIcon>
                 <ArrowForwardIosIcon sx={{color:'var(--yellow)'}}/>
               </ListItemIcon>
               <NavLink to='/shop'><ListItemText primary="Shop" primaryTypographyProps={{
      fontWeight: '700', fontFamily:'var(--main-font)'
    }}                            
               /></NavLink>
             </ListItem>

             <ListItem sx={{ paddingLeft: 0 }}>
               <ListItemIcon>
                 <ArrowForwardIosIcon sx={{color:'var(--yellow)'}}/>
               </ListItemIcon>
              <NavLink to='contact'> <ListItemText primary="Contact" primaryTypographyProps={{
      fontWeight: '700', fontFamily:'var(--main-font)'
    }}                         
               /></NavLink>
             </ListItem>
         </List>
       
 

        </Item>


        <Item><Typography sx={{color:'var(--white)', marginBottom:'8px', fontFamily:'var(--main-font)',fontWeight:'700', letterSpacing:'1px'}}>Get In Touch </Typography>
        <Divider sx={{height:'2px', width: '50px', backgroundColor: 'yellow', margin:'6px 0 6px 0' }}></Divider>

        <List >
         <ListItem sx={{ paddingLeft: 0 }}>
               <ListItemIcon>
                 <LocationOnIcon sx={{color:'var(--yellow)'}}/>
               </ListItemIcon>
               <ListItemText primary="Our Address" primaryTypographyProps={{
      fontWeight: '700', fontFamily:'var(--main-font)'
    }}                           
               />
             </ListItem>

             <ListItem sx={{ paddingLeft: 0 }}>
               <ListItemIcon>
                 <PhoneIcon sx={{color:'var(--yellow)'}}/>
               </ListItemIcon>
               <ListItemText primary="+358-123-456-789" primaryTypographyProps={{
      fontWeight: '700', fontFamily:'var(--main-font)'
    }}                          
               />
             </ListItem>

             <ListItem sx={{ paddingLeft: 0 }}>
               <ListItemIcon>
                 <EmailIcon sx={{color:'var(--yellow)'}}/>
               </ListItemIcon>
               <ListItemText primary="beehoney@email.com" primaryTypographyProps={{
      fontWeight: '700', fontFamily:'var(--main-font)'
    }}                           
               />
             </ListItem>

             <ListItem sx={{ paddingLeft: 0 }}>
               <ListItemIcon>
                 <WatchLaterIcon sx={{color:'var(--yellow)'}}/>
               </ListItemIcon>
               <ListItemText primary="Mon - Fri, 9-AM - 6PM" primaryTypographyProps={{
      fontWeight: '700', fontFamily:'var(--main-font)'
    }}                         
               />
             </ListItem>
         </List>

        </Item>


        <Item>
            
<div>
        <List sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between','@media (min-width: 960px)': {
            flexDirection: 'column'}, }}>
         <ListItem>
               <CombinedIcon>
      <HexagonWrapper />
      <TwitterIcon sx={{position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2, color:'var(--brown)', fontSize:'30px',
  '@media (min-width: 600px)': {
             fontSize: '50px'},
  }}/>
    </CombinedIcon>
             </ListItem>

             <ListItem>
               <CombinedIcon>
      <HexagonWrapper />
      <YouTubeIcon sx={{position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2, color:'var(--brown)', fontSize:'30px',
    '@media (min-width: 600px)': {
             fontSize: '50px'},
  }}/>
    </CombinedIcon>
             </ListItem>

             <ListItem>
               <CombinedIcon>
      <HexagonWrapper />
      <LinkedInIcon sx={{position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2, color:'var(--brown)', fontSize:'30px',
    '@media (min-width: 600px)': {
             fontSize: '50px'},
  }}/>
    </CombinedIcon>
             </ListItem>

<ListItem>
               <CombinedIcon>
      <HexagonWrapper />
      <InstagramIcon sx={{position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2, color:'var(--brown)', fontSize:'30px',
    '@media (min-width: 600px)': {
             fontSize: '50px'},
  }}/>
    </CombinedIcon>
             </ListItem>

             <ListItem>
               <CombinedIcon>
      <HexagonWrapper />
      <FacebookIcon sx={{position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2, color:'var(--brown)', fontSize:'30px',
    '@media (min-width: 600px)': {
             fontSize: '50px'},
  }}/>
    </CombinedIcon>
             </ListItem>

         </List>

</div>
        </Item>
      </Box>
    </div>
  );
}


