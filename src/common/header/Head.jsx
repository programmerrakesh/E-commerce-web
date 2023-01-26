// import React from "react";
// import './Head.css';
import {FaPhone, FaPhoneAlt, FaMailBulk, FaMailchimp, FaVoicemail} from 'react-icons/fa';
const Head =() => {
    return(
<>
 <section className="head">
    <div className="container d_flex">
        <div className="left row">
           <i><FaPhoneAlt/></i>
           <label>+88012 3457 7894</label>
           <i><FaMailBulk/></i>
           <label>example@gmail.com</label>
        </div>
        <div className='right row RTex'>
           <label>Theme FAQ's</label>
           <label>Need Helps</label>
           <span>🛑</span>
           <label htmlFor=''>EN</label>
           <span>🛑</span>
           <label htmlFor=''>USA</label>
        </div>
    </div>
 </section>
</>

    );
}
export default Head;