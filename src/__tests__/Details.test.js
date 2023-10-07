import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Details from '../components/Details/Details';

describe('Details component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
  });

  it('renders the weather details correctly', () => {
    // Mocking Redux state to simulate received data
    store.dispatch({
      type: 'details/success',
      payload: {
        loading: false,
        details: {
          weather: [{ main: 'Sunny', description: 'Clear sky' }],
          main: {
            temp: 25, temp_min: 20, temp_max: 30, pressure: 1010, humidity: 70,
          },
          wind: { speed: 5, deg: 180 },
          clouds: { all: 20 },
          sys: { sunrise: 1632272400, sunset: 1632315600 },
        },
      },
    });

    const weatherMain = screen.getByText('Main');
    expect(weatherMain).toBeInTheDocument();

    const weatherDescription = screen.getByText('Temp(celsius)');
    expect(weatherDescription).toBeInTheDocument();

    const temperature = screen.getByText('Rain(mm)');
    expect(temperature).toBeInTheDocument();
  });
});
