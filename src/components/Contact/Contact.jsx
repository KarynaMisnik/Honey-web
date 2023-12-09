import * as React from "react";
import { NavLink } from "react-router-dom";
/* List MUI */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
/* Icons MUI */
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
/* Other MUI imports */
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

/* Text */
const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "var(--white)",
  marginBottom: "8px",
  fontFamily: "var(--main-font)",
  fontWeight: "var(--bolder)",
  letterSpacing: "1px",
}));

/* Underline */
const StyledDivider = styled(Divider)(({ theme }) => ({
  height: "2px",
  width: "50px",
  backgroundColor: "yellow",
  margin: "6px 0 6px 0",
}));

/* Array of social media icons */
const icons = [
  <a href="https://twitter.com">
    <TwitterIcon
      sx={{ color: "var(--yellow)", fontSize: { xs: "2rem", lg: "2.5rem" } }}
    />
  </a>,
  <a href="https://youtube.com">
    <YouTubeIcon
      sx={{ color: "var(--yellow)", fontSize: { xs: "2rem", lg: "2.5rem" } }}
    />
  </a>,
  <a href="https://linkedin.com">
    <LinkedInIcon
      sx={{ color: "var(--yellow)", fontSize: { xs: "2rem", lg: "2.5rem" } }}
    />
  </a>,
  <a href="https://instagram.com">
    <InstagramIcon
      sx={{ color: "var(--yellow)", fontSize: { xs: "2rem", lg: "2.5rem" } }}
    />
  </a>,
  <a href="https://facebook.com">
    <FacebookIcon
      sx={{ color: "var(--yellow)", fontSize: { xs: "2rem", lg: "2.5rem" } }}
    />
  </a>,
];

/* Array of contact icons */
const contactInfo = [
  {
    icon: <LocationOnIcon />,
    text: "1 Tie, Lehtola Finland 00000",
  },
  {
    icon: <PhoneIcon />,
    text: "+358-123-456-789",
  },
  {
    icon: <EmailIcon />,
    text: "beehoney@email.com",
  },
  {
    icon: <WatchLaterIcon />,
    text: "Mon - Fri, 9-AM - 6PM",
  },
];

const listItemTextStyle = {
  fontWeight: "var(--bolder)",
  fontFamily: "var(--main-font)",
};

/* Submit button */
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "var(--yellow)",
  borderRadius: "5px",
  color: "var(--black)",
  fontWeight: "var(--boldest)",
  ":hover": {
    backgroundColor: "var(--yellow)",
  },
}));

/* Message form */
const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  backgroundColor: "var(--light-yellow)",
  borderRadius: "5px",
}));

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 2,
        m: 1,
        marginLeft: "1rem",

        fontSize: "0.875rem",
        fontWeight: "var(--bolder)",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Contact() {
  return (
    <div
      style={{
        maxWidth: "100%",
        background: "var( --black)",
        color: "var(--white)",
        borderTop: "4px solid var(--gray)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          justifyContent: "center",

          "@media (max-width: 960px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        <Item>
          <NavLink to="/about">
            <StyledTypography>About Us </StyledTypography>
          </NavLink>
          <StyledDivider></StyledDivider>
          <StyledTypography sx={{ fontWeight: "var(--bold)" }}>
            We are a family-owned business dedicated to producing high-quality
            honey and honey-related products. We organize educational events at
            our cozy farm where you can learn about hardworking creatures, their
            importance, and how you can play your part in saving them.
          </StyledTypography>
        </Item>

        <Item>
          <NavLink to="/home">
            <StyledTypography>Honey&Products</StyledTypography>
          </NavLink>
          <StyledDivider></StyledDivider>

          <List>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{ color: "var(--yellow)" }} />
              </ListItemIcon>
              <NavLink to="/home">
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={listItemTextStyle}
                />
              </NavLink>
            </ListItem>

            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{ color: "var(--yellow)" }} />
              </ListItemIcon>
              <NavLink to="/about">
                <ListItemText
                  primary="About"
                  primaryTypographyProps={listItemTextStyle}
                />
              </NavLink>
            </ListItem>

            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{ color: "var(--yellow)" }} />
              </ListItemIcon>
              <NavLink to="/shop">
                <ListItemText
                  primary="Shop"
                  primaryTypographyProps={listItemTextStyle}
                />
              </NavLink>
            </ListItem>

            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{ color: "var(--yellow)" }} />
              </ListItemIcon>
              <NavLink to="contact">
                {" "}
                <ListItemText
                  primary="Contact"
                  primaryTypographyProps={listItemTextStyle}
                />
              </NavLink>
            </ListItem>
          </List>
        </Item>

        <Item>
          <StyledTypography>Get In Touch </StyledTypography>
          <StyledDivider></StyledDivider>

          {/* Contact icons and info */}
          <List>
            {contactInfo.map((item, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                <ListItemIcon sx={{ color: "var(--yellow)" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={listItemTextStyle}
                />
              </ListItem>
            ))}
          </List>
        </Item>

        <Item>
          <div>
            {/* social icons */}
            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                color: "var(--yellow)",
              }}
            >
              {icons.map((icon, index) => (
                <ListItem key={index} sx={{ cursor: "pointer" }}>
                  {icon}
                </ListItem>
              ))}
            </List>
          </div>

          <Grid container spacing={2} sx={{ paddingTop: "1.5rem" }}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                label="Your name"
                name="name"
                autoComplete="name"
                InputLabelProps={{ shrink: false }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                required
                fullWidth
                type="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                InputLabelProps={{ shrink: false }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <CustomTextField
                required
                fullWidth
                multiline
                rows={4}
                label="Message..."
                name="message"
                InputLabelProps={{ shrink: false }}
              />
            </Grid>

            <Grid item xs={12}>
              <StyledButton type="submit" variant="contained">
                Submit
              </StyledButton>
            </Grid>
          </Grid>
        </Item>
      </Box>

      <div
        className="copyright"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StyledTypography>
          &copy; Honey&Products {new Date().getFullYear()}
        </StyledTypography>
      </div>
    </div>
  );
}
