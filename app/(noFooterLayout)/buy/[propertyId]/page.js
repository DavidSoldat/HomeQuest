import PropertyPage from '@/app/_components/PropertyPage';
import { getProperty } from '@/app/_lib/actions';

export async function generateMetadata({ params }) {
  const property = await getProperty(params.propertyId);
  return {
    title: `${property.address}, ${property.city}`,
  };
}

export default async function Page({ params: { propertyId } }) {
  const property = await getProperty(propertyId);

  return (
    <div className="h-full px-4 py-10 md:max-w-6xl lg:mx-auto">
      <PropertyPage property={property} />
    </div>
  );
}
