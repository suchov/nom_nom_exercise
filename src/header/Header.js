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
        <label className="menu-icon" htmlFor="menu-button"><span className="navicon"></span></label>
        <ul className="menu">
          <li className="dropdown">
            <a href="#/">
              Dogs
              <span className="down-arrow">▾</span>
            </a>
            <div className="dropdown-content">
              <a href="/fresh-dog-food-recipes" className="">Recipes</a>
              <a href="/site/products/dog-food-variety-pack" className="">Variety Pack</a>
              <a href="/site/products/dog-treats/" className="">Treats</a>
              <a href="/site/products/dog-supplements/" className="">Supplements</a>
              <a href="/site/products/microbiome/" className="">Microbiome</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#/">
              Cats
              <span className="down-arrow">▾</span>
            </a>
            <div className="dropdown-content">
              <a href="/fresh-cat-food-recipes" className="">Recipes</a>
              <a href="/site/products/cat-food-variety-pack" className="">Variety Pack</a>
              <a href="/site/products/dog-treats/?pet_type=CAT" className="">Treats</a>
              <a href="/site/products/cat-supplements/" className="">Supplements</a>
              <a href="/site/products/microbiome/?pet_type=CAT" className="">Microbiome</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#/">
              Learn
              <span className="down-arrow">▾</span>
            </a>
            <div className="dropdown-content">
              <a href="/site/how-it-works" className="">Our approach</a>
              <a href="/learn/success-stories" className="">Success stories</a>
              <a href="/learn" className="">Articles</a>
            </div>
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