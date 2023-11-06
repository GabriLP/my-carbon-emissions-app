import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Carbon Emissions Dashboard</h2>
      <p>Welcome to the dashboard of our carbon emissions tracking app. Here, you can get a quick overview of emissions data and important statistics.</p>

      <div className="emissions-stats">
        <div className="stat-box">
          <h3>Current Global Emissions</h3>
          <p>XX Megatons</p>
        </div>

        <div className="stat-box">
          <h3>Your Selected Country</h3>
          <p>Country Name</p>
        </div>

        <div className="stat-box">
          <h3>Emissions for the Last 6 Months</h3>
          <p>XX Megatons</p>
        </div>
      </div>

      <div className="action-buttons">
        <button>View Country Data</button>
        <button>Check Emissions by Coordinates</button>
      </div>
    </div>
  );
};

export default Dashboard;