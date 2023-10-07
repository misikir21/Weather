import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import mockStore from '../__mocks__/reduxMock';
import Search from '../components/Search/Search';

const initialState = {
  location: [],
};

const store = mockStore(initialState);

describe('Search', () => {
  it('renders the search Search with an input field', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>,
    );

    const inputField = screen.getByPlaceholderText('London,GB');
    expect(inputField).toBeInTheDocument();
  });

  it('updates the input value when the user types', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>,
    );

    const inputField = screen.getByPlaceholderText('London,GB');
    const testValue = 'new york,US';

    expect(inputField.value).toBe('');

    userEvent.type(inputField, testValue);

    expect(inputField.value).toBe(testValue);
  });

  it('dispatches the setLocation action on Search submission', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>,
    );

    const inputField = screen.getByPlaceholderText('London,GB');
    const submitButton = screen.getByRole('button', { name: 'Search' });

    const testValue = 'Paris,FR';

    userEvent.type(inputField, testValue);
    userEvent.click(submitButton);

    expect(store.getActions()).toEqual([
      { type: 'search/setLocation', payload: testValue },
    ]);
  });
});
