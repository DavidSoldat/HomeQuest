import Image from 'next/image';
import prop1 from '@/assets/images/prop1.jpg';
import Link from 'next/link';

export default function PropertyCard({ property }) {
  const { price, beds, sqft, baths, location, soldDays } = property;
  return (
    <Link href="/">
      <div className="agentProfile min-w-72 max-w-96 overflow-hidden rounded-md border">
        <div className="relative">
          <Image
            src={prop1}
            alt={`Property`}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
        </div>

        <div className="p-4">
          <p className="text-lg font-bold">{price}</p>
          <p className="text-gray-600">
            <span className="font-bold">{beds}</span> bd |{' '}
            <span className="font-bold">{baths}</span> ba |{' '}
            <span className="font-bold">{sqft}</span> sqft | {location}
          </p>
          <div className="mt-2 flex items-center gap-1 text-sm">
            <span className="text-yellow-600">●</span>
            <span className="font-bold">Sold</span> {soldDays} days ago
          </div>
        </div>
      </div>
    </Link>
  );
}
