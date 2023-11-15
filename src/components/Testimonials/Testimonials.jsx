import * as React from "react";
/* data import */
import productData from "../pages/productData.json";
/* MUI import */
import Rating from "@mui/material/Rating";
/* CSS */
import "./testimonials.css";

/* Shuffles reviews, new reviews appear every time the page refreshed */
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Shuffle the productData array and take the first three random reviews
const shuffledProductData = shuffleArray(productData);

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <h1>What our customers say</h1>
      <div className="card-wrapper">
        {shuffledProductData.slice(0, 3).map((cardItem) => (
          <div key={cardItem.id} className="card-container">
            <div className="card-content">
              <div className="card-img-container">
                <img src={cardItem.reviewerImg} />
              </div>
              <h2>{cardItem.reviewer}</h2>
              <Rating name="read-only" value={cardItem.value} readOnly />
              <h3>{cardItem.title}</h3>
              <p>{cardItem.review}</p>
              <h4>{cardItem.dateReview}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
