import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customIconUrl from '../assets/icon.svg';

// Remove default icon URL
delete L.Icon.Default.prototype._getIconUrl;

// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [46, 56],
  iconAnchor: [22, 56],
});

const Map = ({ data }) => {
  const mapRef = useRef();
  const { location } = data || {};
  const { lat, lng } = location || {};
  
  useEffect(() => {
    if (mapRef.current && lat !== undefined && lng !== undefined) {
      const map = mapRef.current;
      map.setView([lat, lng], map.getZoom());
    }
  }, [data]);

  const position = [lat, lng];

  return (
    <MapContainer
      className='map'
      center={position}
      zoom={13}
      whenCreated={mapInstance => (mapRef.current = mapInstance)}
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data && location && (
        <Marker position={position} icon={customIcon}>
          <Popup>
            {`IP: ${data.ip}`}<br />
            {`Location: ${location.city}, ${location.country}`}<br />
            {`Timezone: ${location.timezone}`}<br />
            {`ISP: ${data.isp}`}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;