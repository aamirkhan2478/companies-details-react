import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import companiesReducer from './Companies/companies';

const store = configureStore({
  reducer: {
    company: companiesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
