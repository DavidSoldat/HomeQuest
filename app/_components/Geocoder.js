'use client';
import * as L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useMap } from 'react-leaflet';

export default function LeafletControlGeocoder({
  submittedValue,
  setPosition,
}) {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();
    if (submittedValue) {
      geocoder.geocode(submittedValue, (results) => {
        if (results.length > 0) {
          const latlng = results[0].center;
          setPosition(latlng);
          map.setView(latlng, 13);
        } else {
          toast('⛔ Location not found. Try again');
        }
      });
    }
  }, [map, setPosition, submittedValue]);

  return null;
}