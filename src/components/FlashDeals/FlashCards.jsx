import React from "react";
import { useState } from "react";
import {FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaPlus, FaStar } from "react-icons/fa";
import Slider from "react-slick";

const NextArrow = (props) => {
  const {onClick} = props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i><FaLongArrowAltRight className="right-one"/></i>
      </button>
    </div>
  )

}

const PrevArrow = (props) =>{
  const {onClick} = props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i><FaLongArrowAltLeft className="left-one"/></i>
      </button>

    </div>
  )
}


const FlashCard =({productItems}) => {
   const [count, setCount] = useState(0)
   const increment = () =>{
    setCount(count + 1)
   }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow:<PrevArrow/>,
  };

    return(
        <>
   
          <Slider {...settings}>
         
        {productItems.map((productItems) =>{
                 return(

         <div className="flashcard-box">
             <div className="product mtop ">
               <div className="img">
                <span className="discount">{productItems.discount}% OFF</span>
               <img src={productItems.cover} alt="ok"/>
               <div className="product-like">
                   <label>{count}</label> <br/>
                   <i><FaHeart onClick={increment}/></i>
               </div>
               </div>
               <div className="product-details">
               <h3>{productItems.name}</h3>
               <div className="rate">
                     <i><FaStar/></i>
                     <i><FaStar/></i>
                     <i><FaStar/></i>
                     <i><FaStar/></i>
                     <i><FaStar/></i>

               </div>
               <div className="price">
                 <h4>{productItems.price}.00</h4>
                 <button >
                    <i><FaPlus/></i>
                 </button>
               </div>

               </div>
             </div>
        </div>

                 )

        })}
        </Slider>
      
        </>
      
    )
}
export default FlashCard;