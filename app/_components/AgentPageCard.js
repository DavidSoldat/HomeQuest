import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Carousel from './Carousel';
import prop1 from '@/assets/images/prop1.jpg';
import prop2 from '@/assets/images/prop2.jpg';
import prop3 from '@/assets/images/prop3.jpg';

const properties = [
  {
    price: '$2,700,000',
    beds: 2,
    baths: 3,
    sqft: 1331,
    location: 'New York, NY',
    soldDays: 4,
    src: prop1,
  },
  {
    price: '$415,000',
    beds: 1,
    baths: 1,
    sqft: 0,
    location: 'Brooklyn, NY',
    soldDays: 12,
    src: prop2,
  },
  {
    price: '$635,000',
    beds: 2,
    baths: 1,
    sqft: 950,
    location: 'Manhattan, NY',
    soldDays: 13,
    src: prop3,
  },
  {
    price: '$2,700,000',
    beds: 2,
    baths: 3,
    sqft: 1331,
    location: 'New York, NY',
    soldDays: 4,
    src: prop1,
  },
  {
    price: '$415,000',
    beds: 1,
    baths: 1,
    sqft: 0,
    location: 'Brooklyn, NY',
    soldDays: 12,
    src: prop2,
  },
  {
    price: '$635,000',
    beds: 2,
    baths: 1,
    sqft: 950,
    location: 'Manhattan, NY',
    soldDays: 13,
    src: prop3,
  },
];

export default function AgentPageCard({ agent }) {
  const OPTIONS = { align: 'start' };
  return (
    <div className="boxShadow flex rounded-md border border-gray-200 p-5">
      <div className="flex w-full flex-col p-3 lg:flex-row">
        <div className="mx-10 mt-3 flex flex-col items-center gap-4">
          <div className="block">
            <div className="relative aspect-square h-40 w-40">
              <Image
                src={agent.image}
                fill
                alt="agent avatar"
                className="rounded-full object-cover"
                sizes="100%"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-semibold">{agent.name}</h2>
            <div className="flex w-full flex-col items-center">
              <p className="font-medium">{agent.company}</p>
              <p className="text-gray-700">{agent.email}</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-md bg-blue-100 px-1 py-0.5 text-xs font-medium uppercase">
                {agent.type}
              </span>
              <div className="flex">
                <span className="mr-1 text-sm font-bold">{agent.rating}</span>
                <StarIcon fill="#1d4ed8" strokeWidth={0} size="16px" />
                <span className="text-sm text-gray-500">(234)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <Carousel slides={properties} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}
