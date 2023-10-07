import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import ShowAll from '../components/HomePage';

jest.mock('axios');

const arr = [
  {
    coord: { lon: 69.4167, lat: 34.5 },
    weather: [{
      id: 800, main: 'Clear', description: 'clear sky', icon: '01d',
    }],
    base: 'stations',
    main: {
      temp: 294.11,
      feels_like: 293.07,
      temp_min: 294.11,
      temp_max: 294.11,
      pressure: 1008,
      humidity: 31,
      sea_level: 1008,
      grnd_level: 811,
    },
    visibility: 10000,
    wind: { speed: 1.33, deg: 303, gust: 1.51 },
    clouds: { all: 6 },
    dt: 1688000991,
    sys: { country: 'AF', sunrise: 1687997534, sunset: 1688049532 },
    timezone: 16200,
    id: 1138957,
    name: 'Kabul',
    cod: 200,
  },
  {
    coord: { lon: 68.4269, lat: 33.5536 },
    weather: [{
      id: 800, main: 'Clear', description: 'clear sky', icon: '01d',
    }],
    base: 'stations',
    main: {
      temp: 293.71,
      feels_like: 293.13,
      temp_min: 293.71,
      temp_max: 293.71,
      pressure: 1008,
      humidity: 50,
      sea_level: 1008,
      grnd_level: 786,
    },
    visibility: 10000,
    wind: { speed: 1.54, deg: 352, gust: 1.75 },
    clouds: { all: 0 },
    dt: 1688001287,
    sys: { country: 'AF', sunrise: 1687997924, sunset: 1688049617 },
    timezone: 16200,
    id: 1141269,
    name: 'Ghazni',
    cod: 200,
  },
];

const reducer = (state = {
  weathers: { weatherData: arr },
}) => state;

const store = configureStore({ reducer });

describe('should test My home page', () => {
  it('should test the snapshot of home page', async () => {
    await axios.get.mockResolvedValue({ weather: arr });
    const homePage = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <ShowAll />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(homePage).toMatchSnapshot();
  });
});
