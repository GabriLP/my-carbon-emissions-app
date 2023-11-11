import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface EmissionsMapProps {
  onCoordinateSelect: (latitude: number, longitude: number) => void;
}

const EmissionsMap: React.FC<EmissionsMapProps> = ({ onCoordinateSelect }) => {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map only once
      mapRef.current = L.map('map', {
        center: [0, 0],
        zoom: 2
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    const onMapClick = (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;

      // Add or move the marker
      if (markerRef.current) {
        markerRef.current.setLatLng(e.latlng);
      } else {
        markerRef.current = L.marker(e.latlng).addTo(mapRef.current as L.Map);
      }

      // Trigger the callback with the selected coordinates
      onCoordinateSelect(lat, lng);
    };

    // Attach click event listener
    mapRef.current.on('click', onMapClick);

    return () => {
      // Clean up: Remove event listener
      if (mapRef.current) {
        mapRef.current.off('click', onMapClick);
      }
    };
  }, [onCoordinateSelect]);

  return <div id="map" style={{ height: '500px' }} />;
};

export default EmissionsMap;
