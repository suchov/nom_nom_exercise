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
            <div class="dropdown-content">
              <a href="/fresh-dog-food-recipes" class="">Recipes</a>
              <a href="/site/products/dog-food-variety-pack" class="">Variety Pack</a>
              <a href="/site/products/dog-treats/" class="">Treats</a>
              <a href="/site/products/dog-supplements/" class="">Supplements</a>
              <a href="/site/products/microbiome/" class="">Microbiome</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#/">
              Cats
              <span className="down-arrow">▾</span>
            </a>
            <div class="dropdown-content">
              <a href="/fresh-cat-food-recipes" class="">Recipes</a>
              <a href="/site/products/cat-food-variety-pack" class="">Variety Pack</a>
              <a href="/site/products/dog-treats/?pet_type=CAT" class="">Treats</a>
              <a href="/site/products/cat-supplements/" class="">Supplements</a>
              <a href="/site/products/microbiome/?pet_type=CAT" class="">Microbiome</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#/">
              Learn
              <span className="down-arrow">▾</span>
            </a>
            <div class="dropdown-content">
              <a href="/site/how-it-works" class="">Our approach</a>
              <a href="/learn/success-stories" class="">Success stories</a>
              <a href="/learn" class="">Articles</a>
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