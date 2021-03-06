import React from 'react'
import onestars from 'img/svg/onestars.svg'
import twostars from 'img/svg/twostars.svg'
import threestars from 'img/svg/threestars.svg'
import fourstars from 'img/svg/fourstars.svg'
import fivestars from 'img/svg/fivestars.svg'

const SearchFilter = () => {
  return (
    <form className="filters">
    <h2>Filters</h2>

    <div className="filter-options">
      <fieldset className="filter-category">
        <legend>Categories</legend>
        <ul className="filter-list">
          <li><input type="checkbox" className="checkbox" name="category" value="conditioning" id="conditioning"/> <label htmlFor="conditioning" className="check-button">Conditioning</label></li>
          <li><input type="checkbox" className="checkbox" name="category" value="calisthenics" id="calisthenics"/> <label htmlFor="calisthenics" className="check-button">Calisthenics</label></li>
          <li><input type="checkbox" className="checkbox" name="category" value="dumbbells" id="dumbbells"/> <label htmlFor="dumbbells" className="check-button">Dumbbells</label></li>
          <li><input type="checkbox" className="checkbox" name="category" value="weights" id="weights"/> <label htmlFor="weights" className="check-button">Weights</label></li>
          <li><input type="checkbox" className="checkbox" name="category" value="cardio" id="cardio"/> <label htmlFor="cardio" className="check-button">Cardio</label></li>
        </ul>
      </fieldset>
      
     
      <fieldset className="slider">
        <label htmlFor="filterPrice">Filter by price range:</label><br/>
        <input type="range" name="price" className="input-slider" id="filterPrice" value="0" min="0" max="300" step="1"/>
        <output htmlFor="filterPrice" className="output-price">$0.0</output>
      </fieldset>
      <fieldset id="filterRating">
        <legend>Ratings</legend>
        <ol className="filter-list">
          <li>
            <input type="radio" className="radio radio-star" name="rating" value="five" id="aboveFive"/>
            <label htmlFor="aboveFive" className="rating-label">
             <img className="star" src={fivestars} alt="star5"/>
            </label>
          </li>
          <li>
            <input type="radio" className="radio radio-star" name="rating" value="four" id="aboveFour"/>
            <label htmlFor="aboveFour" className="rating-label">
             <img className="star" src={fourstars} alt="star4"/>
            </label>
          </li>
          <li>
            <input type="radio" className="radio radio-star" name="rating" value="three" id="aboveThree"/>
            <label htmlFor="aboveThree" className="rating-label">
             <img src={threestars} className="star" alt="star3"/>
            </label>
          </li>
          <li>
            <input type="radio" className="radio radio-star" name="rating" value="two" id="aboveTwo"/>
            <label htmlFor="aboveTwo" className="rating-label">
             <img src={twostars} className="star" alt="star2"/>
             
            </label>
          </li>
          <li>
            <input type="radio" className="radio radio-star" name="rating" value="one" id="aboveOne"/>
            <label htmlFor="aboveOne" className="rating-label">
             <img src={onestars} className="star" alt="star1"/>
            
            </label>
          </li>
        </ol>
      </fieldset>
    </div>
    <fieldset>
      <label className="show-options" htmlFor="sort">Show:</label>
      <select className="select-option" name="sort" id="sort" defaultValue="select">
        <option value="select">Select an Option...</option>
        <option value="0">Price, Lowest to Highest</option>
        <option value="1">Price, Highest to Lowest</option>
      </select>
    </fieldset>
  </form>

  )
}

export default SearchFilter