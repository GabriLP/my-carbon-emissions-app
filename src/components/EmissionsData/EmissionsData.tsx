import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmissionsByCountry } from 'src/features/emissions/emissionsAPI';

interface EmissionData {
  average: number;
  start: string;
  end: string;
}

interface RootState {
  emissions: {
    data: EmissionData[];
    loading: boolean;
    error: string | null;
  };
}

interface EmissionsDataProps {
  country: string;
  startDate: string;
  endDate: string; 
}

const EmissionsData: React.FC<EmissionsDataProps> = ({ country, startDate, endDate }) => {
  const dispatch = useDispatch();
  const { data: emissionData, loading, error } = useSelector((state: RootState) => state.emissions);

  useEffect(() => {
    if (country && startDate && endDate) {
      //dispatch(fetchEmissionsByCountry({ country, startDate, endDate }));
    }
  }, [country, startDate, endDate, dispatch]);

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
          <p>Start Date: {data.start}</p>
          <p>End Date: {data.end}</p>
          <p>Average CO2: {data.average}</p>
        </div>
      ))}
    </div>
  );
};

export default EmissionsData;