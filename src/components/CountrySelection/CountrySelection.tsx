import React, { useState, useEffect } from 'react';
import axios from 'axios';
import csvtojson from 'csvtojson';

interface CountrySelectionProps {
  onCountrySelect: (country: string) => void;
}

interface Country {
  name: string;
  code: string;
}

const CountrySelection: React.FC<CountrySelectionProps> = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // We are directly fetching the CSV file in this example
    const csvUrl = 'https://datahub.io/core/country-list/r/data.csv';

    axios.get(csvUrl)
      .then(response => {
        // axios doesn't automatically parse CSV files, so we do it manually
        return csvtojson().fromString(response.data);
      })
      .then(jsonData => {
        console.log(jsonData); // log to see the structure and confirm data is received
        // Transform the jsonData to the structure expected by our component
        const formattedCountries = jsonData.map((item: any) => ({
          name: item.Name, // Adjust based on actual keys from jsonData
          code: item.Code, // Adjust based on actual keys from jsonData
        }));
        setCountries(formattedCountries);
      })
      .catch(error => {
        setError('Error fetching countries');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCountrySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedCountry(selected);
  };

  const handleCountrySubmit = () => {
    if (selectedCountry) {
      onCountrySelect(selectedCountry);
    } else {
      alert('Please select a country before proceeding.');
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
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <button onClick={handleCountrySubmit}>Submit</button>
    </div>
  );
};

export default CountrySelection;