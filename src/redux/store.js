import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    contacts: contactSlice,
    user: userSlice
  },
});

export default store;