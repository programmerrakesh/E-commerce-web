import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/FlashDeals/FlashDeals";

const Pages = ({productItems}) =>{
    return(
       <div>
        <Home/>
        <FlashDeals productItems={productItems}/>
  
       </div>
    );
    
}
export default Pages;