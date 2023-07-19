
import * as React from 'react';
import '../index.css'; /* styles */
import  LogoBee from '../assets/img/logo.png'; /* logo */
/* mui components */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';

{/*const pages = ['Home', 'About', 'Shop', 'Contact'];*/}

const  Navbar= ({pages})=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static"  sx={{backgroundColor: 'var(--dark-brown)', borderBottom: '4px solid var(--brown)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
           <NavLink to="/home"><IconButton sx={{ display: { xs: 'none', md: 'flex' }}}><img src={LogoBee} height="70" /></IconButton></NavLink> 


{/*  hamburger-menu  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="var(--light-yellow)"
            >
              <MenuIcon sx= {{color:"var(--light-yellow)", fontSize: '2rem'}} />
            </IconButton>
            {/*  hamburger-menu content */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <NavLink to={`/${page.toLowerCase()}`}> <Typography sx={{textAlign:"center", fontFamily:"var(--main-font)", fontWeight:'900'}} >{page}</Typography></NavLink>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
         {/*  hamburger-menu  */}

  <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr:6, flexGrow: 6, }}><img src={LogoBee} height="70" /></IconButton>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: 'var(--light-yellow)', display: 'block', fontFamily:"var(--main-font)", fontWeight:'700' }}
              >
                <NavLink to={`/${page.toLowerCase()}`}><Typography sx={{color: 'var(--light-yellow)', fontFamily:"var(--main-font)", fontWeight:'900'}} >{page}</Typography> </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip >
            <IconButton>
                <ShoppingBasketIcon sx= {{color:"var(--light-yellow)", fontSize: '2rem'}}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
