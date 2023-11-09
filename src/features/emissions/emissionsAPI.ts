import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Define a type for the response data
export interface EmissionData {
  average: number;
  start: string;
  end: string;
}

// Assuming the base URL for the emissions API
const EMISSIONS_API_BASE_URL = 'https://api.v2.emissions-api.org/api/v2';

export const fetchEmissionsByCountry = createAsyncThunk<EmissionData[], { country: string; startDate: string; endDate: string }>(
  'emissions/fetchByCountry',
  async ({ country, startDate, endDate }, thunkAPI) => {
    try {
      const response = await axios.get(`${EMISSIONS_API_BASE_URL}/carbonmonoxide/average.json`, {
        params: { country, begin: startDate, end: endDate },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Failed to fetch data for the country. Please try again.';
        return thunkAPI.rejectWithValue(errorMessage);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred. Please try again.');
    }
  }
);


export const fetchEmissionsByCoordinates = createAsyncThunk<EmissionData[], { lat: number; lng: number; startDate: string; endDate: string }>(
  'emissions/fetchByCoordinates',
  async ({ lat, lng, startDate, endDate }, thunkAPI) => {
    try {
      const response = await axios.get(`${EMISSIONS_API_BASE_URL}/carbonmonoxide/average.json`, {
        params: { lat, lng, start: startDate, end: endDate },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Failed to fetch data for the coordinates. Please try again.';
        return thunkAPI.rejectWithValue(errorMessage);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred. Please try again.');
    }
  }
);
