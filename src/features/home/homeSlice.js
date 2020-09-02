/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loggedIn: false,
    user: null,
    theme: {
      primary: '#65b54e',
      secondary: '#75c959',
      dark: '#2f3a5a',
      light: '#f8f8f8  ',
      danger: '#fb3640',
    },
  },
  reducers: {
    updateUser: (state, { payload }) => {
      state.loggedIn = true;
      state.user = payload.user;
    },
  },
});

export const { updateUser } = homeSlice.actions;

export const selectTheme = state => state.home.theme;
export const selectLoggedInStatus = state => state.home.loggedIn;

export default homeSlice.reducer;
