import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import CityDetails from '../components/DetailPage';

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
];

const reducer = (state = {
  weathers: { weatherData: arr },
}) => state;

const store = configureStore({ reducer });

describe('should test Ditailpage that show one city weather', () => {
  it('should test the snapshot of Dital page', async () => {
    await axios.get.mockResolvedValue({ weather: arr });
    const detailPage = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <CityDetails />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(detailPage).toMatchSnapshot();
  });
});
