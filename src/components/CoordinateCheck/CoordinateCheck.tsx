import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

interface CoordinateCheckPageProps {
  onCoordinateCheck: (latitude: number, longitude: number) => void;
  latitude: string;
  longitude: string;
}

const CoordinateCheckPage: React.FC<CoordinateCheckPageProps> = ({ onCoordinateCheck, latitude, longitude }) => {
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
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Typography variant="h5" gutterBottom>
          Check Emissions by Coordinates
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter latitude and longitude coordinates or click any point of the map to analyze emissions data for a specific location.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      <TextField
        id="latitude-input"
        label="Latitude"
        type="text"
        placeholder="Enter latitude"
        value={inputLatitude}
        onChange={(e) => setInputLatitude(e.target.value)}
        variant="outlined"
        sx={{ maxWidth: 300}}
        fullWidth
      />
      <TextField
        id="longitude-input"
        label="Longitude"
        type="text"
        placeholder="Enter longitude"
        value={inputLongitude}
        onChange={(e) => setInputLongitude(e.target.value)}
        variant="outlined"
        sx={{ maxWidth: 300}}
        fullWidth
      />
    </Box>
      </Box>
  </motion.div>
  );
};

export default CoordinateCheckPage;