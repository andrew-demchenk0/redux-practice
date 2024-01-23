import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/counter'>COUNTER</NavLink>
      <NavLink to='/ships'>SHIPS</NavLink>
      <NavLink to='/todo'>TODO</NavLink>
    </header>
  );
};

export default Header;
