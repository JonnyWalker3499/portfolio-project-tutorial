import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.js";

const Header = () => {

  return (
     <div className="header-wraper">
        <div className="main-info">
           <h1>web development and website promotions</h1>
           <span className="typewriter-pro">
               <Typewriter
                  words={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1500}
               />
           </span>
           <a href="#" className="btn-main-offer">contact me</a>
        </div>
    </div>
  )
}

export default Header