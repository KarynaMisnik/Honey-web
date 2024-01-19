import * as React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import "./shop-section.css";

export default function ShopSection({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <MdArrowBackIosNew onClick={prevSlide} className="arrow arrow-left" />
        {data.map((item, id) => {
          return (
            <>
              <img
                src={process.env.PUBLIC_URL + "/" + item.src}
                alt={item.alt}
                key={id}
                className={slide === id ? "slide" : "slide slide-hidden"}
              />
              <div className="bg" key={item.id}></div>
            </>
          );
        })}
        <MdArrowForwardIos onClick={nextSlide} className="arrow arrow-right" />
        <span className="indicators">
          {data.map((_, id) => {
            return (
              <button
                key={id}
                className={
                  slide === id ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(id)}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
}
