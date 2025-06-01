import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import { getAgent } from '../_lib/actions';
import { capitalize, convertNumber, formatPrice } from '../_lib/helpers';
import CardActions from './CardActions';
import ClientCarousel from './ImageSwiper';

export default async function PropertyCard({ property }) {
  const {
    price,
    bedrooms,
    images,
    sqmeter,
    bathrooms,
    address,
    city,
    agentId,
    propertyType,
    listingType,
  } = property;
 
  const { name: agentName } = await getAgent(agentId);

  return (
    <Link
      href={`/${listingType === 'sale' ? 'buy' : 'rent'}/${property.id}`}
      className="block h-full"
    >
      <div className="agentProfile flex h-full flex-col overflow-hidden rounded-md border">
        <div className="relative flex-shrink-0">
          <ClientCarousel images={images} />
        </div>

        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="mb-2 flex items-center justify-between text-xl font-bold leading-tight">
            <p className="truncate">{`${formatPrice(price)}${
              listingType === 'rent' ? '/mo' : ''
            }`}</p>
            <CardActions />
          </div>

          <p className="text-sm text-gray-600">
            <span className="font-semibold">{convertNumber(bedrooms)}</span> bds{' '}
            | <span className="font-semibold">{convertNumber(bathrooms)}</span>{' '}
            ba | <span className="font-semibold">{sqmeter}</span> sqm -{' '}
            {capitalize(propertyType)} for sale
          </p>

          <div className="mt-2 flex items-center gap-1 text-sm text-gray-700">
            <span className="truncate">
              {address}, {city}
            </span>
          </div>

          <div className="mt-2 text-xs uppercase text-gray-500">
            Listing by: {agentName}
          </div>
        </div>
      </div>
    </Link>
  );
}
