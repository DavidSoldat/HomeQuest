import { StarIcon } from 'lucide-react';
import Image from 'next/image';

export default function AgentPage({ agent }) {
  return (
    <div className="boxShadow flex rounded-md border border-gray-200 p-5">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex flex-col items-center gap-4">
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
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-semibold">{agent.name}</h2>
            <p>{agent.email}</p>
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
        <div></div>
      </div>
    </div>
  );
}