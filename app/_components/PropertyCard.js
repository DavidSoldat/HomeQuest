import Image from 'next/image';
import prop1 from '@/assets/images/prop1.jpg';

export default function PropertyCard({ property }) {
  const { price, beds, sqft, baths, location, soldDays } = property;
  return (
    <div className="agentProfile min-w-72 max-w-96 overflow-hidden rounded-lg border">
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
        <p className="text-lg font-semibold">{price}</p>
        <p className="text-gray-600">
          {beds} bd | {baths} ba | {sqft ? `${sqft} sqft` : 'No sqft info'} |{' '}
          {location}
        </p>
        <div className="mt-2 flex items-center text-sm font-medium text-yellow-600">
          <span>●</span> Sold {soldDays} days ago
        </div>
      </div>
    </div>
  );
}
