/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    title: 'Home',
    loggedIn: false,
    user: {},
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
    modal: {
      open: false,
      item: {},
    },
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
    closeModal: state => { state.modal.open = false; },
    openModal: (state, { payload }) => { state.modal = { open: true, item: payload }; },
    addFood: (state, { payload }) => { state.user.currentList.foods.push(payload); },
    removeFood: (state, { payload }) => {
      const foodToRemove = state.user.currentList.foods.findIndex(food => food.id === payload.id);
      state.user.currentList.foods.splice(foodToRemove, 1);
    },
    updateCurrentCalories: (state, { payload }) => { state.user.currentList.calories += payload; },
  },
});

export const {
  updateUser, updateLogginStatus, updateTitle,
  closeModal, openModal, addFood, removeFood,
  updateCurrentCalories,
} = homeSlice.actions;

export const selectUser = state => state.home.user;
export const selectTitle = state => state.home.title;
export const selectPages = state => state.home.pages;
export const selectTheme = state => state.home.theme;
export const selectLoggedInStatus = state => state.home.loggedIn;

export const selectModal = state => state.home.modal;

export default homeSlice.reducer;
