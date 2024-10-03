import { getProperties, getProperty } from '@/app/_lib/actions';

export async function generateMetadata({ params }) {
  const { id } = await getProperty(params.propertyId);
  return {
    title: `${id}`,
  };
}

export async function generateStaticParams() {
  const properties = await getProperties();
  const ids = properties.map((property) => ({
    propertyId: String(property.id),
  }));
  return ids;
}
export default async function Page({ params }) {
  const property = await getProperty(params.propertyId);
  return (
    <div className="h-full w-full px-4 py-10 md:max-w-6xl lg:mx-auto">
      <div>{property.city}</div>{' '}
    </div>
  );
}
