import React, { useState } from 'react';
import CountrySelection from '../CountrySelection/CountrySelection';
import DateInput from '../DateInput/DateInput';
import EmissionsChart from '../EmissionsChart/EmissionsChart';
import ProductSelect from '../ProductSelect/ProductSelect';
import { useSelector } from 'react-redux';
import { fetchEmissionsByCountry } from '../../features/emissions/emissionsAPI';
import { RootState, useAppDispatch } from '../../app/store';
import { Button, CircularProgress, Box, Alert } from '@mui/material';

const DataFetcher: React.FC = () => {
    const dispatch = useAppDispatch();
    const [country, setCountry] = useState<string>('');
    const [dates, setDates] = useState<{ startDate: string; endDate: string }>({ startDate: '', endDate: '' });
    const { data, loading, error } = useSelector((state: RootState) => state.emissions);
    const [product, setProduct] = useState<string>('carbonmonoxide');

    const handleCountrySelect = (selectedCountry: string) => {
        setCountry(selectedCountry);
    };

    const handleDatesChange = (selectedDates: { startDate: string; endDate: string }) => {
        setDates(selectedDates);
    };

    const handleSubmit = () => {
        if (!country || !dates.startDate || !dates.endDate) {
            alert('Please select a country and date range.');
            return;
        }
        dispatch(fetchEmissionsByCountry({ country, startDate: dates.startDate, endDate: dates.endDate, product }));
    };

    return (
        <Box sx={{ padding: 3 }}>
            <CountrySelection onCountrySelect={handleCountrySelect} />
            <DateInput onDatesChange={handleDatesChange} />
            <ProductSelect value={product} onChange={setProduct} />
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
                Fetch Data
            </Button>
            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
            {!loading && !error && data && data.length > 0 && (
                <EmissionsChart data={data} />
            )}
        </Box>
    );
};

export default DataFetcher;