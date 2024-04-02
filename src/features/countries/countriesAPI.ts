import { createAsyncThunk } from '@reduxjs/toolkit';
import csvtojson from 'csvtojson';

export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/data/countries.csv');
      const csvData = await response.text();
      const jsonData = await csvtojson().fromString(csvData);
      return jsonData.map((item: any) => ({
        name: item.country_common,
        code: item.iso2, 
      }));
    } catch (error) {
      return rejectWithValue('Error fetching countries');
    }
  }
);