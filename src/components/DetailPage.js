import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import chooseImage from './ImageFunction';
import microphone from '../Image/green-radio-microphone-14640.png';
import setting from '../Image/settings-5666.png';
import backIcon from '../Image/black-arrow-left-11375.png';

const CityDetails = () => {
  const { cityId } = useParams();
  const weatherData = useSelector((state) => state.weathers.weatherData);
  const city = weatherData.find((city) => city.id === parseInt(cityId, 10));

  return (
    <div>
      <header className="header">
        {city && (
        <h2 className="header-title">
          {' '}
          {city.name}
        </h2>
        )}
        <div className="header-content">
          <div className="header-filter">
            <Link to="/" className="link-detail">
              <img src={backIcon} alt="weatherImage" />
            </Link>
          </div>
          <h3>weather</h3>
          <div className="icons">
            <img src={microphone} className="icons-img" alt="microphone" />
            <img src={setting} className="icons-img" alt="setting" />
          </div>
        </div>
      </header>
      {city && (
        <div>
          <div className="city-image-detail">
            <img src={chooseImage(Math.floor(city.main.temp - 273.15))} className="city-image-one" alt="weatherIcon" />
          </div>
          <div className="row-detail">
            <span> Temperature</span>
            {' '}
            <span>
              {(city.main.temp - 273.15).toFixed(2)}
              {' '}
              °C
            </span>
          </div>

          <div className="row-detail">
            <span> Humidity</span>
            {' '}
            <span>
              {city.main.humidity}
              {' '}
              %
            </span>
          </div>

          <div className="row-detail">
            <span> feels_like</span>
            {' '}
            <span>
              {(city.main.feels_like - 273.15).toFixed(2)}
              {' '}
              °C
            </span>
          </div>
          <div className="row-detail">
            <span> Temp_max</span>
            {' '}
            <span>
              {(city.main.temp_max - 273.15).toFixed(2)}
              {' '}
              °C
            </span>
          </div>
          <div className="row-detail">
            <span> Temp_min</span>
            {' '}
            <span>
              {(city.main.temp_min - 273.15).toFixed(2)}
              {' '}
              °C
            </span>
          </div>

          <div className="row-detail">
            <span> Visibility</span>
            {' '}
            <span>
              {Math.floor((city.visibility) / 1000)}
              {' '}
              {' '}
              km
            </span>
          </div>

          <div className="row-detail">
            <span> pressure</span>
            {' '}
            <span>
              {city.main.pressure}
              {' '}
              {' '}
              mb
            </span>
          </div>

          <div className="row-detail">
            <span> country</span>
            {' '}
            <span>
              {city.sys.country}
              {' '}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDetails;
