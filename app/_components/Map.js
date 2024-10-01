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
    <div className="flex h-full flex-col gap-3">
      <SearchInput onSearch={handleSearchSubmit} />
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <LeafletControlGeocoder
          submittedValue={submittedValue}
          setPosition={setPosition}
        />
      </MapContainer>
    </div>
  );
}
