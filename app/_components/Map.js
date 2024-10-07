'use client';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { formatPrice } from '../_lib/helpers';
import LeafletControlGeocoder from './Geocoder';
import SearchInput from './SearchInput';

export default function MyMap({ properties }) {
  const [position, setPosition] = useState([44.7716, 17.1988]);
  const [submittedValue, setSubmittedValue] = useState('');

  const createPriceMarker = (price, propertyId) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<a href='/buy/${propertyId}'  class="property-pill">
      <div class='pill-text'>
        ${price}
      </div></a>`,
      iconSize: [45, 19],
      iconAnchor: [22.5, 19],
    });
  };

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
        {properties.properties.map((property) => {
          return (
            <Marker
              key={property.id}
              position={[property.lat, property.lng]}
              icon={createPriceMarker(formatPrice(property.price), property.id)}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
