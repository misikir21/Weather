import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?';
const apiKey = '2232c5e8aed5dbe6ed27ba7903d26b62';

const fetchLocation = createAsyncThunk('home/fetchLocation', async (location) => {
  try {
    const response = await axios.get(`${apiUrl}q=${location}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  loading: false,
  location: [],
  error: '',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.location = action.payload;
        state.error = action.payload.length === 0 ? 'No result found!' : '';
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.loading = false;
        state.location = [];
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
export { fetchLocation };
