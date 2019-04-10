import React from 'react';
import './Header.css';
import logo from './logo_main.svg';

const  Header = () => {
  return (
    <div>
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
              <div class="padding-bottom-small">Dog food brand's nutrient info:</div>
                <div className="container-flex padding-bottom-small">
                  <div className="padding-bottom-small padding-right-small">
                    <label className="label">% protein (min.)</label><input name="protein" type="number" min="1" max="60" value="234" />
                  </div>
                  <div className="padding-bottom-small padding-right-small">
                    <label className="label">% fat (min.)</label>
                    <input name="fat" type="number" min="1" max="60" value="243" />
                  </div>
                  <div className="padding-bottom-small padding-right-small">
                    <label className="label">Caloric density (kcal/kg)</label>
                    <input name="calories" type="number" min="200" max="8000" value="3242" />
                  </div>
                </div>
                <div className="hidden"><h4>
                  <div>
                    <i className="fas fa-chevron-up"></i>
                  </div>Fill out the form to get a nutrient comparison</h4>
                </div>
                <span>
                <div className="">

                  <div className="centered color-light-gray">
                    <h4>See the the nutrient comparison below<div><i className="fas fa-chevron-down"></i></div></h4>
                  </div>

                  <div className="results-container">
                    <div className="results padding-bottom">

                      <div>
                        <h3 className="brand color-light-gray">sfaf</h3>
                        <label className="label color-light-gray">Protein</label>
                        <h1 className="color-light-gray">9731</h1>
                        <label className="label color-light-gray">Fat</label>
                        <h1 className="color-light-gray">10041</h1>
                        <label className="label color-light-gray">Carbohydrate</label>
                        <h1 className="color-light-gray">0</h1>
                      </div>

                      <div>
                        <img src="https://www.nomnomnow.com/images/logo_utensils.svg" className="logo" alt="utensils" />
                        <h3 className="brand">Heartland Beef Mash</h3>
                        <label className="label color-light-gray">Protein *</label>
                        <h1 className="color-orange">80</h1>
                        <label className="label color-light-gray">Fat</label>
                        <h1 className="color-teal">62</h1>
                        <label className="label color-light-gray">Carbohydrate</label>
                        <h1 className="color-yellow">55</h1>
                      </div>

                    </div>
                    <div className="centered padding-bottom">
                      Learn about <a href="/learn/pet-expert/understanding-dog-food-nutrients" target="_blank">the role of protein, fat, and carbs</a> in a dog's diet.
                    </div>
                    <div className="centered color-light-gray text-smallest">* All units above are given in grams per 1000 calories (g/kcal).</div>
                  </div>

                  <div className="padding-top padding-bottom color-light-gray text-smallest">
                    <p>The information for other brands' foods should be used as a guide only, 
                      albeit one that is in most cases better than the percentage. Actual values should be available from the manufacturer.  
                      NomNomNow is not liable for any misuse, inaccuracy, or other legal shenanigans related to the above.</p>
                  </div>

                  <div className="padding-bottom-medium centered">
                    <h2>Ready to go fresh?</h2><a href="/profile" className="cta-link">Let's get started</a>
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