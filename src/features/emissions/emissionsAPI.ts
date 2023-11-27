import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Define a type for the response data
export interface EmissionData {
  average: number;
  start: string;
  end: string;
}

const EMISSIONS_API_BASE_URL = process.env.EMISSIONS_API_URL;

export const fetchEmissionsByCountry = createAsyncThunk<EmissionData[], { country: string; startDate: string; endDate: string; product: string }>(
  'emissions/fetchByCountry',
  async ({ country, startDate, endDate, product }, thunkAPI) => {
    try {
      const response = await axios.get(`${process.env.EMISSIONS_API_BASE_URL}/${product}/average.json`, {
        params: { country, begin: startDate, end: endDate },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || `Failed to fetch ${product} for the country. Please try again.`;
        return thunkAPI.rejectWithValue(errorMessage);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred. Please try again.');
    }
  }
);


export const fetchEmissionsByCoordinates = createAsyncThunk<
  EmissionData[], 
  { lat: number; lng: number; startDate: string; endDate: string; product: string }
>(
  'emissions/fetchByCoordinates',
  async ({ lat, lng, startDate, endDate, product }, thunkAPI) => {
    try {
      const point = `${lng},${lat}`;

      const response = await axios.get(`${process.env.EMISSIONS_API_BASE_URL}/${product}/average.json`, {
        params: {
          point, 
          begin: startDate, 
          end: endDate
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || `Failed to fetch data for ${product} at the coordinates. Please try again.`;
        return thunkAPI.rejectWithValue(errorMessage);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred. Please try again.');
    }
  }
);
