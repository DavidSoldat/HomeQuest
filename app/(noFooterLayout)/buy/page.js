import PropertyCard from '@/app/_components/PropertyCard';
import MapComponent from '../../_components/MapComponent';
import { properties } from '@/app/_components/AgentPageCard';
import SearchInput from '@/app/_components/SearchInput';

export const metadata = {
  title: 'Buy',
};

function Buy() {
  return (
    <div className="mt-3 flex w-full flex-col lg:flex-row">
      <MapComponent />
      <div className="hidden w-2/5 lg:block">
        <div className="grid max-h-full grid-cols-1 gap-3 overflow-y-auto px-3 2xl:grid-cols-2">
          {properties.map((property, index) => (
            <PropertyCard property={property} key={index} />
          ))}
        </div>
      </div>
      <div className="mb-3 pl-1 pr-4 lg:hidden">
        <SearchInput />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
        {properties.map((property, index) => (
          <PropertyCard property={property} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Buy;
