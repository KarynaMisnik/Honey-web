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
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router-dom';

const icons = [
  <TwitterIcon />,
  <YouTubeIcon />,
  <LinkedInIcon />,
  <InstagramIcon />,
  <FacebookIcon />
];

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ color: 'var(--yellow)' }} />,
    text: 'Our Address',
  },
  {
    icon: <PhoneIcon sx={{ color: 'var(--yellow)' }} />,
    text: '+358-123-456-789',
  },
  {
    icon: <EmailIcon sx={{ color: 'var(--yellow)' }} />,
    text: 'beehoney@email.com',
  },
  {
    icon: <WatchLaterIcon sx={{ color: 'var(--yellow)' }} />,
    text: 'Mon - Fri, 9-AM - 6PM',
  },
];

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


export default function Contact() {
  return (
    <div style={{ maxWidth: '100%', background: 'var( --black)', color:'var(--white)', borderTop:'4px solid var(--gray)'}}>
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

{/* Contact icons and info */}
       <List>
  {contactInfo.map((item, index) => (
    <ListItem key={index} sx={{ paddingLeft: 0 }}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText
        primary={item.text}
        primaryTypographyProps={{
          fontWeight: '700',
          fontFamily: 'var(--main-font)',
        }}
      />
    </ListItem>
  ))}
</List>

        </Item>


        <Item>
            
<div>
  {/* social icons */}
        <List sx={{ display: 'flex', flexDirection: 'row', color: 'var(--yellow)' }}>
  {icons.map((icon, index) => (
    <ListItem key={index}>{icon}</ListItem>
  ))}
</List>

            <Grid container spacing={2} sx={{paddingTop:'1.5rem'}}>
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

</div>
        </Item>
      </Box>
    </div>
  );
}


