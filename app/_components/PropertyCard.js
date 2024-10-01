import Image from 'next/image';
import prop1 from '@/assets/images/prop1.jpg';
import Link from 'next/link';

export default function PropertyCard({ property }) {
  const { price, beds, sqft, baths, location, soldDays } = property;
  return (
    <Link href="/" className="block">
      <div className="agentProfile flex min-w-0 flex-col overflow-hidden rounded-md border">
        <div className="relative flex-shrink-0">
          <Image
            src={prop1}
            alt={`Property`}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-4">
          <p className="text-lg font-bold">{property.price}</p>
          <p className="text-gray-600">
            <span className="font-bold">{property.beds}</span> bd |{' '}
            <span className="font-bold">{property.baths}</span> ba |{' '}
            <span className="font-bold">{property.sqft}</span> sqft |{' '}
            {property.location}
          </p>
          <div className="mt-2 flex items-center gap-1 text-sm">
            <span className="text-yellow-600">●</span>
            <span className="font-bold">Sold</span> {property.soldDays} days ago
          </div>
        </div>
      </div>
    </Link>
  );
}
