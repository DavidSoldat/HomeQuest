import BackButton from '@/app/_components/BackButton';
import PropertyPage from '@/app/_components/PropertyPage';
import { getAgent, getProperty } from '@/app/_lib/actions';

export async function generateMetadata({ params }) {
  const property = await getProperty(params.propertyId);
  return {
    title: `${property.address}, ${property.city}`,
  };
}

export default async function Page({ params: { propertyId } }) {
  const property = await getProperty(propertyId);
  const agent = await getAgent(property.agentId);

  return (
    <div className="w-full overflow-y-auto">
      <div className="px-4 py-3 md:max-w-6xl lg:mx-auto">
        <BackButton scroll={false} />
        <PropertyPage property={property} agent={agent} />
      </div>
    </div>
  );
}
