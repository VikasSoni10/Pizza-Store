import React from 'react';

const Menu = () => {
  return (
    <nav className='menu'>
      <ul>
        <li><a href="/pizzas">Pizzas</a></li>
        <li><a href="/sides">Sides</a></li>
        <li><a href="/desserts">Desserts</a></li>
        <li><a href="/veg">Veg</a></li>
        <li><a href="/nonveg">Non-Veg</a></li>
        <li><a href="/drink">Drinks</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
