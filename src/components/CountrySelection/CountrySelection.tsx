import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../features/countries/countriesAPI';
import { AppDispatch, RootState } from '../../app/store';

interface CountrySelectionProps {
  onCountrySelect: (countryCode: string) => void;
}

interface Country {
  name: string;
  code: string;
}

const CountrySelection: React.FC<CountrySelectionProps> = ({ onCountrySelect }) => {
  const dispatch: AppDispatch = useDispatch();
  const { list: countries, loading, error } = useSelector((state: RootState) => state.countries);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  useEffect(() => {
    // Fetch countries only once when the component mounts
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleCountrySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;
    setSelectedCountry(selectedName);
    
    // Immediately find and use the country code to call onCountrySelect
    const countryObject = countries.find(c => c.name === selectedName);
    const countryCode = countryObject ? countryObject.code : '';
    if (countryCode) {
      onCountrySelect(countryCode);
    }
  };

  if (loading) {
    return <div>Loading countries...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="country-selection-page">
      <h2>Select a Country</h2>
      <p>Choose a country to analyze its carbon emissions data.</p>
      <select onChange={handleCountrySelect} value={selectedCountry}>
        <option value="">Select a Country</option>
        {countries.map((country: Country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelection;