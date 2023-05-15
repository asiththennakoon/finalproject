import React from 'react';
import image2 from '../images/restauranfood.jpg';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className= 'box1'></div>
        <div className='containerH'>
            <div className='section1div1'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button>
                  <NavLink to="/booking" end>
                  Booking
                  </NavLink>
                 </button>
            </div>
            <div className='section1div1'>
                <img src={image2} alt="Greeksalad" />
            </div>
        </div>

    </header>
  );
}

export default Header;
