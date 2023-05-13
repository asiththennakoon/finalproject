import React from 'react';
import '../styles/Nav.css';
import logo from '../images/Logo.svg';

function Nav() {
  return (
    <nav>
      <div className='container'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hamburger">
          <li><a href="LinkToPage1">Home</a></li>
          <li><a href="LinkToPage2">About</a></li>
          <li><a href="LinkToPage2">Menu</a></li>
          <li><a href="LinkToPage2">Reservation</a></li>
          <li><a href="LinkToPage2">Order Online</a></li>
          <li><a href="LinkToPage2">Login</a></li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
