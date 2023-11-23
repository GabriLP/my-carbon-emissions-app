import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { Helmet } from 'react-helmet';
import CountrySelection from '../CountrySelection/CountrySelection';
import DateInput from '../DateInput/DateInput';
import EmissionsChart from '../EmissionsChart/EmissionsChart';
import ProductSelect from '../ProductSelect/ProductSelect';
import { useSelector } from 'react-redux';
import { fetchEmissionsByCountry } from '../../features/emissions/emissionsAPI';
import { RootState, useAppDispatch } from '../../app/store';
import { Button, CircularProgress, Box, Snackbar, Alert } from '@mui/material';
import { resetEmissionsData } from '../../features/emissions/emissionsSlice';

const DataFetcher: React.FC = () => {
    const dispatch = useAppDispatch();
    const [country, setCountry] = useState<string>('');
    const [dates, setDates] = useState<{ startDate: string; endDate: string }>({ startDate: '', endDate: '' });
    const { data, loading, error } = useSelector((state: RootState) => state.emissions);
    const [product, setProduct] = useState<string>('carbonmonoxide');
    const [snackbarError, setSnackbarError] = useState<string>('');

    const handleCountrySelect = (selectedCountry: string) => {
        setCountry(selectedCountry);
    };

    const handleDatesChange = (selectedDates: { startDate: string; endDate: string }) => {
        setDates(selectedDates);
    };

    const debouncedFetchEmissionsByCountry = useCallback(
        debounce((country, startDate, endDate, product) => {
          dispatch(fetchEmissionsByCountry({ country, startDate, endDate, product }));
        }, 300),
        [dispatch]
      );

      const handleSubmit = useCallback(() => {
        if (!country || !dates.startDate || !dates.endDate) {
          setSnackbarError('Please select a country and date range.');
          return;
        }
        debouncedFetchEmissionsByCountry(country, dates.startDate, dates.endDate, product);
    }, [country, dates, product, debouncedFetchEmissionsByCountry]);

    useEffect(() => {
        dispatch(resetEmissionsData());
    }, [dispatch]);

    return (
        <Box sx={{ padding: 3 }}>
        <Helmet>
                <title>Emissions by Country | GlobalEmissions</title>
                <meta
                    name="description"
                    content="Compare emissions data from different countries around the world."
                />
        </Helmet>
            <CountrySelection onCountrySelect={handleCountrySelect} />
            <DateInput onDatesChange={handleDatesChange} />
            <ProductSelect value={product} onChange={setProduct} />
            <Box>
                <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
                    Fetch Data
                </Button>
            </Box>

            {loading && <Box display="flex" justifyContent="center"><CircularProgress /></Box>}
            {!loading && !error && data && data.length > 0 && <EmissionsChart data={data} />}
            <Snackbar open={snackbarError !== ''} autoHideDuration={6000} onClose={() => setSnackbarError('')}>
                <Alert onClose={() => setSnackbarError('')} severity="error" sx={{ width: '100%' }}>
                    {snackbarError}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default DataFetcher;