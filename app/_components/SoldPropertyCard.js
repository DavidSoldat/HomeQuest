import Image from 'next/image';
import Link from 'next/link';
import { calculateDays, convertNumber, formatPrice } from '../_lib/helpers';

export default function SoldPropertyCard({ property }) {
  const {
    price,
    bedrooms,
    images,
    sqmeter,
    bathrooms,
    address,
    soldDate,
    city,
  } = property;

  const firstImageUrl =
    images && images.length > 0 ? images[0] : '/path/to/default/image.jpg';

  return (
    <Link href={`/buy/${property.id}`} className="block">
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

        <div className="flex flex-1 flex-col justify-between p-2 px-3">
          <p className="text-lg font-bold">{formatPrice(price)}</p>
          <p className="text-gray-600">
            <span className="font-bold">{convertNumber(bedrooms)}</span> bds |{' '}
            <span className="font-bold">{convertNumber(bathrooms)}</span> ba |{' '}
            <span className="font-bold">{sqmeter}</span> sqm | {city}
          </p>
          <div className="mt-1 flex items-center gap-1 text-sm">
            <span className="text-yellow-600">●</span>
            <span className="font-bold">Sold</span> {calculateDays(soldDate)}{' '}
            days ago
          </div>
        </div>
      </div>
    </Link>
  );
}
