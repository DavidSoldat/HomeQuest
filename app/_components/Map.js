'use client';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { formatPrice } from '../_lib/helpers';
import DivIconPill from './DivIconPill';
import LeafletControlGeocoder from './Geocoder';
import PropertyPopover from './PropertyPopover';
import SearchInput from './SearchInput';

export default function MyMap({ properties }) {
  const [position, setPosition] = useState([44.7716, 17.1988]);
  const [submittedValue, setSubmittedValue] = useState('');
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [isAbove, setIsAbove] = useState(true);
  const popoverRef = useRef(null);

  const createPriceMarker = (price, propertyId) => {
    return L.divIcon({
      className: 'custom-marker',
      html: renderToString(DivIconPill(price, propertyId)),
      iconSize: [45, 19],
      iconAnchor: [22.5, 19],
    });
  };

  const handleSearchSubmit = (query) => {
    setSubmittedValue(query);
  };

  const handleMarkerClick = (property, map) => {
    const markerPosition = map.latLngToContainerPoint([
      property.lat,
      property.lng,
    ]);

    setSelectedMarker({
      lat: property.lat,
      lng: property.lng,
      property: property,
    });

    setPopoverPosition({
      top: markerPosition.y,
      left: markerPosition.x,
    });

    setIsAbove(markerPosition.y > window.innerHeight / 3);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setSelectedMarker(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverRef]);

  return (
    <div className="relative flex h-full flex-col gap-3">
      <SearchInput onSearch={handleSearchSubmit} />

      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        className="z-0 h-full w-full"
        whenCreated={(map) => {
          setPosition(map.getCenter());
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          // url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LeafletControlGeocoder
          submittedValue={submittedValue}
          setPosition={setPosition}
        />

        {properties.properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.lat, property.lng]}
            icon={createPriceMarker(formatPrice(property.price), property.id)}
            eventHandlers={{
              click: (e) => handleMarkerClick(property, e.target._map),
            }}
          />
        ))}
      </MapContainer>
      {selectedMarker && (
        <div
          ref={popoverRef}
          style={{
            position: 'absolute',
            top: isAbove ? popoverPosition.top - 260 : popoverPosition.top + 60,
            left: popoverPosition.left - 120,
            zIndex: 1000,
          }}
          onClick={() => setSelectedMarker(null)}
          className="popover-container rounded-md bg-white shadow-lg"
        >
          <PropertyPopover property={selectedMarker.property} />
        </div>
      )}
    </div>
  );
}
