import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';

export default configureStore({
  reducer: {
    home: homeReducer,
  },
});
