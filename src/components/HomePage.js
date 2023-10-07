import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../redux/weather/weathersReducer';
import chooseImage from './ImageFunction';
import './style/homePage.css';
import microphone from '../Image/green-radio-microphone-14640.png';
import setting from '../Image/settings-5666.png';
import rightIcon from '../Image/right-arrow-6421.png';

const ShowAll = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weathers.weatherData);
  const [selectedOption, setSelectedOption] = useState('All'); // State to store the selected option value

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const filteredData = weatherData.filter((city) => {
    if (selectedOption === 'All') {
      return true; // Show all cities when 'All' is selected
    }
    if (selectedOption === 'Hot') {
      return Math.floor(city.main.temp - 273.15) > 21;
      // Filter based on temperature greater than 21
    }
    if (selectedOption === 'Cold') {
      return Math.floor(city.main.temp - 273.15) < 10; // Filter based on temperature less than 10
    }
    if (selectedOption === 'Temperate') {
      return Math.floor(city.main.temp - 273.15) >= 10 && Math.floor(city.main.temp - 273.15) <= 21;
      // Filter based on temperature between 10 and 21
    }
    return true;
  });

  return (
    <div>
      <header className="header">
        <h1 className="header-title">WeatherHub: Explore Weather in Major Cities </h1>
        <div className="header-content">
          <div className="header-filter">
            <span>Filter</span>
            <select onChange={(e) => (setSelectedOption(e.target.value))} value={selectedOption}>
              <option value="All">All</option>
              <option value="Hot">Hot</option>
              <option value="Temperate">Temperate</option>
              <option value="Cold">Cold</option>
            </select>
          </div>
          <h2>Most views</h2>
          <div className="icons">
            <img src={microphone} className="icons-img" alt="microphone" />
            <img src={setting} className="icons-img" alt="setting" />
          </div>
        </div>
      </header>

      <div className="container">
        {filteredData.map((city) => (
          <div key={city.id} className="city">
            <Link to={`/details/${city.id}`} className="link">
              <div className="city-image">
                <img src={chooseImage(Math.floor(city.main.temp - 273.15))} className="city-image-one" alt="weatherIcon" />
                <img src={rightIcon} alt="go on " />
              </div>
              <h3>{city.name}</h3>
              <p>
                {(city.main.temp - 273.15).toFixed(2)}
                {' '}
                °C
              </p>
              <p>
                {' '}
                Humidity:
                {' '}
                {city.main.humidity}
                %
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowAll;
