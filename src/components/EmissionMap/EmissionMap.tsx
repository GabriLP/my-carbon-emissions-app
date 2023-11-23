import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReactDOMServer from 'react-dom/server';
import { Box } from '@mui/material';
import L, { LeafletMouseEvent } from 'leaflet';

interface EmissionsMapProps {
  onCoordinateSelect: (latitude: number, longitude: number) => void;
}

const EmissionsMap: React.FC<EmissionsMapProps> = ({ onCoordinateSelect }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<L.Marker | null>(null); // Ref to store the current marker

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current) {
      const L = require('leaflet');
      require('leaflet/dist/leaflet.css');

      const createMaterialIcon = () => {
        const iconHtml = ReactDOMServer.renderToString(<LocationOnIcon />);
        return L.divIcon({
          html: iconHtml,
          iconSize: L.point(40, 40),
          className: ''
        });
      };

      const materialIcon = createMaterialIcon();
      const map = L.map(mapRef.current, {
        center: [40, 20],
        zoom: 3,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      map.on('click', (e: LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;

        // Remove the existing marker if there is one
        if (markerRef.current) {
          map.removeLayer(markerRef.current);
        }

        // Add a new marker and update the markerRef
        markerRef.current = L.marker([lat, lng], { icon: materialIcon }).addTo(map);

        onCoordinateSelect(lat, lng);
      });
    }
  }, [onCoordinateSelect]);

  return (
    <Box ref={mapRef} sx={{ height: 500, width: '90%', margin: 'auto' }} />
  );
};

export default dynamic(() => Promise.resolve(EmissionsMap), {
  ssr: false,
  loading: () => <p>Loading...</p>
});