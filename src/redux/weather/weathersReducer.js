import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  weatherData: [],
};

export const fetchData = createAsyncThunk('weathers/fetchData', async () => {
  const cities = ['London', 'Paris', 'New York', 'Kabul', 'Yakutsk', 'Yellowknife', 'Irkutsk', 'Fraser', 'Harbin',
    'Dubai', 'Dudinka', 'Barrow'];
  const requests = cities.map((city) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a6a4edb9e3400e2d15f898275fd391f`)
    .then((response) => response.json()));
  const results = await Promise.all(requests);
  return results;
});

const weatherSlice = createSlice({
  name: 'weathers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => ({ ...state, weatherData: action.payload }));
  },
});

export default weatherSlice.reducer;
