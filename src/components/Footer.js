import React from 'react';
import logo from '../images/Logo.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footerdiv1'>
          <img src={logo} alt="logo" />
        </div>
        <div className='footerdiv2'>
          <ul>
            <li><a href="LinkToPage1">Home</a></li>
            <li><a href="LinkToPage2">About</a></li>
            <li><a href="LinkToPage2">Menu</a></li>
            <li><a href="LinkToPage2">Reservation</a></li>
            <li><a href="LinkToPage2">Order Online</a></li>
            <li><a href="LinkToPage2">Login</a></li>
          </ul>
        </div>
        <div className='footerdiv3'>
          <ul>
            <li>Adress</li>
            <li>phone Number</li>
            <li >Email</li>
          </ul>
        </div>
        <div className='footerdiv4'>
        <ul>
            <li>Adress</li>
            <li>phone Number</li>
            <li >Email</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
