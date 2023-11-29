// Navbar.tsx

import React from 'react';
import './Navbar.scss';
import logo from './logo.svg';
import { Link } from 'react-router-dom';


interface NavbarProps {
   title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => 
{
  return (
    <nav className="navbar">

    <Link to="/">
      <div className="navbar__brand">
          <img src={logo} className="App-logo" alt="logo" />
      </div>    
    </Link>

      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/">My books</Link>
        </li>
        <li className="navbar__item">
          <Link to="/discover">Discover</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
