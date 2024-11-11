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
      className="block"
    >
      <div className="agentProfile flex min-w-0 flex-col overflow-hidden rounded-md border">
        <div className="relative flex-shrink-0">
          <ClientCarousel images={images} />
        </div>

        <div className="flex flex-1 flex-col justify-between p-2">
          <div className="mb-2 line-clamp-1 flex justify-between text-xl/[24px] font-bold">
            <p className="">{`${formatPrice(price)}${
              listingType === 'rent' ? '/mo' : ''
            }`}</p>
            <CardActions />
          </div>
          <p className="text-sm text-gray-600">
            <span className="text-sm font-semibold">
              {convertNumber(bedrooms)}
            </span>{' '}
            bds |{' '}
            <span className="font-semibold">{convertNumber(bathrooms)}</span> ba
            | <span className="font-semibold">{sqmeter}</span> sqm -{' '}
            {capitalize(propertyType)} for sale
          </p>
          <div className="flex items-center gap-1 text-sm leading-6 text-[#2A2A33]">
            <span>
              {address}, {city}
            </span>
          </div>

          <div className="text-[10px] uppercase leading-4 text-gray-600">
            Listing by: {agentName}
          </div>
        </div>
      </div>
    </Link>
  );
}
