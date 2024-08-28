import agentImage from '@/assets/images/agent-image.jpg';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import { faker } from '@faker-js/faker';
import Link from 'next/link';

export default function AgentCard() {
  function createAgent() {
    return {
      _id: faker.string.uuid(),
      avatar: agentImage,
      email: faker.internet.email(),
      fullName: faker.person.fullName(),
      type: faker.helpers.arrayElement(['team']),
      rating: (Math.random() * 5.0).toFixed(1),
    };
  }

  const agents = Array.from({ length: 10 }, createAgent);

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {agents.map((agent) => (
        <div
          className="agentCard flex rounded-md hover:border hover:bg-blue-50"
          key={agent._id}
        >
          <Link href="/" className="w-full p-6">
            <div className="flex">
              <div className="block">
                <div className="relative mr-5 aspect-square h-16 w-16 md:h-40 md:w-40">
                  <Image
                    src={agentImage}
                    fill
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
                      team
                    </span>
                    <div className="flex items-center justify-center">
                      <span className="mr-1 text-sm font-bold">
                        {agent.rating}
                      </span>
                      <StarIcon fill="#1d4ed8" strokeWidth={0} size="16px" />
                      <span className="text-sm text-gray-500">(234)</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold">{agent.fullName}</h2>
                  <p className="text-base text-gray-500">BL Realestate</p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <span className="font-bold text-gray-900">
                      €152K - €452K
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
