import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CountrySelection from './components/CountrySelection/CountrySelection';
import CoordinateCheck from './components/CoordinateCheck/CoordinateCheck';
import HistoricalGraph from './components/HistoricalGraph/HistoricalGraph';
import EducationalContent from './components/EducationalContent/EducationalContent';

const AppRoutes: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [emissionsData, setEmissionsData] = useState<number[]>([]);
  const navigate = useNavigate(); // Hook for navigation

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    navigate(`/country/${country}`); // Navigate to the selected country route
  };

  const handleCheckCoordinates = (latitude: number, longitude: number) => {
    navigate(`/coordinate/${latitude}/${longitude}`); // Navigate to the coordinate route
  };

  return (
    <Routes>
      {/* Define the base route as the Dashboard which users see after onboarding */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/country" element={<CountrySelection onCountrySelect={handleCountrySelect} />} />
      <Route path="/coordinate" element={<CoordinateCheck onCoordinateCheck={handleCheckCoordinates} />} />
      <Route path="/historical" element={<HistoricalGraph selectedCountry={selectedCountry} emissionsData={emissionsData} />} />
      <Route path="/educational" element={<EducationalContent />} />
    </Routes>
  );
};

export default AppRoutes;