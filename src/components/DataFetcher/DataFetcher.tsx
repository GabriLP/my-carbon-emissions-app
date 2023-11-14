// DataFetcher.tsx
import React, { useState } from 'react';
import CountrySelection from '../CountrySelection/CountrySelection';
import DateInput from '../DateInput/DateInput';
import EmissionsChart from '../EmissionsChart/EmissionsChart';
import ProductSelect from '../ProductSelect/ProductSelect';
import { useSelector } from 'react-redux';
import { fetchEmissionsByCountry } from '../../features/emissions/emissionsAPI';
import { RootState, useAppDispatch } from '../../app/store';

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
        // Correctly dispatch the action, no need to await as dispatch can handle the promise itself
        dispatch(fetchEmissionsByCountry({ country, startDate: dates.startDate, endDate: dates.endDate, product }));
    };

    // No need to transform data, assume the EmissionsChart expects the same shape as the API response
    // and the redux state stores.

    return (
        <div>
            <CountrySelection onCountrySelect={handleCountrySelect} />
            <DateInput onDatesChange={handleDatesChange} />
            <ProductSelect value={product} onChange={setProduct} />
            <button onClick={handleSubmit} disabled={loading}>Fetch Data</button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && data && data.length > 0 && (
                <EmissionsChart data={data} />
            )}
        </div>
    );
};

export default DataFetcher;
