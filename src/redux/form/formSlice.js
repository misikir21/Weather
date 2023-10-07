import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: 'london,GB',
};

const formSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export default formSlice.reducer;
export const { setLocation } = formSlice.actions;
