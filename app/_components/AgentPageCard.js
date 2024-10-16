import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import { getAgentsProperties } from '../_lib/actions';
import Carousel from './Carousel';

export default async function AgentPageCard({ agent }) {
  const OPTIONS = { align: 'start' };
  const properties = await getAgentsProperties(agent.id);

  return (
    <div className="flex rounded-md border border-gray-200 p-5">
      <div className="flex w-full flex-col gap-5 md:gap-0 lg:flex-row">
        <div className="mx-10 mt-8 flex flex-col items-center gap-4">
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
              <p className="font-normal uppercase">{agent.company}</p>
              <a
                href={`mailto: ${agent.email}`}
                className="text-blue-800 hover:underline"
              >
                {agent.email}
              </a>
            </div>
            <div className="mt-2 flex gap-3">
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
          {properties.length > 0 ? (
            <Carousel slides={properties} options={OPTIONS} agent={agent} />
          ) : (
            <div className="flex h-full w-full items-center justify-center md:my-3 lg:my-0">
              <p className="text-xl font-semibold">
                No recently sold properties
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
