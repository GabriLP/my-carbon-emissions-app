import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import routesConfig from './routesConfig';
import { EmissionData } from './features/emissions/emissionsAPI';

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  
  // Define the handlers and state for passing to components
  const handleCountrySelect = (country: string) => {
    navigate(`/country/${country}`);
  };

  const handleCoordinateCheck = (lat: number, lng: number) => {
    navigate(`/coordinate/${lat}/${lng}`);
  };

  // Assume you have some state for selectedCountry and emissionsData
  const selectedCountry = ''; // Replace with actual state logic
  const emissionsData: EmissionData[] = []; // Replace with actual state logic

  return (
    <Routes>
      {routesConfig.map((route) => {
        // Check if the route has a render function
        if (route.render) {
          // Call the render function and pass the required props
          return (
            <Route
              key={route.name}
              path={route.path}
              element={route.render({
                handleCountrySelect,
                handleCoordinateCheck,
                selectedCountry,
                emissionsData
              })}
            />
          );
        } else {
          // If no render function, just render the component
          return (
            <Route
              key={route.name}
              path={route.path}
              element={route.element}
            />
          );
        }
      })}
    </Routes>
  );
};

export default AppRoutes;