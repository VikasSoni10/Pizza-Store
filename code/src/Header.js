import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <h1 className='brand'>Pizza Store</h1>
      <nav>
        <ul>
          <li><a className='navlink' href="/">Home</a></li>
          <li><a className='navlink' href="/about">About</a></li>
          <li><a className='navlink' href="/contact">Contact</a></li>
        </ul>
      </nav>
      <Link to="cart"><img  className='cartImg' src="shopping-cart.png" alt="failedcart"/></Link>
      
    </header>
  );
};

export default Header;
