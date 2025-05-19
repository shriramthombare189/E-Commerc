import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";  

export default function Navbar() {
  return (
    <header className='heder_section'>
      <nav className="navdiv">
        <div className="logo">
          <a href="#">E-Market</a>
        </div>
        <ul>
          <li><Link to={"/home"}>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to={"/order"}>Order</Link></li>
          <li><Link to={"/contactUs"}>Contact US</Link></li>
          <li>
            <Link className="sign-in-btn" to="/singUp">Sign-in</Link>
          </li>
          <li>
            <Link className="sign-up-btn" to="/singIn">Sign-up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
