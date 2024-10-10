import AgentPageCard from '@/app/_components/AgentPageCard';
import ShowMore from '@/app/_components/ShowMore';
import { getAgent, getAgents } from '@/app/_lib/actions';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export async function generateMetadata({ params }) {
  const { name } = await getAgent(params.agentId);
  return {
    title: `${name}`,
  };
}

export async function generateStaticParams() {
  const agents = await getAgents();
  const ids = agents.map((agent) => ({
    agentId: String(agent.id),
  }));
  return ids;
}

export default async function Page({ params }) {
  const agent = await getAgent(params.agentId);
  return (
    <div className="h-full w-full px-4 md:max-w-6xl lg:mx-auto">
      <Breadcrumb className="my-3 text-gray-600">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:underline" href="/agents">
              Agents
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{agent.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <AgentPageCard agent={agent} />
      <div className="my-3 flex flex-col gap-5 rounded-md border border-gray-200 p-5">
        <h1 className="text-xl font-semibold">Get to know {agent.name}</h1>
        <span>Realtor</span>
        <ShowMore text={agent.bio} maxLength={250} />
      </div>
    </div>
  );
}
