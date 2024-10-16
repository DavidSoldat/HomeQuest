import PropertyCard from '@/app/_components/PropertyCard';
import { getProperties, getProperty } from '@/app/_lib/actions';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { id } = await getProperty(params.propertyId);
  return {
    title: `${id}`,
  };
}

export default async function Page({ params: { propertyId } }) {
  const property = await getProperty(propertyId);

  return (
    <div className="h-full px-4 py-10 md:max-w-6xl lg:mx-auto">
      <PropertyCard property={property} />
    </div>
  );
}
