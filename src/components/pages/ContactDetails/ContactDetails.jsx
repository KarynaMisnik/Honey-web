import * as React from "react";
/* MUI Card */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
/* Other MUI components */
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useMediaQuery, Grid } from "@mui/material";

export default function ContactDetails() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const cardsData = [
    {
      id: 1,
      title: "Work Together",
      content:
        "Are you interested in collaborating with our family Honey Business? Whether you are a local beekeeper, a distributor looking for unique honey products, or an artisan interested in partnering with us, we would love to explore opportunities to work together. Feel free to contact us with your ideas and proposals.",
      imageUrl: "/Honey-web/img/contactImgs/workTogether.jpg",
    },
    {
      id: 2,
      title: "Customer Care",
      content:
        "At Honey&Products, our customers are at the heart of everything we do. We value your feedback and strive to provide the best possible experience. If you have any suggestions, concerns, or compliments, please do not hesitate to share them with us.",
      imageUrl: "/img/contactImgs/customCare.jpg",
    },
    {
      id: 3,
      title: "Visit Us",
      content:
        "We extend a warm invitation to everyone, including schoolchildren and small groups of visitors, to come and experience the magic of our honey farm in Lehtola. If you are planning an educational field trip or looking for a unique experience for your group, book your visit in advance, and let us create unforgettable memories together.",
      imageUrl: "/img/contactImgs/visitUs.jpg",
    },
  ];

  return (
    <div style={{ paddingTop: "6rem" }}>
      <div className="contact-details-text contact-details-textOnTop">
        <h2>Contact Us</h2>
        <h2>We love hearing from our customers.</h2>
      </div>
      <Grid container spacing={4} sx={{ marginTop: "0", padding: "1rem" }}>
        {cardsData.map((card) => (
          <Grid key={card.id} item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "var(--card-shadow)",
              }}
            >
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
      <div className="contact-details-text contact-details-textOnBottom">
        <h2>Stay connected with us on social media!</h2>
        <h2>
          Follow our beekeeping journey, get updates on new products, and join
          our growing community.
        </h2>
      </div>
    </div>
  );
}
