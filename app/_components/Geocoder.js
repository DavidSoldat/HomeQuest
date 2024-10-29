'use client';
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
    async function geocode(query) {
      const bbox = '15.75,42.5,19.6,45.3';
      const url = `https://photon.komoot.io/api/?q=${query}&bbox=${bbox}&limit=5`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('Geocode Results:', data.features);

        const filteredResults = data.features.filter((result) =>
          ['city', 'town', 'neighbourhood', 'suburb'].includes(
            result.properties.type,
          ),
        );

        const result =
          filteredResults.length > 0 ? filteredResults[0] : data.features[0];

        if (result) {
          const latlng = [
            result.geometry.coordinates[1],
            result.geometry.coordinates[0],
          ];
          setPosition(latlng);

          if (result.bbox) {
            const bounds = [
              [result.bbox[1], result.bbox[0]], // SW
              [result.bbox[3], result.bbox[2]], // NE
            ];
            map.fitBounds(bounds);
          } else {
            map.setView(latlng, 15);
          }
        } else {
          toast('⛔ Location not found or it does not meet the criteria.');
        }
      } catch (error) {
        console.error('Geocoding error:', error);
        toast('⛔ An error occurred while geocoding. Please try again.');
      }
    }

    if (submittedValue) {
      geocode(submittedValue);
    }
  }, [map, setPosition, submittedValue]);

  return null;
}
