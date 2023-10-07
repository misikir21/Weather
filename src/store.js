import { configureStore } from '@reduxjs/toolkit';
import weathersReducer from './redux/weather/weathersReducer';

const store = configureStore({
  reducer: {
    weathers: weathersReducer,
  },
});

export default store;
