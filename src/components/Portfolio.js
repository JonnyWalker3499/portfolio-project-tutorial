import React from "react";
import netflix from "../images/netflix.png";
import amazone from "../images/amazon.png";
import udemy from "../images/udemy.png";
import odoo from "../images/odoo.png";
import quickbook from "../images/quickbook.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

   // Netflix
   const openPopupboxNetflix = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project..." />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
         </>
         )
         PopupboxManager.open({ content })
   }
   
   const popupboxConfigNetflix = {
      titleBar: {
         enable: true,
         text: "Netflix clone project."
      },
      fadeIn: true,
      fadeInSpeed: 500
   }

   // Amazon
   const openPopupboxAmazon = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={amazone} alt="Amazon Clone Project..." />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
         </>
         )
         PopupboxManager.open({ content })
   }
   
   const popupboxConfigAmazon = {
      titleBar: {
         enable: true,
         text: "Amazon clone project."
      },
      fadeIn: true,
      fadeInSpeed: 500
   }

   // Udemy
   const openPopupboxUdemy = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={udemy} alt="Udemy Clone Project..." />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
         </>
         )
         PopupboxManager.open({ content })
   }
   
   const popupboxConfigUdemy = {
      titleBar: {
         enable: true,
         text: "Udemy clone project."
      },
      fadeIn: true,
      fadeInSpeed: 500
   }

   // Odoo
   const openPopupboxOdoo = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={odoo} alt="Odoo Clone Project..." />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://city-guide-app-project.herokuapp.com/", "_blank")}>https://city-guide-app-project.herokuapp.com/</a>
            <br />
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
         </>
         )
         PopupboxManager.open({ content })
   }
   
   const popupboxConfigOdoo = {
      titleBar: {
         enable: true,
         text: "Odoo clone project."
      },
      fadeIn: true,
      fadeInSpeed: 500
   }

   // Quickbook
   const openPopupboxQuickbook = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={quickbook} alt="Quickbook Clone Project..." />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
            <br />
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>"https://github.com/8020Coding/netflix-project</a>
         </>
         )
         PopupboxManager.open({ content })
   }
   
   const popupboxConfigQuickbook = {
      titleBar: {
         enable: true,
         text: "Quickbook clone project."
      },
      fadeIn: true,
      fadeInSpeed: 500
   }

      
  return (
     <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
           <h1 className="text-uppercase text-center py-5">portfolio</h1>
           <div className="image-box-wrapper row justify-content-center">
               <div className="portfolio-image-box col-lg-2 col-md-6 col-sm-12" onClick={openPopupboxNetflix}>
                  <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
                 <div className="overflow"></div>
                 <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
               {/* - */}
              <div className="portfolio-image-box col-lg-2 col-md-6 col-sm-12" onClick={openPopupboxAmazon}>
                  <img className="portfolio-image" src={amazone} alt="Amazon Clone Project..." />
                 <div className="overflow"></div>
                 <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
               {/* - */}
               <div className="portfolio-image-box col-lg-2 col-md-6 col-sm-12" onClick={openPopupboxUdemy}>
                  <img className="portfolio-image" src={udemy} alt="udemy Clone Project..." />
                 <div className="overflow"></div>
                 <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
               {/* - */}
               <div className="portfolio-image-box col-lg-2 col-md-6 col-sm-12" onClick={openPopupboxOdoo}>
                  <img className="portfolio-image" src={odoo} alt="odoo Clone Project..." />
                 <div className="overflow"></div>
                 <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                  </div>
               {/* - */}
               <div className="portfolio-image-box col-lg-2 col-md-6 col-sm-12" onClick={openPopupboxQuickbook}>
                  <img className="portfolio-image" src={quickbook} alt="quickbook Clone Project..." />
                 <div className="overflow"></div>
                 <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
            </div>
        </div>
        <PopupboxContainer {...popupboxConfigNetflix} />
        <PopupboxContainer {...popupboxConfigAmazon} />
        <PopupboxContainer {...popupboxConfigUdemy} />
        <PopupboxContainer {...popupboxConfigOdoo} />
        <PopupboxContainer {...popupboxConfigQuickbook} />

    </div>
  )
}

export default Portfolio