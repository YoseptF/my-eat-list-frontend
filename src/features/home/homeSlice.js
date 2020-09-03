/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    title: 'home',
    loggedIn: false,
    user: null,
    theme: {
      primary: '#65b54e',
      secondary: '#75c959',
      dark: '#2f3a5a',
      light: '#f8f8f8  ',
      grey: '#abaeb3',
      danger: '#fb3640',
    },
    pages: [
      { link: '/', icon: 'fas fa-home', component: 'Home' },
      { link: '/lists', icon: 'fas fa-clipboard-list', component: 'Page' },
      { link: '/foods', icon: 'fas fa-apple-alt', component: 'Page' },
      { link: '/options', icon: 'fas fa-cogs', component: 'Page' },
    ],
  },
  reducers: {
    updateUser: (state, { payload }) => {
      state.loggedIn = true;
      state.user = payload.user;
    },
    updateLogginStatus: (state, { payload }) => {
      state.loggedIn = payload;
    },
    updateTitle: (state, { payload }) => { state.title = payload; },
  },
});

export const { updateUser, updateLogginStatus, updateTitle } = homeSlice.actions;

export const selectUser = state => state.home.user;
export const selectTitle = state => state.home.title;
export const selectPages = state => state.home.pages;
export const selectTheme = state => state.home.theme;
export const selectLoggedInStatus = state => state.home.loggedIn;

export default homeSlice.reducer;
