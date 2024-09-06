import { redirect } from 'next/navigation';
import getSession from '../_lib/getSession';
import { getAgents } from '../_lib/actions';

export const metadata = {
  title: 'Admin Dashboard',
};

async function AdminDashboard() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect('/signin');
  const agents = await getAgents();

  if (user.role !== 'admin') {
    return (
      <main className="mx-auto my-10">
        <p className="text-center">You are not authorized to view this page</p>
      </main>
    );
  }

  return (
    <div className="h-full w-full px-4 py-10 md:max-w-6xl lg:mx-auto">
      <div className="h-full">Number of agents: {agents.length}</div>
    </div>
  );
}

export default AdminDashboard;
