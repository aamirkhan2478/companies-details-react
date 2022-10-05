import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action Types
const FETCH_COMPANIES = 'FETCH_COMPANIES';
const FETCH_COMPANIES_BY_SYMBOL = 'FETCH_COMPANIES_BY_SYMBOL';

// Reducers
const initialState = {
  isLoading: false,
  companies: [],
  companiesBySymbol: {},
};

const companiesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        isLoading: false,
        companies: payload,
      };
    case FETCH_COMPANIES_BY_SYMBOL:
      return {
        ...state,
        isLoading: false,
        companiesBySymbol: payload,
      };
    default:
      return state;
  }
};

// Actions
const baseUrl = 'https://financialmodelingprep.com/api/v3';

const fetchCompanies = createAsyncThunk(
  FETCH_COMPANIES,
  async (args, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/dowjones_constituent?apikey=c72f83b1dfc59f79c4cdee3c9b93c7f4`,
      );

      const fetchData = data.map((company) => ({
        name: company.name,
        symbol: company.symbol,
        headQuarter: company.headQuarter,
      }));
      dispatch({
        type: FETCH_COMPANIES,
        payload: fetchData,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
);

const fetchBySymbol = createAsyncThunk(
  FETCH_COMPANIES_BY_SYMBOL,
  async (companyName, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/profile/${companyName}?apikey=c72f83b1dfc59f79c4cdee3c9b93c7f4`,
      );
      dispatch({
        type: FETCH_COMPANIES_BY_SYMBOL,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
);

// Exports data
export { fetchCompanies, fetchBySymbol };
export default companiesReducer;
