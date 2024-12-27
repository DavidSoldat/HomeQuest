import Image from 'next/image';
import Link from 'next/link';
import { capitalize, convertNumber, formatPrice } from '../_lib/helpers';

export default function PropertyPopover({ property }) {
  return (
    <div className="popover-content">
      <Link href={`/buy/${property.id}`} passHref>
        <div className="agentProfile flex min-w-0 flex-col overflow-hidden rounded-md border">
          <div className="relative flex-shrink-0">
            <Image
              src={property.images[0]}
              alt={`Property - ${property.address}`}
              width={600}
              height={400}
              className="h-48 w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between p-2">
            <div className="mb-2 line-clamp-1 flex justify-between text-xl/[24px] font-bold">
              {`${formatPrice(property.price)}${property.listingType === 'rent' ? '/mo' : ''}`}
            </div>
            <p className="text-sm text-gray-600">
              <span className="text-sm font-semibold">
                {convertNumber(property.bedrooms)}
              </span>{' '}
              bds |{' '}
              <span className="font-semibold">
                {convertNumber(property.bathrooms)}
              </span>{' '}
              ba | <span className="font-semibold">{property.sqmeter}</span> sqm
              - {capitalize(property.propertyType)} for sale
            </p>
            <div className="flex items-center gap-1 text-sm leading-6 text-[#2A2A33]">
              <span>
                {property.address}, {property.city}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
