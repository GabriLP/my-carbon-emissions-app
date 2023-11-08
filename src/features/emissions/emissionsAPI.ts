import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Define a type for the response data
export interface EmissionData {
  year: number;
  value: number;
}



// Create the async thunk
export const fetchEmissionsByCountry = createAsyncThunk(
  'emissions/fetchByCountry',
  async ({ country, startDate, endDate }: { country: string; startDate: string; endDate: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json', {
        params: { country, begin: startDate, end: endDate }
      });
      return response.data as EmissionData[];
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // If the error comes from the HTTP request and there's a response
        return rejectWithValue(error.response.data.message || 'Failed to fetch data for the country. Please try again.');
      } else {
        // If the error is not from a HTTP request
        return rejectWithValue('An unexpected error occurred. Please try again.');
      }
    }
  }
);

  // For fetching emissions data by geographic coordinates
export const fetchEmissionsByCoordinates = createAsyncThunk(
    'emissions/fetchByCoordinates',
    async ({ lat, lng, startDate, endDate }: { lat: number; lng: number; startDate: string; endDate: string }, { rejectWithValue }) => {
      try {
        const response = await axios.get(`https://api.v2.emissions-api.org/api/v2/co2/point?lat=${lat}&lng=${lng}&start=${startDate}&end=${endDate}`);
        return response.data.data as EmissionData[];
      } catch (error) {
        return rejectWithValue('Failed to fetch data for the coordinates. Please try again.');
      }
    }
  );