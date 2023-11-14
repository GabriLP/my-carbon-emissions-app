import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReactDOMServer from 'react-dom/server';

interface EmissionsMapProps {
  onCoordinateSelect: (latitude: number, longitude: number) => void;
}

const createMaterialIcon = () => {
  const iconElement = <LocationOnIcon />;
  return ReactDOMServer.renderToString(iconElement);
};

const materialIconHtml = createMaterialIcon();
const materialIcon = L.divIcon({
  html: materialIconHtml,
  iconSize: L.point(40, 40),
  className: ''
});

const EmissionsMap: React.FC<EmissionsMapProps> = ({ onCoordinateSelect }) => {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
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

      if (markerRef.current) {
        markerRef.current.setLatLng(e.latlng);
      } else {
        markerRef.current = L.marker(e.latlng, { icon: materialIcon }).addTo(mapRef.current as L.Map);
      }

      onCoordinateSelect(lat, lng);
    };

    mapRef.current.on('click', onMapClick);

    return () => {
      if (mapRef.current) {
        mapRef.current.off('click', onMapClick);
      }
    };
  }, [onCoordinateSelect]);

  return <div id="map" style={{ height: '500px' }} />;
};

export default EmissionsMap;