import { redirect } from 'next/navigation';
import getSession from '../_lib/getSession';

export const metadata = {
  title: 'Admin Dashboard',
};

async function AdminDashboard() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect('/signin');

  if (user.role !== 'admin') {
    return (
      <main className="mx-auto my-10">
        <p className="text-center">You are not authorized to view this page</p>
      </main>
    );
  }

  return (
    <div className="h-full w-full bg-blue-50 px-4 py-10 md:max-w-6xl lg:mx-auto">
      <div className="h-full bg-red-50">red</div>
    </div>
  );
}

export default AdminDashboard;
