import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import formReducer from './form/formSlice';
import homeReducer from './Home/homeSlice';
import detailsReducer from './Details/detailsSlice';

const store = configureStore({
  reducer: {
    search: formReducer,
    home: homeReducer,
    details: detailsReducer,
  },
  middleware: [thunk],
});

export default store;
