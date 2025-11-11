import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom component to update map view
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

const LocationMap = ({ location }) => {
  if (!location) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <MapContainer
          center={[28.3949, 84.1240]}
          zoom={7}
          style={{ height: '400px', width: '100%', borderRadius: '0.5rem' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">📍 स्थान (Location)</h3>
      <MapContainer
        center={location.coordinates}
        zoom={10}
        style={{ height: '400px', width: '100%', borderRadius: '0.5rem' }}
      >
        <ChangeView center={location.coordinates} zoom={10} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location.coordinates}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold">{location.city}</p>
              <p className="text-sm text-gray-600">{location.province}</p>
              <p className="text-xs text-gray-500 mt-1">Accuracy: {location.accuracy}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-xs text-blue-600 font-semibold">Province</p>
          <p className="text-sm font-bold text-gray-800">{location.province}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <p className="text-xs text-green-600 font-semibold">City</p>
          <p className="text-sm font-bold text-gray-800">{location.city}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
