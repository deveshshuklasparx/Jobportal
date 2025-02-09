import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../logo.jpg";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="header-wrapper">
        <div className="container">
          <NavLink to="/" className="logo">
            <img src={Logo} alt="Company Logo" />
          </NavLink>

          <button
            className={`hamburger-menu ${isMenuOpen ? "toggle" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar center-bar"></span>
            <span className="bar last-bar"></span>
          </button>

          <ul className={`header-link-wrapper ${isMenuOpen ? "show" : ""}`}>
          <li className="header-links">
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li className="header-links">
              <NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active" : "")}>
                About Us
              </NavLink>
            </li>
            <li className="header-links">
              <NavLink to="/employee" className={({ isActive }) => (isActive ? "active" : "")}>
                Employee
              </NavLink>
            </li>
            <li className="header-links">
              <NavLink to="/employer" className={({ isActive }) => (isActive ? "active" : "")}>
                Employer
              </NavLink>
            </li>
            <li className="header-links">
              <NavLink to="/contactus" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
