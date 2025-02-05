import ListingModal from '@/app/_components/ListingModal';
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
    <ListingModal>
      <PropertyPage property={property} agent={agent} />
    </ListingModal>
  );
}
