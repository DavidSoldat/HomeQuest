'use client';
import dynamic from 'next/dynamic';
import { useEffect, useMemo } from 'react';
import { PropagateLoader } from 'react-spinners';

export default function MapComponent(properties) {
  useEffect(() => {
    import('leaflet');
    import('leaflet-defaulticon-compatibility');
  }, []);

  const Map = useMemo(
    () =>
      dynamic(() => import('@/app/_components/Map'), {
        loading: () => (
          <div className="flex h-full items-center justify-center">
            <PropagateLoader color="#1d4ed8" size={30} />
          </div>
        ),
        ssr: false,
      }),
    [],
  );

  return (
    <div className="hidden h-full w-3/5 lg:block">
      <Map properties={properties} />
    </div>
  );
}
