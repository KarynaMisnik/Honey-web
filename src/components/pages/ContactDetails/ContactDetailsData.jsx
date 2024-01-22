import React from "react";
import WorkTogether from "/img/contactImgs/workTogether.jpg";
import CustomerCare from "/img/contactImgs/customerCare.jpg";
import VisitUS from "/img/contactImgs/visitUs.jpg";

const ContactDetailsData = [
  {
    id: 1,
    title: "Work Together",
    content:
      "Are you interested in collaborating with our family Honey Business? Whether you are a local beekeeper, a distributor looking for unique honey products, or an artisan interested in partnering with us, we would love to explore opportunities to work together. Feel free to contact us with your ideas and proposals.",
    imageUrl: { WorkTogether },
  },
  {
    id: 2,
    title: "Customer Care",
    content:
      "At Honey&Products, our customers are at the heart of everything we do. We value your feedback and strive to provide the best possible experience. If you have any suggestions, concerns, or compliments, please do not hesitate to share them with us.",
    imageUrl: { CustomerCare },
  },
  {
    id: 3,
    title: "Visit Us",
    content:
      "We extend a warm invitation to everyone, including schoolchildren and small groups of visitors, to come and experience the magic of our honey farm in Lehtola. If you are planning an educational field trip or looking for a unique experience for your group, book your visit in advance, and let us create unforgettable memories together.",
    imageUrl: { VisitUS },
  },
];

export default ContactDetailsData;
