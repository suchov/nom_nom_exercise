import React from 'react';
import './Header.css';
import logo from './logo_main.svg';

const  Header = () => {
  return (
    <div className="header-div">
      <header>
        <a href="/">
          <img className="header-nav--logo" src={logo} alt="Fresh dog food delivery, best dog food - NomNomNow"/>
        </a>
      </header>
    </div>
  )
}


export default Header;