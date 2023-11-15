import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCountries } from '../../features/countries/countriesAPI';
import { useAppDispatch, RootState } from '../../app/store';
import { Typography, FormControl, InputLabel, MenuItem, CircularProgress, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface CountrySelectionProps {
  onCountrySelect: (countryCode: string) => void;
}

interface Country {
  name: string;
  code: string;
}

const CountrySelection: React.FC<CountrySelectionProps> = ({ onCountrySelect }) => {
  const dispatch = useAppDispatch();
  const { list: countries, loading, error } = useSelector((state: RootState) => state.countries);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleCountrySelect = (event: SelectChangeEvent<string>) => {
    const selectedName = event.target.value as string;
    setSelectedCountry(selectedName);
    
    const countryObject = countries.find(c => c.name === selectedName);
    const countryCode = countryObject ? countryObject.code : '';
    if (countryCode) {
      onCountrySelect(countryCode);
    }
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Select a Country</Typography>
      <Typography variant="body1" gutterBottom>
        Choose a country to analyze its carbon emissions data.
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="country-select-label">Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={selectedCountry}
          label="Country"
          onChange={handleCountrySelect}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {countries.map((country: Country) => (
            <MenuItem key={country.code} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountrySelection;