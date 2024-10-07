import Image from 'next/image';
import Link from 'next/link';
import { getAgent } from '../_lib/actions';
import { convertNumber, formatPrice } from '../_lib/helpers';
import CardActions from './CardActions';

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
  } = property;

  const { name: agentName } = await getAgent(agentId);

  const firstImageUrl =
    images && images.length > 0 ? images[0] : '/path/to/default/image.jpg';
  return (
    <Link href="/" className="block">
      <div className="agentProfile flex min-w-0 flex-col overflow-hidden rounded-md border">
        <div className="relative flex-shrink-0">
          <Image
            src={firstImageUrl}
            alt={`Property - ${address}`}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-2">
          <div className="mb-2 line-clamp-1 flex justify-between text-xl/[24px] font-bold">
            <p className="">{formatPrice(price)}</p>
            <CardActions />
          </div>
          <p className="text-sm text-gray-600">
            <span className="text-sm font-semibold">
              {convertNumber(bedrooms)}
            </span>{' '}
            bds |{' '}
            <span className="font-semibold">{convertNumber(bathrooms)}</span> ba
            | <span className="font-semibold">{sqmeter}</span> sqm - Condo for
            sale
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
