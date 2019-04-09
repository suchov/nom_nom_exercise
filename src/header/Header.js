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

      {/* HTML for the comparison calculator */}
      <div className="nutrient-calculator-container">
        <img src="https://www.nomnomnow.com/images/home/chicken_bowl_transparent.png" className="chicken-bowl" alt="chicken bowl"></img>
        <div className="nutrient-content">
          <h1 className="comparison-calc-header">Dog food comparison calculator</h1>
          <img src="https://www.nomnomnow.com/images/home/justin_square.jpg" className="justin-photo-circle" alt="Dr Shmalberg"></img>
          <p><span class="bold color-teal">Dr. Shmalberg says</span>:
            We should feed by calorie, not by weight. Percentages on commercial dog food labels
            are not reliable because they are based on weight, and the values are
            affected by many factors, including moisture, fiber and minerals.
          </p>
          <p>Use this calculator to get a more accurate picture of how another dog food brand compares with NomNomNow.</p>
          <div id="react-container-nutrient-calculator">
            <form>
              <div className="container-flex padding-bottom-small">
                <div className="padding-bottom-small padding-right-small">
                  <label className="label">Name of dog food brand</label>
                  <input name="brand" type="text" maxlength="40" value="Such" />
                </div>
                <div className="padding-bottom-small padding-right-small">
                  <label className="label">Compare with NomNomNow</label>
                  <select name="recipe"><option value="pork">Porkalicious Potluck</option>
                  <option value="beef">Heartland Beef Mash</option>
                  <option value="chicken">Chicken Chow-Wow</option>
                  <option value="turkey">Tasty Turkey Fare</option>
                  </select>
                </div>
              </div>
                <div class="padding-bottom-small">
                  <b>Such</b>'s nutrient info:
                </div>
                <div class="container-flex padding-bottom-small">
                  <div class="padding-bottom-small padding-right-small">
                    <label class="label">% protein (min.)</label><input name="protein" type="number" min="1" max="60" value="234" />
                  </div>
                  <div class="padding-bottom-small padding-right-small">
                    <label class="label">% fat (min.)</label>
                    <input name="fat" type="number" min="1" max="60" value="243" />
                  </div>
                  <div class="padding-bottom-small padding-right-small">
                    <label class="label">Caloric density (kcal/kg)</label>
                    <input name="calories" type="number" min="200" max="8000" value="3242" />
                  </div>
                </div>
                <div class="hidden"><h4>
                  <div>
                    <i class="fas fa-chevron-up"></i>
                  </div>Fill out the form to get a nutrient comparison</h4>
                </div>
                <span>
                  <div className="">
                    <div className="centered color-light-gray">
                      <h4>See the the nutrient comparison below
                        <div>
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </h4>
                    </div>
                    <div className="results-container">
                      <div className="comparison-content">
                        <div className="results">
                          <h3 id="comp-brand">Purina's Beyond Simply 9</h3>
                          <label className="label">Protein</label>
                          <h1 className="comp">1062</h1>
                          <label className="label">Fat</label>
                          <h1 className="comp">900</h1>
                          <label className="label">Carbohydrate</label>
                          <h1 className="comp">0</h1>
                        </div>
                        <div className="results">
                          <img src="https://www.nomnomnow.com/images/logo_utensils.svg" alt="logo" className="logo" />
                            <h3 id="nnw-recipe">Tasty Turkey Fare</h3>
                            <label className="label">Protein*</label>
                            <h1 className="orange">80</h1>
                            <label className="label">Fat</label>
                            <h1 className="teal">62</h1>
                            <label className="label">Carbohydrate</label>
                            <h1 className="yellow">55</h1>
                        </div>
                        </div>
                        <p>Learn about <b className="orange">the role of protein, fat, and carbs</b> in a dog's diet.</p>
                        <p className="small-font">* All units above are given in grams per 1000 calories (g/kcal).</p>
                      </div>
                  </div>
                </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header;