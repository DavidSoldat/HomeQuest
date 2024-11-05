import React, { Suspense } from 'react';
import PropertyCard from '@/app/_components/PropertyCard';
import SearchInput from '@/app/_components/SearchInput';
import { getPropertiesRent } from '@/app/_lib/actions';
import MapComponent from '../../_components/MapComponent';
import Loader from '@/app/_components/Loader';

export const metadata = {
  title: 'Rent',
};

export default async function Rent() {
  const properties = await getPropertiesRent();

  return (
    <div className="mt-3 flex w-full flex-col lg:flex-row">
      <MapComponent properties={properties} />

      <div className="hidden w-2/5 lg:block">
        <Suspense fallback={<Loader />}>
          {properties.length > 0 ? (
            <div className="grid max-h-full grid-cols-1 gap-3 overflow-y-auto px-3 pb-1 2xl:grid-cols-2">
              {properties.map((property) => (
                <PropertyCard property={property} key={property.id} />
              ))}
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-gray-800">
              No properties for rent
            </div>
          )}
        </Suspense>
      </div>

      <div className="mb-3 pl-1 pr-4 lg:hidden">
        <SearchInput />
      </div>

      <div className="grid w-full grid-cols-1 gap-4 overflow-y-scroll px-4 pb-2 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
        <Suspense fallback={<Loader />}>
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))
          ) : (
            <div className="col-span-3 mt-6 flex h-full w-full items-center justify-center text-2xl font-semibold text-gray-800">
              No properties for rent
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
