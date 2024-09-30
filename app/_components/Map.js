'use client';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import SearchInput from './SearchInput';
import { useState } from 'react';

import LeafletControlGeocoder from './Geocoder';

export default function MyMap() {
  const [position, setPosition] = useState([44.7716, 17.1988]);
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSearchSubmit = (query) => {
    setSubmittedValue(query);
  };

  return (
    // <div className="h-full w-3/5 overflow-hidden py-4">
    <div className="flex h-full w-3/5 flex-col py-4">
      {' '}
      <SearchInput onSearch={handleSearchSubmit} />
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletControlGeocoder
          submittedValue={submittedValue}
          setPosition={setPosition}
        />
      </MapContainer>
    </div>
  );
}
