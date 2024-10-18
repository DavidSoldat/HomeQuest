import ListingModal from '@/app/_components/ListingModal';
import PropertyCard from '@/app/_components/PropertyCard';
import PropertyPage from '@/app/_components/PropertyPage';
import { getProperty } from '@/app/_lib/actions';

export async function generateMetadata({ params }) {
  const { id } = await getProperty(params.propertyId);
  return {
    title: `${id}`,
  };
}

export default async function Page({ params: { propertyId } }) {
  const property = await getProperty(propertyId);

  return (
    <ListingModal>
      <PropertyPage property={property} />
    </ListingModal>
  );
}
