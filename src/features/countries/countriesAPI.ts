import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import csvtojson from 'csvtojson';

export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const csvUrl = process.env.COUNTRY_API_URL;
      const response = await axios.get(`${process.env.COUNTRY_API_URL}`);
      const jsonData = await csvtojson().fromString(response.data);
      return jsonData.map((item: any) => ({
        name: item.Name,
        code: item.Code, 
      }));
    } catch (error) {
      return rejectWithValue('Error fetching countries');
    }
  }
);