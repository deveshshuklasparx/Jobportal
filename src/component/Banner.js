/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './Banner.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Card from "./Card/Card";
import bannerImg from "./../../src/assets/images/Capture.png"

const Banner = () => {
   
    
        return(
           <>
           <Header/>
              <section className="banner-wrapper">
                 <div className="container">
                    <div className="banner-section-wrappers">
                       <div className="left-section">
                          <h1>
                             We provide best recruitment services
                          </h1>
                          <p>
                             Prometeo Talent excels in connecting companies with exceptional tech and engineering professionals. Our HR and recruitment services include targeted recruiting, efficient staffing, and flexible outsourcing solutions. Partner with us to enhance your global workforce and drive business success.
                          </p>

                          <div className="hiring-wrapper">
                             <button className="hiring-btn">Start Hiring Today</button>
                          </div>
                       </div>
                       <div className="right-section">
                       <img src={bannerImg} alt="Company Logo" />
                       </div>
                    </div>
                 </div>
              </section>
              <Card/>

              <Footer/>
           </>
    )
}

export default Banner;