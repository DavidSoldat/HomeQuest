import AgentPageCard from '@/app/_components/AgentPageCard';
import { getAgent, getAgents } from '@/app/_lib/actions';

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
    <div className="h-full w-full px-4 py-10 md:max-w-6xl lg:mx-auto">
      <AgentPageCard agent={agent} />
    </div>
  );
}
