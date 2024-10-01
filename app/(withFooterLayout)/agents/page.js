import AgentsList from '../../_components/AgentsList';

export const metadata = {
  title: 'Agents',
};

export const revalidate = 3600;

function Agents() {
  return (
    <div className="relative flex w-full flex-col items-center gap-8 px-4 pb-20 pt-10 md:max-w-6xl lg:mx-auto">
      <div className="text-primary-darkGray text-center text-2xl font-semibold leading-tight">
        A great agent makes all the difference
      </div>
      <p className="max-w-4xl text-center">
        With hundreds of agents from all the top brokerages, a local agent knows
        your market and can guide you through the process from start to finish
      </p>

      <AgentsList />
    </div>
  );
}

export default Agents;
