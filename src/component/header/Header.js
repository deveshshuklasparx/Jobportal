import React from 'react'
import './Header.css';
import { Outlet, Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <header className="header-wrapper">
        <div className="container">
        <a>Logo</a>
            <ul className='header-link-wrapper'>
              
           
                    <li className='header-links'>
                        <Link to="/banner">About Us</Link>
                    </li>
                    <li className='header-links'>
                        <Link to="/employee">Employee</Link>
                    </li>
                    <li className='header-links'>
                        <Link to="/employer">Employer</Link>
                    </li>
                    <li className='header-links'>
                        <Link to="/contactus">Contact</Link>
                    </li>
                {/* <li className='header-links'>
                <Link to="/"> About Us</Link></li> */}
                {/* <Link to="/"><li className='header-links'><a>Blogs</a></li></Link>
                <Link to="/"><li className='header-links'><a>Employer</a></li></Link>
                <Link to="/"><li className='header-links'><a>Employee</a></li></Link>
                <Link to="/contact"><li className='header-links'><a>Contact Us</a></li></Link> */}
            </ul>
            </div>
    </header>
    </>
  )
}

export default Header