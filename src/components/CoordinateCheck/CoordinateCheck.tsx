import React, { useState } from 'react';

// Define the props type
interface CoordinateCheckPageProps {
  onCoordinateCheck: (latitude: number, longitude: number) => void;
}

const CoordinateCheckPage: React.FC<CoordinateCheckPageProps> = ({ onCoordinateCheck }) => {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');

  const isValidCoordinate = (value: string, type: 'latitude' | 'longitude') => {
    const num = parseFloat(value);
    if (isNaN(num)) return false;

    return type === 'latitude' ? num >= -90 && num <= 90 : num >= -180 && num <= 180;
  };

  const handleLatitudeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongitude(event.target.value);
  };

  const handleCheckCoordinates = () => {
    if (!isValidCoordinate(latitude, 'latitude')) {
      alert('Please enter a valid latitude within the range -90 to 90.');
      return;
    }
    
    if (!isValidCoordinate(longitude, 'longitude')) {
      alert('Please enter a valid longitude within the range -180 to 180.');
      return;
    }

    // We can safely assert that these are numbers after our validation
    onCoordinateCheck(parseFloat(latitude), parseFloat(longitude));
  };

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

      <button onClick={handleCheckCoordinates}>Check Emissions</button>
    </div>
  );
};

export default CoordinateCheckPage;