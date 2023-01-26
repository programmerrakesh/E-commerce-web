import React from "react";
import { FaSearch, FaWindows } from "react-icons/fa";
import R from '../assets/image/brisk.png';
import { Link } from "react-router-dom";
import {FaUser, FaShoppingBag} from 'react-icons/fa';
const Search =() => {
 
  window.addEventListener("scroll", function(){
    const search = this.document.querySelector(".search")
    search.classList.toggle("active", this.window.scrollY > 100)
  })

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={R} alt="ok"/>
          </div>
           
          <div className="search-box f_flex">
            <i><FaSearch className="icon-circle"/></i>
            <input type='text' placeholder="Search and hit enter...."/>
            <span>All Category</span>
            </div>

            <div className="icon f_flex width">
              <i><FaUser/></i>
              <div className="cart">
              <Link to='/cart'>
                 <i><FaShoppingBag/></i>
                 <span>0</span>
              </Link>
              </div>
            </div>


            <div>

            </div>
        </div>
      </section>
    </>
  );
}

export default Search;