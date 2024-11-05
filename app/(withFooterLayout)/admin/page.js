import { redirect } from 'next/navigation';
import getSession from '../../_lib/getSession';
import { getAgents, getAllProperties, getProperties } from '../../_lib/actions';

export const metadata = {
  title: 'Admin Dashboard',
};

async function AdminDashboard() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect('/signin');
  const agents = await getAgents();
  const properties = await getAllProperties();

  if (user.role !== 'admin') {
    return (
      <main className="mx-auto my-10">
        <p className="text-center">You are not authorized to view this page</p>
      </main>
    );
  }

  return (
    <div className="h-full w-full px-4 py-10 md:max-w-6xl lg:mx-auto">
      <div className="flex h-full flex-col">
        <p>Number of agents: {agents.length}</p>
        <p>Number of properties: {properties.length}</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
