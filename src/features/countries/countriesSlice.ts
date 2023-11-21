import { createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from './countriesAPI';

interface Country {
    name: string;
    code: string;
  }

interface CountriesState {
  list: Country[];
  loading: boolean;
  error: string | null;
}

const initialState: CountriesState = {
  list: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    });
  },
});

export default countriesSlice.reducer;