import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getAgents } from '../_lib/actions';
import { formatNumber, formatPrice } from '../_lib/helpers';

export default async function AgentsList() {
  const agents = await getAgents();

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {agents.map((agent) => (
        <div
          className="agentCard flex rounded-md hover:border hover:bg-blue-50"
          key={agent.id}
        >
          <Link href={`/agents/${agent.id}`} className="w-full p-6">
            <div className="flex">
              <div className="block">
                <div className="relative mr-5 aspect-square h-16 w-16 md:h-40 md:w-40">
                  <Image
                    src={agent.image}
                    fill
                    priority
                    alt="agent avatar"
                    className="rounded-full object-cover"
                    sizes="100%"
                  />
                </div>
              </div>

              <div className="flex grow flex-col gap-4">
                <div>
                  <div className="flex justify-between">
                    <span className="rounded-md bg-blue-100 px-1 py-0.5 text-xs font-medium uppercase">
                      {agent.type}
                    </span>
                    <div className="flex items-center justify-center">
                      <span className="mr-1 text-sm font-bold">
                        {agent.rating}
                      </span>
                      <StarIcon fill="#1d4ed8" strokeWidth={0} size="16px" />
                      <span className="text-sm text-gray-500">(234)</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold">{agent.name}</h2>
                  <p className="text-base text-gray-500">{agent.company}</p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <span className="font-bold text-gray-900">
                      {formatNumber(agent.rangeLower)} -{' '}
                      {formatNumber(agent.rangeUpper)}
                    </span>{' '}
                    team price range
                  </p>
                  <p className="text-gray-500">
                    <span className="font-bold text-gray-900">23</span> team
                    sales in last 12 months
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
