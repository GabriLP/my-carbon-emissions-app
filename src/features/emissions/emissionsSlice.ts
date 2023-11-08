import { createSlice } from '@reduxjs/toolkit';
import { EmissionData, fetchEmissionsByCountry, fetchEmissionsByCoordinates } from './emissionsAPI';

interface EmissionsState {
  data: EmissionData[];
  loading: boolean;
  error: string | null;
}

const initialState: EmissionsState = {
  data: [],
  loading: false,
  error: null,
};

export const emissionsSlice = createSlice({
  name: 'emissions',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      // Handling fetchEmissionsByCountry
      .addCase(fetchEmissionsByCountry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmissionsByCountry.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchEmissionsByCountry.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch emissions by country';
        state.loading = false;
      })
      // Handling fetchEmissionsByCoordinates
      .addCase(fetchEmissionsByCoordinates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmissionsByCoordinates.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchEmissionsByCoordinates.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch emissions by coordinates';
        state.loading = false;
      });
  },
});

export default emissionsSlice.reducer;