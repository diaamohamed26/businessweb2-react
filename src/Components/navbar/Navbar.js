// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo-light.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo}/>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
          ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={100}
            spy={true}
            activeClass="active"
            offset={-100}
            onClick={toggleNavbar}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={100}
            spy={true}
            activeClass="active"
            offset={-100}
            onClick={toggleNavbar}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            to="testimonial"
            smooth={true}
            duration={100}
            spy={true}
            activeClass="active"
            offset={-100}
            onClick={toggleNavbar}
          >
            TESTIMONIAL
          </Link>
        </li>
        <li>
          <Link
            to="pricing"
            smooth={true}
            duration={100}
            spy={true}
            activeClass="active"
            offset={-100}
            onClick={toggleNavbar}
          >
            PRICING
          </Link>
        </li>
        <li>
          <Link
            to="blogs"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-100}
            onClick={toggleNavbar}
          >
            BLOGS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-100}
            onClick={toggleNavbar}
          >
            CONTACT US
          </Link>
        </li>
        <button className='login-btn'>
          login
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
