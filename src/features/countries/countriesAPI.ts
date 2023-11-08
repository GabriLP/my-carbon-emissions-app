import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import csvtojson from 'csvtojson';

export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const csvUrl = 'https://datahub.io/core/country-list/r/data.csv';
      const response = await axios.get(csvUrl);
      const jsonData = await csvtojson().fromString(response.data);
      return jsonData.map((item: any) => ({
        name: item.Name, // Adjust based on actual keys from jsonData
        code: item.Code, // Adjust based on actual keys from jsonData
      }));
    } catch (error) {
      return rejectWithValue('Error fetching countries');
    }
  }
);