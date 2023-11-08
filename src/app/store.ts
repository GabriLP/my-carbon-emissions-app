import { configureStore } from '@reduxjs/toolkit';
import emissionsReducer from '../features/emissions/emissionsSlice';
import countriesReducer from '../features/countries/countriesSlice';

export const store = configureStore({
  reducer: {
    emissions: emissionsReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;