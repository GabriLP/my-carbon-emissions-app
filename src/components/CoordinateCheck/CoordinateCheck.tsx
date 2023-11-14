import React, { useState, useEffect } from 'react';

// Define the props type
interface CoordinateCheckPageProps {
  onCoordinateCheck: (latitude: number, longitude: number) => void;
  latitude: string;
  longitude: string;
}

const CoordinateCheckPage: React.FC<CoordinateCheckPageProps> = ({ onCoordinateCheck, latitude, longitude }) => {
  // Use inputLatitude and inputLongitude as your state variables for the input fields
  const [inputLatitude, setInputLatitude] = useState<string>(latitude);
  const [inputLongitude, setInputLongitude] = useState<string>(longitude);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    setInputLatitude(latitude);
    setInputLongitude(longitude);
  }, [latitude, longitude]);

  const isValidCoordinate = (value: string, type: 'latitude' | 'longitude') => {
    const num = parseFloat(value);
    return !isNaN(num) && (type === 'latitude' ? num >= -90 && num <= 90 : num >= -180 && num <= 180);
  };

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    if (isValidCoordinate(inputLatitude, 'latitude') && isValidCoordinate(inputLongitude, 'longitude')) {
      onCoordinateCheck(parseFloat(inputLatitude), parseFloat(inputLongitude));
    }
  }, [inputLatitude, inputLongitude, onCoordinateCheck, isFirstLoad]);

  return (
    <div className="coordinate-check-page">
      <h2>Check Emissions by Coordinates</h2>
      <p>Enter latitude and longitude coordinates to analyze emissions data for a specific location.</p>
      <div className="coordinate-inputs">
        <label htmlFor="latitude-input">Latitude:</label>
      <input
          type="text"
          id="latitude-input"
          name="latitude"
          placeholder="Enter your value"
          value={inputLatitude}
          onChange={(e) => setInputLatitude(e.target.value)}
      />
      <label htmlFor="longitude-input">Longitude:</label>
      <input
          type="text"
          id="longitude-input"
          name="longitude"
          placeholder="Enter your value"
          value={inputLongitude}
          onChange={(e) => setInputLongitude(e.target.value)}
      />
      </div>
    </div>
  );
};

export default CoordinateCheckPage;