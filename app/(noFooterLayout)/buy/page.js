import Loader from '@/app/_components/Loader';
import PropertyCard from '@/app/_components/PropertyCard';
import SearchInput from '@/app/_components/SearchInput';
import { getPropertiesSale } from '@/app/_lib/actions';
import { Suspense } from 'react';
import MapComponent from '../../_components/MapComponent';

export const metadata = {
  title: 'Buy',
};

export default async function Buy() {
  const properties = await getPropertiesSale();

  return (
    <div className="mt-3 flex w-full flex-col lg:flex-row">
      <MapComponent properties={properties} />

      <div className="hidden w-2/5 lg:block">
        <Suspense fallback={<Loader />}>
          {properties.length > 0 ? (
            <div className="grid max-h-full grid-cols-1 gap-3 overflow-y-auto px-3 pb-1 2xl:grid-cols-2">
              {properties.map((property, index) => (
                <PropertyCard property={property} key={index} />
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

      <div className="grid w-full grid-cols-1 items-start gap-4 overflow-scroll px-4 pb-2 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
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
