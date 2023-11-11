import React, { useState, useEffect } from 'react';

// Define the props type
interface CoordinateCheckPageProps {
  onCoordinateCheck: (latitude: number, longitude: number) => void;
}

const CoordinateCheckPage: React.FC<CoordinateCheckPageProps> = ({ onCoordinateCheck }) => {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const isValidCoordinate = (value: string, type: 'latitude' | 'longitude') => {
    const num = parseFloat(value);
    return !isNaN(num) && (type === 'latitude' ? num >= -90 && num <= 90 : num >= -180 && num <= 180);
  };

  const handleLatitudeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongitude(event.target.value);
  };

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    if (isValidCoordinate(latitude, 'latitude') && isValidCoordinate(longitude, 'longitude')) {
      onCoordinateCheck(parseFloat(latitude), parseFloat(longitude));
    }

  }, [latitude, longitude, onCoordinateCheck, isFirstLoad]);

  return (
    <div className="coordinate-check-page">
      <h2>Check Emissions by Coordinates</h2>
      <p>Enter latitude and longitude coordinates to analyze emissions data for a specific location.</p>

      <div className="coordinate-inputs">
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={handleLatitudeChange}
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={handleLongitudeChange}
        />
      </div>
    </div>
  );
};

export default CoordinateCheckPage;