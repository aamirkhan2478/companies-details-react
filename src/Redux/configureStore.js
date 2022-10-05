import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './Companies/companies';

const store = configureStore({
  reducer: {
    company: companiesReducer,
  },
});

export default store;
