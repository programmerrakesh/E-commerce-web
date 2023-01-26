import React from "react";
import { FaBolt } from "react-icons/fa";
import FlashCard from "./FlashCards";

const FlashDeals =({productItems, addToCart}) => {
    return(
        <>
        <section className="flash background">
             <div className="container-flash">
                <div className="heading f_flex">
                  <i><FaBolt className="fa-bolt"/></i>
                  <h1>Flash Deals</h1>
                </div>
        
                <FlashCard productItems={productItems}/>
             </div>
        </section>
        </>
    )
}
export default FlashDeals;