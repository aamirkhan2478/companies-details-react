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
        `${baseUrl}/dowjones_constituent?limit=10&apikey=5de9ce7b33e08abd599a934eeeceda62`,
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
        `${baseUrl}/profile/${companyName}?apikey=5de9ce7b33e08abd599a934eeeceda62`,
      );

      const fetchData = data.map((company) => ({
        name: company.companyName,
        ceo: company.ceo,
        symbol: company.symbol,
        price: company.price,
        city: company.city,
        website: company.website,
        country: company.country,
        image: company.image,
        address: company.address,
        range: company.range,
        fullTimeEmployees: company.fullTimeEmployees,
        phone: company.phone,
        industry: company.industry,
      }));

      dispatch({
        type: FETCH_COMPANIES_BY_SYMBOL,
        payload: fetchData[0],
      });
    } catch (error) {
      console.log(error.message);
    }
  },
);

// Exports data
export { fetchCompanies, fetchBySymbol };
export default companiesReducer;
