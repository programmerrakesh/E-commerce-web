import React from "react";

import Sdata from "./Sdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlidCard =() =>{
 const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    autoplay:true,
    appendDots: (dots) => {
      return <ul style={{margin:"0px"}}>{dots}</ul>
    },
   
  };
return(

     <Slider {...settings}>
  
 
      {Sdata.map((value, index) =>{
        return(
          <div className="box top" key={index}>
            <div className="box-flex">
          <div className="left-slide">
            <h1>{value.title}</h1>
            <p>{value.desc}</p>
            <button className="btn-primary">Visit Collection</button>
          </div>
          <div className="right-slide"> 
             <img src={value.cover} alt='ok' />
          </div>
          </div>
          </div>
        )
      })}

    
        </Slider>
      
       
   
);
}

export default SlidCard;