import * as React from "react";
import { NavLink } from "react-router-dom";
import LogoBee from "../../assets/img/logo.png"; /* logo */
/* mui components */
import AppBar from "@mui/material/AppBar";
/* MUI box & container */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
/* Menu from MUI */
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
/* MUI buttons */
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
/* Other MUI components */
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const Navbar = ({ pages, size }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "var(--black)",
        borderBottom: "4px solid var(--gray)",
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <NavLink to="/home">
            <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
              <img src={LogoBee} height="70" />
            </IconButton>
          </NavLink>

          {/*  hamburger-menu  */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="var(--light-yellow)"
            >
              <MenuIcon sx={{ color: "var(--yellow)", fontSize: "2rem" }} />
            </IconButton>
            {/*  hamburger-menu content */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink to={`/${page.toLowerCase()}`}>
                    {" "}
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontFamily: "var(--main-font)",
                        fontWeight: "var(--boldest)",
                        color: "var(--black)",
                        backgroundColor: "var(--yellow)",
                        padding: ".5rem",
                      }}
                    >
                      {page}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*  hamburger-menu  */}

          <IconButton
            sx={{
              display: { xs: "flex", flexDirection: "center", md: "none" },
              flexGrow: 6,
            }}
          >
            <img src={LogoBee} height="70" />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "var(--light-yellow)",
                  display: "block",
                  fontWeight: "var(--bolder)",
                }}
              >
                <NavLink to={`/${page.toLowerCase()}`}>
                  <Typography
                    sx={{
                      color: "var(--yellow)",
                      fontFamily: "var(--main-font)",
                      fontWeight: "var(--boldest)",
                    }}
                  >
                    {page}
                  </Typography>{" "}
                </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton>
                <NavLink to="/cart">
                  <Badge badgeContent={size} color="primary">
                    <ShoppingCartIcon
                      sx={{ color: "var(--yellow)", fontSize: "2rem" }}
                    />
                  </Badge>
                </NavLink>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
