import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '2232c5e8aed5dbe6ed27ba7903d26b62';

const fetchDetails = createAsyncThunk('details/fetchDetails', async ({ lat, lon }) => {
  try {
    const response = await axios.get(`${apiUrl}lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  loading: false,
  details: [],
  error: '',
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
        state.error = action.payload.length === 0 ? 'Result not found!' : '';
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.loading = false;
        state.details = [];
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
export { fetchDetails };
