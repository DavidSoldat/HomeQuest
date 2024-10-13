import { properties } from '@/app/_components/AgentPageCard';
import SearchInput from '@/app/_components/SearchInput';
import SoldPropertyCard from '@/app/_components/SoldPropertyCard';
import { getProperties } from '@/app/_lib/actions';
import MapComponent from '../../_components/MapComponent';
import PropertyCard from '@/app/_components/PropertyCard';

export const metadata = {
  title: 'Buy',
};

export default async function Buy() {
  const properties = await getProperties();
  return (
    <div className="mt-3 flex w-full flex-col lg:flex-row">
      <MapComponent properties={properties} />
      <div className="hidden w-2/5 lg:block">
        <div className="grid max-h-full grid-cols-1 gap-3 overflow-y-auto px-3 pb-1 2xl:grid-cols-2">
          {properties.map((property, index) => (
            <PropertyCard property={property} key={index} />
          ))}
        </div>
      </div>
      <div className="mb-3 pl-1 pr-4 lg:hidden">
        <SearchInput />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 overflow-scroll px-4 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
        {properties.map((property, index) => (
          <PropertyCard property={property} key={index} />
        ))}
      </div>
    </div>
  );
}
