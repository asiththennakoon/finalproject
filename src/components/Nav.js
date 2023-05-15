import React from 'react';
import '../styles/Nav.css';
import logo from '../images/Logo.svg';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className='containerN'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="hamburger">
            <li><NavLink to="/" activeClassNAme="active" end>Home</NavLink></li>
            <li><a href="LinkToPage2">About</a></li>
            <li><a href="LinkToPage2">Menu</a></li>
            <li><NavLink to="/booking" activeClassNAme="active" end>Booking</NavLink></li>
            <li><a href="LinkToPage2">Order Online</a></li>
            <li><a href="LinkToPage2">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
