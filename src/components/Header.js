import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.js";
import { Link } from "react-scroll/modules";

const Header = () => {

  return (
     <div id="home" className="header-wraper">
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
           <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>
        </div>
    </div>
  )
}

export default Header