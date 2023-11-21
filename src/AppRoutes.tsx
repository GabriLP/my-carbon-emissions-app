import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routesConfig from './routesConfig';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
