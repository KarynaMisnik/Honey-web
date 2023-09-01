import * as React from 'react';
import shopSectionData from './shopSectionData.json'
import {MdArrowBackIosNew,MdArrowForwardIos} from "react-icons/md"
import { useState } from 'react';



export default function ShopSection({data}) {

 const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };


  return (
    <div className='carousel-wrapper' style={{background:'red', display:'flex', justifyContent:'center', alignItems:'center'}}>
 <div className="carousel">
      <MdArrowBackIosNew onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, id) => {
        return (
          <>
          <img
            src={item.src}
            alt={item.alt}
            key={id}
            className={slide === id ? "slide" : "slide slide-hidden"
          }
          />
          <div className='bg' key={item.id} style={{background:'var(--black)', zIndex: '99999', position:'absolute', padding:'2rem', bottom:'0', width:'100%', borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px' }}></div></>
          
        );
      })}
      <MdArrowForwardIos
        onClick={nextSlide}
        className="arrow arrow-right"
      />
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

