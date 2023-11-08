import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getLastSixMonthsDates = () => {
    const end = new Date();
    const start = new Date(new Date().setMonth(end.getMonth() - 6));
  
    const formatDate = (date: Date) => date.toISOString().split('T')[0];
  
    return {
      start: formatDate(start),
      end: formatDate(end),
    };
  };

interface EmissionData {
  co2: number;
  date: string;
}

interface EmissionsDataProps {
  country: string;
}

const EmissionsData: React.FC<EmissionsDataProps> = ({ country }) => {
  const [emissionData, setEmissionData] = useState<EmissionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { start, end } = getLastSixMonthsDates();

  useEffect(() => {
    // If there is no country selected, don't attempt to fetch data
    if (!country) return;

    const endpoint = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${country}&begin=${start}&end=${end}`;

    axios.get(endpoint)
      .then(response => {
        setEmissionData(response.data);
        setLoading(false);
      })
      .catch(error => {
        const errorMessage = error.response?.data?.message || 'Failed to fetch emission data';
        setError(errorMessage);
        setLoading(false);
      });
  }, [country, end, start]); // Rerun the effect if the country prop changes

  if (loading) {
    return <div>Loading emission data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Emission Data for {country}</h2>
      {emissionData.map((data, index) => (
        <div key={index}>
          <p>Date: {data.date}</p>
          <p>CO2: {data.co2}</p>
        </div>
      ))}
    </div>
  );
};

export default EmissionsData;