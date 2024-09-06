import { Settings2, UserRoundPlus } from 'lucide-react';
import Link from 'next/link';

export default function layoutAdmin({ children }) {
  return (
    <div className="flex w-full gap-6 px-3 pb-10 pt-6 md:max-w-6xl lg:mx-auto">
      <aside className="boxShadow flex w-1/5 flex-col rounded-lg border">
        <h1 className="mb-4 w-full bg-gray-100 py-4 text-center text-lg font-semibold text-gray-700">
          Admin Dashboard
        </h1>
        <Link className="dashboardSideButton" href="/admin/addagent">
          <UserRoundPlus size={16} />
          Add Agent
        </Link>
        <Link className="dashboardSideButton" href="/admin/manageagents">
          <Settings2 size={16} />
          Manage Agents
        </Link>
      </aside>
      <div className="w-4/5">{children}</div>
    </div>
  );
}
