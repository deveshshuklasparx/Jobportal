import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-parts container">
        <div className="common-footer first-footer">
          <a href="" className="desk-logo">
            <img className="light-logo" src="assets/images/logo-white.svg" alt="Scavenger Logo" />
          </a>

          <h5 className="">Any time. Any where.</h5>
          <div className="copy-wrapper">
            <span>© Copyright 2020. All Rights Reserved.</span>
          </div>
        </div>
        <div className="common-footer second-footer">
          <h5 className="">About us</h5>
          <ul>
            <li><a href="#">Company Overview</a></li>
            <li><a href="#"> Job Opportunities</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="common-footer third-footer">
          <h5 className="">Solutions</h5>
          <ul>
            <li><a href="#">IT Recruitment in LATAM</a></li>
            <li><a href="#">IT Recruitment in Europe</a></li>
          </ul>
        </div>
        <div className="common-footer fourth-footer">
          <h5 className="text-uppercase">Industries</h5>
          <ul>
            <li><a href="#">Data Science Recruitment</a></li>
            <li><a href="">Software Development Recruitment</a></li>
            <li><a href="">Tech Marketing & Communications Recruitment </a></li>
            <li><a href="">IT Business Management Recruitment</a></li>
          </ul>
        </div>
        <div className="common-footer fifth-footer">
          <h5 className="text-uppercase">Resources</h5>
          <ul>
            <li><a href="#">Podcast</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Case Studies</a></li>

          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer