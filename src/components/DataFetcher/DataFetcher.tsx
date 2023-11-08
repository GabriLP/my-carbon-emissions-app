import React, { useState } from 'react';
import CountrySelection from '../CountrySelection/CountrySelection';
import DateInput from '../DateInput/DateInput';
import EmissionsChart from '../EmissionsChart/EmissionsChart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmissionsByCountry } from '../../features/emissions/emissionsAPI';
import { AppDispatch } from 'src/app/store';
import { RootState } from 'src/app/store';

const DataFetcher: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [country, setCountry] = useState<string>('');
    const [dates, setDates] = useState<{ startDate: string; endDate: string }>({
        startDate: '',
        endDate: '',
    });
    
    // Consolidate state selection
    const { data, loading, error } = useSelector((state: RootState) => state.emissions);

    const handleCountrySelect = (selectedCountry: string) => {
        setCountry(selectedCountry);
    };

    const handleDatesChange = (selectedDates: { startDate: string; endDate: string }) => {
        setDates(selectedDates);
    };

    const handleSubmit = async () => {
        if (!country || !dates.startDate || !dates.endDate) {
            alert('Please select a country and date range.');
            return;
        }
        
        await dispatch(fetchEmissionsByCountry({ 
            country, 
            startDate: dates.startDate, 
            endDate: dates.endDate 
        }));
    };

    return (
        <div>
            <CountrySelection onCountrySelect={handleCountrySelect} />
            <DateInput onDatesChange={handleDatesChange} />
            <button onClick={handleSubmit}>Fetch Data</button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && data.length > 0 && (
                <EmissionsChart 
                    country={country} 
                    startDate={dates.startDate} 
                    endDate={dates.endDate}
                    data={data} // Assume EmissionsChart can receive data as a prop
                />
            )}
        </div>
    );
};

export default DataFetcher;