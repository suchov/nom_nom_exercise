import React from 'react';
import './Header.css';
import logo from './logo_main.svg';

const  Header = () => {
  console.log('WOW WOW WOW');
  
  return (
    <div className="header-div">
      <header>
        <a href="/">
          <img className="header-nav--logo" src={logo} alt="Fresh dog food delivery, best dog food - NomNomNow"/>
        </a>
        <ul className="menu">
          <li className="dropdown">
            <a href="#/">
              Dogs
              <span className="down-arrow">▾</span>
            </a>
            
          </li>
          <li className="dropdown">
            <a href="#/">
              Cats
              <span className="down-arrow">▾</span>
            </a>
            
          </li>
          <li className="dropdown">
            <a href="#/">
              Learn
              <span className="down-arrow">▾</span>
            </a>
            
          </li>
          <li>
            <a href="#/">Log in</a>
          </li>
          <li>
            <a href="/profile" className="cta-button">20% off trial</a>
          </li>
        </ul>
      </header>
    </div>
  )
}


export default Header;