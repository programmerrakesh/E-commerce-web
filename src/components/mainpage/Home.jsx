import React from "react";
import './Home.css';
import Categories from "./Categories";
import Slider from "./slider";
const Home = () =>{
    return(
        <>
        
        <section className="home">
          <div className="home-div">
        
            <Categories/>
            <Slider/>
         
          </div>
        </section>
        </>

    );
}

export default Home;