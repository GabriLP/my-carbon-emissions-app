import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { fetchEmissionsByCoordinates } from 'src/features/emissions/emissionsAPI';
import CoordinateCheckPage from '../CoordinateCheck/CoordinateCheck';
import DateInput from '../DateInput/DateInput';
import EmissionsChart from '../EmissionsChart/EmissionsChart';
import { RootState, useAppDispatch } from '../../app/store';
import EmissionsMap from '../EmissionMap/EmissionMap';
import ProductSelect from '../ProductSelect/ProductSelect';
import { Box, Button, CircularProgress, Alert } from '@mui/material';

const EmissionsCoordinate: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.emissions);
  const [coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null);
  const [dates, setDates] = useState<{ startDate: string, endDate: string } | null>(null);
  const [selectedCoordinates, setSelectedCoordinates] = useState<{ lat: string, lng: string }>({ lat: '', lng: '' });
  const [product, setProduct] = useState<string>('carbonmonoxide');


  const handleCoordinateCheck = useCallback((latitude: number, longitude: number) => {
    setCoordinates({ lat: latitude, lng: longitude });
  }, []);

  const handleMapCoordinateSelect = useCallback((latitude: number, longitude: number) => {
    const formattedLat = parseFloat(latitude.toFixed(3));
    const formattedLng = parseFloat(longitude.toFixed(3));

    setSelectedCoordinates({ lat: formattedLat.toString(), lng: formattedLng.toString() });
    setCoordinates({ lat: formattedLat, lng: formattedLng });
  }, []);

  const handleDatesChange = (selectedDates: { startDate: string, endDate: string }) => {
    setDates(selectedDates);
  };

  const handleSubmit = () => {
    if (!coordinates || !dates || !dates.startDate || !dates.endDate) {
      alert('Please select coordinates and date range.');
      return;
    }
    dispatch(fetchEmissionsByCoordinates({
      lat: coordinates.lat,
      lng: coordinates.lng,
      startDate: dates.startDate,
      endDate: dates.endDate,
      product
    }));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <CoordinateCheckPage
        onCoordinateCheck={handleCoordinateCheck}
        latitude={selectedCoordinates.lat}
        longitude={selectedCoordinates.lng}
      />
      <DateInput onDatesChange={handleDatesChange} />
      <ProductSelect value={product} onChange={setProduct} />
      <EmissionsMap onCoordinateSelect={handleMapCoordinateSelect} />

      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit} 
        disabled={loading}
        sx={{ mt: 2 }}
      >
        Fetch Data
      </Button>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && data && data.length > 0 && (
        <EmissionsChart data={data} />
      )}
    </Box>
  );
};

export default EmissionsCoordinate;
